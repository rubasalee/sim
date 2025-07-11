import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert.jsx'
import { Button } from '@/components/ui/button.jsx'
import { AlertTriangle, RefreshCw, Search } from 'lucide-react'

export function ErrorMessage({ error, onRetry }) {
  return (
    <div className="w-full max-w-md mx-auto mt-8 animate-fade-in-up">
      <Alert className="border-0 shadow-soft-lg glass-effect bg-destructive/5 border-l-4 border-l-destructive">
        <AlertTriangle className="h-5 w-5 text-destructive" />
        <AlertTitle className="text-destructive font-semibold">
          Search Error
        </AlertTitle>
        <AlertDescription className="mt-2 text-foreground/80">
          {error}
          {onRetry && (
            <Button 
              variant="outline" 
              size="sm" 
              onClick={onRetry}
              className="mt-4 w-full border-destructive/20 hover:bg-destructive/10 hover:border-destructive/30 transition-all duration-200"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Try Again
            </Button>
          )}
        </AlertDescription>
      </Alert>
      
      <div className="mt-4 text-center">
        <p className="text-xs text-muted-foreground">
          Having trouble? Make sure you're using a valid Pakistani phone number format
        </p>
      </div>
    </div>
  )
}

export function EmptyState({ searchedNumber, onNewSearch }) {
  return (
    <div className="w-full max-w-md mx-auto mt-8 animate-fade-in-up">
      <Alert className="border-0 shadow-soft-lg glass-effect bg-muted/30 text-center">
        <div className="flex flex-col items-center space-y-4 py-4">
          <div className="w-16 h-16 bg-muted/50 rounded-full flex items-center justify-center">
            <Search className="h-8 w-8 text-muted-foreground" />
          </div>
          <div>
            <AlertTitle className="text-lg font-semibold text-foreground">
              No Results Found
            </AlertTitle>
            <AlertDescription className="mt-2 text-muted-foreground">
              No information was found for{' '}
              <span className="font-mono font-medium">{searchedNumber}</span>
            </AlertDescription>
          </div>
          {onNewSearch && (
            <Button 
              variant="outline" 
              onClick={onNewSearch}
              className="mt-2 transition-all duration-200 hover:scale-105"
            >
              <Search className="h-4 w-4 mr-2" />
              Try Another Number
            </Button>
          )}
        </div>
      </Alert>
      
      <div className="mt-4 text-center">
        <p className="text-xs text-muted-foreground">
          This number might not be registered or publicly available
        </p>
      </div>
    </div>
  )
}

