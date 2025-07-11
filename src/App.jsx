import { useState } from 'react'
import { SearchForm } from './components/SearchForm.jsx'
import { ResultsTable } from './components/ResultsTable.jsx'
import { ErrorMessage } from './components/ErrorMessage.jsx'
import './App.css'

function App() {
  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [searchedNumber, setSearchedNumber] = useState('')

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-8 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            CheckSimInfo
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Phone Number Information Lookup Service
          </p>
        </div>

        <SearchForm onSearch={handleSearch} isLoading={isLoading} />
        
        {error && (
          <ErrorMessage error={error} onRetry={handleRetry} />
        )}
        
        {results.length > 0 && (
          <ResultsTable results={results} searchedNumber={searchedNumber} />
        )}

        <footer className="text-center mt-12 text-sm text-gray-500 dark:text-gray-400">
          <p>
            This tool searches public information. Please use responsibly and respect privacy.
          </p>
        </footer>
      </div>
    </div>
  )
}

export default App

