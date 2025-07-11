import fetch from 'node-fetch';
import * as cheerio from 'cheerio';

// Utility functions
function normalizeLabel(text) {
  return text
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
}

function validatePhoneNumber(phoneNumber) {
  const cleaned = phoneNumber.replace(/\s+/g, '').replace(/[^\d]/g, '');
  const phoneRegex = /^03\d{9}$/;
  return phoneRegex.test(cleaned);
}

function cleanPhoneNumber(phoneNumber) {
  return phoneNumber.replace(/\s+/g, '').replace(/[^\d]/g, '');
}

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { phoneNumber } = req.body;

    // Validate input
    if (!phoneNumber) {
      return res.status(400).json({ error: 'Phone number is required' });
    }

    const cleanedNumber = cleanPhoneNumber(phoneNumber);
    
    if (!validatePhoneNumber(cleanedNumber)) {
      return res.status(400).json({ error: 'Invalid phone number format. Please use format 03XXXXXXXXX' });
    }

    // Make request to checksiminfo.pk
    const url = `https://checksiminfo.pk/wp-admin/admin-ajax.php?action=get_number_data&get_number_data=searchdata=${cleanedNumber}`;
    
    const headers = {
      "accept": "*/*",
      "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
      "referer": "https://checksiminfo.pk/",
      "sec-ch-ua": '"Not)A;Brand";v="8", "Chromium";v="138", "Google Chrome";v="138"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36"
    };

    const response = await fetch(url, {
      method: 'GET',
      headers: headers,
      timeout: 15000
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      throw new Error('Response is not JSON');
    }

    const data = await response.json();

    if (!data.success || !data.data) {
      return res.json({ results: [] });
    }

    // Parse HTML using Cheerio (equivalent to BeautifulSoup)
    const $ = cheerio.load(data.data);
    const results = [];

    $('.result-card').each((index, card) => {
      const record = {};
      
      $(card).find('.field').each((fieldIndex, field) => {
        const labelTag = $(field).find('label.info');
        const valueDiv = $(field).find('div');
        
        if (labelTag.length && valueDiv.length) {
          const key = normalizeLabel(labelTag.text());
          const value = valueDiv.text().trim();
          record[key] = value;
        }
      });
      
      if (Object.keys(record).length > 0) {
        results.push(record);
      }
    });

    res.json({ results });

  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({ 
      error: 'An error occurred while searching. Please try again later.' 
    });
  }
}

