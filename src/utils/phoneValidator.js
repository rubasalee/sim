/**
 * Validate phone number format for Pakistani numbers
 */
export function validatePhoneNumber(phoneNumber) {
  // Remove any spaces or special characters
  const cleaned = phoneNumber.replace(/\s+/g, '').replace(/[^\d]/g, '');
  
  // Check if it matches the format 03XXXXXXXXX (11 digits starting with 03)
  const phoneRegex = /^03\d{9}$/;
  
  return phoneRegex.test(cleaned);
}

/**
 * Clean phone number by removing non-digit characters
 */
export function cleanPhoneNumber(phoneNumber) {
  return phoneNumber.replace(/\s+/g, '').replace(/[^\d]/g, '');
}

