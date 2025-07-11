import { Card, CardContent } from '@/components/ui/card.jsx'
import { Loader2, Search, Database } from 'lucide-react'

export function LoadingSpinner({ searchedNumber }) {
  return (
    <div className="w-full max-w-md mx-auto mt-8 animate-fade-in-up">
      <Card className="border-0 shadow-soft-lg glass-effect">
        <CardContent className="p-8 text-center">
          <div className="flex flex-col items-center space-y-6">
            {/* Animated search icon */}
            <div className="relative">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Search className="h-8 w-8 text-primary animate-pulse" />
              </div>
              <div className="absolute -top-1 -right-1">
                <Loader2 className="h-6 w-6 text-accent animate-spin" />
              </div>
            </div>

            {/* Loading text */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">
                Searching Database
              </h3>
              <p className="text-sm text-muted-foreground">
                Looking up information for{' '}
                <span className="font-mono font-medium text-foreground">
                  {searchedNumber}
                </span>
              </p>
            </div>

            {/* Progress indicators */}
            <div className="w-full space-y-3">
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <Database className="h-3 w-3" />
                <span>Connecting to database...</span>
                <div className="flex space-x-1 ml-auto">
                  <div className="w-1 h-1 bg-primary rounded-full animate-pulse"></div>
                  <div className="w-1 h-1 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-1 h-1 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
              
              <div className="w-full bg-muted rounded-full h-1">
                <div className="bg-primary h-1 rounded-full animate-pulse" style={{ width: '60%' }}></div>
              </div>
            </div>

            {/* Tip */}
            <div className="text-xs text-muted-foreground bg-muted/50 rounded-lg p-3 w-full">
              💡 This may take a few seconds depending on database size
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

