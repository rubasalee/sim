# CheckSimInfo Website

A modern web application that replicates the functionality of the original Python script for searching phone number information from checksiminfo.pk. Built with React and designed for deployment on Vercel.

## Features

- **Modern UI**: Clean, responsive design with Tailwind CSS and shadcn/ui components
- **Phone Number Search**: Search for information using Pakistani phone numbers (03XXXXXXXXX format)
- **Real-time Results**: Display search results in a professional table format
- **Error Handling**: Comprehensive error handling and validation
- **Mobile Responsive**: Works seamlessly on desktop and mobile devices
- **Vercel Ready**: Optimized for deployment on Vercel with serverless functions

## Technology Stack

### Frontend
- **React 19**: Modern React with hooks
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: High-quality UI components
- **Lucide React**: Beautiful icons

### Backend
- **Node.js**: Serverless functions for API endpoints
- **Cheerio**: Server-side HTML parsing (equivalent to BeautifulSoup)
- **node-fetch**: HTTP client for external API calls

## Project Structure

```
checksiminfo-website/
├── src/
│   ├── components/
│   │   ├── SearchForm.jsx      # Phone number input form
│   │   ├── ResultsTable.jsx    # Search results display
│   │   └── ErrorMessage.jsx    # Error handling component
│   ├── utils/
│   │   ├── normalizeLabel.js   # Label normalization utility
│   │   └── phoneValidator.js   # Phone number validation
│   ├── App.jsx                 # Main application component
│   └── App.css                 # Global styles
├── api/
│   └── search.js              # Vercel serverless function
├── server.js                  # Development server
├── vercel.json               # Vercel configuration
└── package.json              # Dependencies and scripts
```

## Development

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```

### Running Locally
1. Start the development server:
   ```bash
   pnpm run dev
   ```
2. For full-stack development (with API server):
   ```bash
   pnpm run server  # In one terminal
   pnpm run dev     # In another terminal
   ```

The application will be available at `http://localhost:5173`

## Deployment on Vercel

### Method 1: Vercel CLI
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Method 2: GitHub Integration
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on push

### Environment Variables
No environment variables are required for basic functionality.

## API Endpoints

### POST /api/search
Search for phone number information.

**Request Body:**
```json
{
  "phoneNumber": "03001234567"
}
```

**Response:**
```json
{
  "results": [
    {
      "full_name": "John Doe",
      "phone": "03001234567",
      "cnic": "1234567890123",
      "address": "123 Main Street, City"
    }
  ]
}
```

## Features Comparison with Original Python Script

| Feature | Python Script | Web Application |
|---------|---------------|-----------------|
| Phone number search | ✅ | ✅ |
| Data parsing | BeautifulSoup | Cheerio |
| Results display | Console table | Web table |
| Input validation | Basic | Enhanced with UI feedback |
| Error handling | Basic | Comprehensive with user-friendly messages |
| User interface | Command line | Modern web interface |
| Deployment | Local only | Cloud-ready (Vercel) |

## Security Considerations

- Input validation and sanitization
- CORS configuration for API endpoints
- Error handling without exposing sensitive information
- Rate limiting considerations for production use

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is for educational purposes. Please respect the terms of service of checksiminfo.pk and use responsibly.

## Disclaimer

This tool searches public information. Please use responsibly and respect privacy. The developers are not responsible for misuse of this application.

