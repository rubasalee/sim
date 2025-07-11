import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Search, Phone } from 'lucide-react'

export function SearchForm({ onSearch, isLoading }) {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [error, setError] = useState('')

  const validatePhoneNumber = (number) => {
    // Remove any spaces or special characters
    const cleaned = number.replace(/\s+/g, '').replace(/[^\d]/g, '')
    
    // Check if it matches the format 03XXXXXXXXX (11 digits starting with 03)
    const phoneRegex = /^03\d{9}$/
    
    if (!phoneRegex.test(cleaned)) {
      return 'Please enter a valid phone number in format 03XXXXXXXXX'
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
    
    // Clean the phone number before sending
    const cleanedNumber = phoneNumber.replace(/\s+/g, '').replace(/[^\d]/g, '')
    onSearch(cleanedNumber)
  }

  const handleInputChange = (e) => {
    const value = e.target.value
    setPhoneNumber(value)
    
    // Clear error when user starts typing
    if (error) {
      setError('')
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2">
          <Phone className="h-6 w-6" />
          CheckSimInfo
        </CardTitle>
        <CardDescription>
          Enter a phone number to search for information
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              type="tel"
              placeholder="03XXXXXXXXX"
              value={phoneNumber}
              onChange={handleInputChange}
              className={error ? 'border-destructive' : ''}
              disabled={isLoading}
            />
            {error && (
              <p className="text-sm text-destructive">{error}</p>
            )}
          </div>
          <Button 
            type="submit" 
            className="w-full" 
            disabled={isLoading || !phoneNumber.trim()}
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Searching...
              </>
            ) : (
              <>
                <Search className="h-4 w-4 mr-2" />
                Search
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

