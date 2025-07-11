import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Search, Phone, Loader2 } from 'lucide-react'

export function SearchForm({ onSearch, isLoading }) {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [error, setError] = useState('')

  const validatePhoneNumber = (number) => {
    // Remove any spaces or special characters except +
    const cleaned = number.replace(/\s+/g, '').replace(/[^\d+]/g, '')
    
    // Check if it matches the format +923XXXXXXXXX or 03XXXXXXXXX (11 digits starting with 03)
    const phoneRegex = /^(\+923\d{9}|03\d{9})$/
    
    if (!phoneRegex.test(cleaned)) {
      return 'Please enter a valid Pakistani phone number (03XXXXXXXXX or +923XXXXXXXXX)'
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
    
    // Clean the phone number and convert to 03 format
    let cleanedNumber = phoneNumber.replace(/\s+/g, '').replace(/[^\d+]/g, '')
    if (cleanedNumber.startsWith('+923')) {
      cleanedNumber = '0' + cleanedNumber.slice(4)
    }
    
    onSearch(cleanedNumber)
  }

  const handleInputChange = (e) => {
    let value = e.target.value
    
    // Auto-format with +92 prefix if user starts typing without it
    if (value.length === 1 && value === '3') {
      value = '+92 3'
    } else if (value.length === 1 && value === '0') {
      value = '03'
    }
    
    setPhoneNumber(value)
    
    // Clear error when user starts typing
    if (error) {
      setError('')
    }
  }

  return (
    <div className="w-full max-w-md mx-auto animate-fade-in-up">
      <Card className="shadow-soft-lg border-0 glass-effect">
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Phone className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              Phone Lookup
            </h2>
            <p className="text-muted-foreground text-sm">
              Enter a Pakistani phone number to search for information
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2 text-muted-foreground">
                  <span className="text-sm font-medium">🇵🇰</span>
                  <span className="text-sm">+92</span>
                </div>
                <Input
                  type="tel"
                  placeholder="3XXXXXXXXX"
                  value={phoneNumber}
                  onChange={handleInputChange}
                  className={`pl-20 h-12 text-lg border-2 transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 ${
                    error ? 'border-destructive focus:border-destructive focus:ring-destructive/20' : 'border-border'
                  }`}
                  disabled={isLoading}
                />
              </div>
              {error && (
                <div className="animate-fade-in">
                  <p className="text-sm text-destructive flex items-center space-x-1">
                    <span className="w-1 h-1 bg-destructive rounded-full"></span>
                    <span>{error}</span>
                  </p>
                </div>
              )}
            </div>

            <Button 
              type="submit" 
              className="w-full h-12 text-lg font-medium bg-primary hover:bg-primary/90 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-soft" 
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
                  Search
                </>
              )}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-muted-foreground">
              Powered by{' '}
              <span className="font-medium text-accent">checksiminfo.pk</span> API
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

