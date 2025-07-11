import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Search, Phone, Loader2, Shield, Zap, Database } from 'lucide-react'

export function SearchForm({ onSearch, isLoading }) {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [error, setError] = useState('')

  const validatePhoneNumber = (number) => {
    // Remove any spaces or special characters except +
    const cleaned = number.replace(/\s+/g, '').replace(/[^\d+]/g, '')
    
    // Check if it matches the format +923XXXXXXXXX or 03XXXXXXXXX (11 digits starting with 03)
    const phoneRegex = /^(03\d{9})$/
    
    if (!phoneRegex.test(cleaned)) {
      return 'Please enter a valid Pakistani phone number (03XXXXXXXXX)'
    }
    
    return null
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    
    const validationError = validatePhoneNumber(phoneNumber)
    if (validationError) {
      setError(validationError)
      return
    }
    
    // Clean the phone number
    let cleanedNumber = phoneNumber.replace(/\s+/g, '').replace(/[^\d+]/g, '')
    
    onSearch(cleanedNumber)
  }

  const handleInputChange = (e) => {
    let value = e.target.value
    setPhoneNumber(value)
    
    // Clear error when user starts typing
    if (error) {
      setError('')
    }
  }

  return (
    <div className="w-full">
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader className="text-center pb-6">
          <CardTitle className="text-2xl font-bold text-white flex items-center justify-center gap-3">
            <Search className="h-7 w-7 text-blue-400" />
            Phone Number Lookup
          </CardTitle>
          <p className="text-gray-400">
            Enter a Pakistani phone number to discover comprehensive information
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2 text-gray-400">
                  <span className="text-lg">🇵🇰</span>
                  <span className="text-sm font-medium">+92</span>
                </div>
                <Input
                  type="tel"
                  placeholder="3001234567"
                  value={phoneNumber}
                  onChange={handleInputChange}
                  className={`pl-20 h-12 text-lg bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 ${
                    error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                  }`}
                  disabled={isLoading}
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <Phone className="h-5 w-5 text-gray-400" />
                </div>
              </div>
              {error && (
                <div className="bg-red-900/20 border border-red-500/20 rounded-lg p-3">
                  <p className="text-sm text-red-400 flex items-center space-x-2">
                    <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                    <span>{error}</span>
                  </p>
                </div>
              )}
            </div>

            <Button 
              type="submit" 
              className="w-full h-12 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white" 
              disabled={isLoading || !phoneNumber.trim()}
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                  Searching...
                </>
              ) : (
                <>
                  <Search className="h-5 w-5 mr-2" />
                  Search Now
                </>
              )}
            </Button>
          </form>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-gray-700">
            <div className="flex items-center space-x-3 text-sm">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="h-4 w-4 text-white" />
              </div>
              <div>
                <div className="text-white font-medium">Instant Results</div>
                <div className="text-gray-400">Real-time search</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <Shield className="h-4 w-4 text-white" />
              </div>
              <div>
                <div className="text-white font-medium">Secure & Private</div>
                <div className="text-gray-400">Protected data</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <Database className="h-4 w-4 text-white" />
              </div>
              <div>
                <div className="text-white font-medium">Comprehensive</div>
                <div className="text-gray-400">Complete records</div>
              </div>
            </div>
          </div>

          <div className="text-center pt-2">
            <p className="text-xs text-gray-500">
              Tip: Enter phone number in format 03XXXXXXXXX (11 digits)
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

