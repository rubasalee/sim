import { Button } from '@/components/ui/button.jsx'
import { Shield, Phone, Mail, MapPin, ExternalLink } from 'lucide-react'

export function Footer() {
  const footerLinks = [
    {
      title: 'Service',
      links: [
        { label: 'Phone Lookup', href: '#' },
        { label: 'CNIC Search', href: '#' },
        { label: 'Bulk Search', href: '#' },
        { label: 'API Access', href: '#' },
      ]
    },
    {
      title: 'Support',
      links: [
        { label: 'Help Center', href: '#' },
        { label: 'Contact Us', href: '#' },
        { label: 'Report Issue', href: '#' },
        { label: 'FAQ', href: '#' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Data Protection', href: '#' },
        { label: 'Disclaimer', href: '#' },
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#' },
        { label: 'Our Mission', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Press', href: '#' },
      ]
    }
  ]

  return (
    <footer className="bg-gray-900 border-t border-gray-700 mt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">CheckSimInfo</span>
                <div className="text-sm text-gray-400">Phone Lookup Service</div>
              </div>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Pakistan's most trusted phone number lookup service. We provide fast, 
              secure, and reliable information search with comprehensive database coverage.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Phone className="h-4 w-4" />
                <span>Powered by checksiminfo.pk API</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>Serving Pakistan Nationwide</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Mail className="h-4 w-4" />
                <span>support@checksiminfo.pk</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Button
                      variant="link"
                      className="text-gray-400 hover:text-white p-0 h-auto font-normal justify-start"
                    >
                      {link.label}
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-8 border-t border-gray-700">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400 mb-1">1M+</div>
            <div className="text-sm text-gray-400">Records Searched</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400 mb-1">99.9%</div>
            <div className="text-sm text-gray-400">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400 mb-1">&lt;2s</div>
            <div className="text-sm text-gray-400">Average Response</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-400 mb-1">24/7</div>
            <div className="text-sm text-gray-400">Service Availability</div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2025 CheckSimInfo. All rights reserved. Made with ❤️ for Pakistan.
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Service Status: Online</span>
              </div>
              <div className="text-sm text-gray-400">
                Last Updated: {new Date().toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 p-4 bg-gray-800 rounded-lg border border-gray-700">
          <p className="text-xs text-gray-500 leading-relaxed">
            <strong>Disclaimer:</strong> This tool searches public information responsibly. 
            We prioritize privacy and encourage ethical use. All data is sourced from publicly 
            available databases and presented for informational purposes only. Users are responsible 
            for complying with applicable laws and regulations when using this service.
          </p>
        </div>
      </div>
    </footer>
  )
}

