import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert.jsx'
import { AlertCircle, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

export function ErrorMessage({ error, onRetry }) {
  return (
    <Alert variant="destructive" className="w-full max-w-md mx-auto mt-6">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription className="mt-2">
        {error}
        {onRetry && (
          <Button 
            variant="outline" 
            size="sm" 
            onClick={onRetry}
            className="mt-3 w-full"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Try Again
          </Button>
        )}
      </AlertDescription>
    </Alert>
  )
}

