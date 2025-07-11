import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { AlertTriangle, RefreshCw, Search, Frown, Lightbulb, Phone } from 'lucide-react'

export function ErrorMessage({ error, onRetry }) {
  return (
    <div className="w-full max-w-2xl mx-auto mt-12 animate-fade-in-up">
      <Card className="glass-effect border-2 border-red-500/20 shadow-2xl backdrop-blur-xl">
        <CardContent className="p-8">
          <Alert className="border-0 bg-red-500/10">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center animate-bounce-slow">
                <AlertTriangle className="h-10 w-10 text-white" />
              </div>
              
              <div>
                <AlertTitle className="text-2xl font-bold text-red-500 mb-3">
                  🚨 Search Error
                </AlertTitle>
                <AlertDescription className="text-lg text-foreground leading-relaxed">
                  {error}
                </AlertDescription>
              </div>

              {onRetry && (
                <Button 
                  onClick={onRetry}
                  className="btn-primary bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold px-8 py-3 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <RefreshCw className="h-5 w-5 mr-2" />
                  🔄 Try Again
                </Button>
              )}

              <div className="glass-effect rounded-xl p-6 w-full border border-white/10">
                <div className="flex items-center space-x-2 mb-3">
                  <Lightbulb className="h-5 w-5 text-secondary" />
                  <span className="font-semibold text-foreground">💡 Troubleshooting Tips</span>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                  <li>• Make sure you're using a valid Pakistani phone number format</li>
                  <li>• Try both 03XXXXXXXXX and +923XXXXXXXXX formats</li>
                  <li>• Check your internet connection</li>
                  <li>• The number might not be registered in our database</li>
                </ul>
              </div>
            </div>
          </Alert>
        </CardContent>
      </Card>
    </div>
  )
}

export function EmptyState({ searchedNumber, onNewSearch }) {
  return (
    <div className="w-full max-w-2xl mx-auto mt-12 animate-fade-in-up">
      <Card className="glass-effect border-2 border-white/20 shadow-2xl backdrop-blur-xl">
        <CardContent className="p-8">
          <Alert className="border-0 bg-transparent">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-24 h-24 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center animate-pulse-slow">
                <Frown className="h-12 w-12 text-white" />
              </div>
              
              <div>
                <AlertTitle className="text-3xl font-bold text-foreground mb-4">
                  😔 No Results Found
                </AlertTitle>
                <AlertDescription className="text-lg text-muted-foreground leading-relaxed">
                  We couldn't find any information for{' '}
                  <span className="font-mono font-bold text-foreground bg-white/10 px-3 py-1 rounded-full">
                    {searchedNumber}
                  </span>
                </AlertDescription>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <div className="glass-effect rounded-xl p-4 border border-white/10">
                  <div className="flex items-center space-x-2 mb-2">
                    <Phone className="h-4 w-4 text-secondary" />
                    <span className="font-semibold text-foreground text-sm">Possible Reasons</span>
                  </div>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Number not registered</li>
                    <li>• Recently activated SIM</li>
                    <li>• Private/unlisted number</li>
                  </ul>
                </div>
                
                <div className="glass-effect rounded-xl p-4 border border-white/10">
                  <div className="flex items-center space-x-2 mb-2">
                    <Search className="h-4 w-4 text-accent" />
                    <span className="font-semibold text-foreground text-sm">What to try</span>
                  </div>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Double-check the number</li>
                    <li>• Try different format</li>
                    <li>• Search another number</li>
                  </ul>
                </div>
              </div>

              {onNewSearch && (
                <Button 
                  onClick={onNewSearch}
                  className="btn-primary bg-gradient-to-r from-secondary to-accent hover:from-secondary/80 hover:to-accent/80 text-white font-bold px-8 py-3 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <Search className="h-5 w-5 mr-2" />
                  🔍 Search Another Number
                </Button>
              )}

              <div className="glass-effect rounded-xl p-6 w-full border border-white/10">
                <div className="flex items-center space-x-2 mb-3">
                  <Lightbulb className="h-5 w-5 text-secondary" />
                  <span className="font-semibold text-foreground">💡 Pro Tip</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our database is constantly updated, but some numbers might not be publicly available 
                  due to privacy settings or recent registrations. Try searching for other numbers 
                  or contact our support team for assistance! 🚀
                </p>
              </div>
            </div>
          </Alert>
        </CardContent>
      </Card>
    </div>
  )
}

