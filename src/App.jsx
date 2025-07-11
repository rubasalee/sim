import { useState } from 'react'
import { SearchForm } from './components/SearchForm.jsx'
import { ResultsTable } from './components/ResultsTable.jsx'
import { ErrorMessage, EmptyState } from './components/ErrorMessage.jsx'
import { LoadingSpinner } from './components/LoadingSpinner.jsx'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { Sidebar } from './components/Sidebar.jsx'
import './App.css'

function App() {
  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [searchedNumber, setSearchedNumber] = useState('')
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
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
    <div className={`min-h-screen bg-gray-900 text-white ${isDarkMode ? 'dark' : ''}`}>
      {/* Header */}
      <Header 
        onToggleSidebar={toggleSidebar}
        onToggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
      />

      {/* Sidebar */}
      <Sidebar 
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main Content */}
      <main className={`transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Pakistani Phone Number Lookup
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Fast, secure, and reliable phone number information search service. 
              Get comprehensive details about any Pakistani mobile number instantly.
            </p>
          </div>

          {/* Search Section */}
          <div className="max-w-4xl mx-auto mb-12">
            <SearchForm onSearch={handleSearch} isLoading={isLoading} />
          </div>
          
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
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App

