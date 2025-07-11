import { useState } from 'react'
import { SearchForm } from './components/SearchForm.jsx'
import { ResultsTable } from './components/ResultsTable.jsx'
import { ErrorMessage, EmptyState } from './components/ErrorMessage.jsx'
import { LoadingSpinner } from './components/LoadingSpinner.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Moon, Sun, Shield, Zap, Users } from 'lucide-react'
import './App.css'

function App() {
  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [searchedNumber, setSearchedNumber] = useState('')
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  const handleSearch = async (phoneNumber) => {
    setIsLoading(true)
    setError('')
    setResults([])
    setSearchedNumber(phoneNumber)

    try {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Search failed')
      }

      if (data.results && data.results.length > 0) {
        setResults(data.results)
      } else {
        setError('No data found for this phone number')
      }
    } catch (err) {
      setError(err.message || 'An error occurred while searching')
    } finally {
      setIsLoading(false)
    }
  }

  const handleRetry = () => {
    if (searchedNumber) {
      handleSearch(searchedNumber)
    }
  }

  const handleNewSearch = () => {
    setResults([])
    setError('')
    setSearchedNumber('')
  }

  return (
    <div className={`min-h-screen transition-all duration-500 ${isDarkMode ? 'dark' : ''}`}>
      {/* Background with gradient */}
      <div className="min-h-screen bg-background relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Header */}
        <header className="relative z-10 pt-8 pb-4">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-foreground">CheckSimInfo</span>
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleDarkMode}
                className="rounded-full w-10 h-10 p-0 hover:bg-muted/50 transition-all duration-200"
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5 text-foreground" />
                ) : (
                  <Moon className="h-5 w-5 text-foreground" />
                )}
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="relative z-10 container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              Pakistani Phone Number
              <span className="block text-primary">Information Lookup</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Fast, secure, and reliable phone number information search service. 
              Get comprehensive details about any Pakistani mobile number instantly.
            </p>
            
            {/* Feature highlights */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Zap className="h-4 w-4 text-accent" />
                <span>Instant Results</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4 text-accent" />
                <span>Secure & Private</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Users className="h-4 w-4 text-accent" />
                <span>Comprehensive Data</span>
              </div>
            </div>
          </div>

          {/* Search Form */}
          <SearchForm onSearch={handleSearch} isLoading={isLoading} />
          
          {/* Loading State */}
          {isLoading && (
            <LoadingSpinner searchedNumber={searchedNumber} />
          )}
          
          {/* Error State */}
          {error && !isLoading && (
            error === 'No data found for this phone number' ? (
              <EmptyState searchedNumber={searchedNumber} onNewSearch={handleNewSearch} />
            ) : (
              <ErrorMessage error={error} onRetry={handleRetry} />
            )
          )}
          
          {/* Results */}
          {results.length > 0 && !isLoading && (
            <ResultsTable results={results} searchedNumber={searchedNumber} />
          )}
        </main>

        {/* Footer */}
        <footer className="relative z-10 mt-16 border-t border-border/50 bg-card/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center space-y-4">
              <div className="flex justify-center items-center space-x-2">
                <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                  <Shield className="h-4 w-4 text-white" />
                </div>
                <span className="font-semibold text-foreground">CheckSimInfo</span>
              </div>
              
              <p className="text-sm text-muted-foreground max-w-md mx-auto">
                This tool searches public information responsibly. Please respect privacy and use ethically.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
                <span>Powered by checksiminfo.pk API</span>
                <span>•</span>
                <span>Made with ❤️ for Pakistan</span>
                <span>•</span>
                <span>© 2025 CheckSimInfo</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App

