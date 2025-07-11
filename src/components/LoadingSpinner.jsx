import { Card, CardContent } from '@/components/ui/card.jsx'
import { Loader2, Search, Database, Zap, Sparkles } from 'lucide-react'

export function LoadingSpinner({ searchedNumber }) {
  return (
    <div className="w-full max-w-2xl mx-auto mt-12 animate-fade-in-up">
      <Card className="glass-effect border-2 border-white/20 shadow-2xl backdrop-blur-xl">
        <CardContent className="p-10 text-center">
          <div className="flex flex-col items-center space-y-8">
            {/* Main loading animation */}
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center animate-pulse-slow">
                <Search className="h-12 w-12 text-white animate-bounce" />
              </div>
              <div className="absolute -top-2 -right-2">
                <Loader2 className="h-8 w-8 text-secondary animate-spin-slow" />
              </div>
              <div className="absolute -bottom-2 -left-2">
                <Sparkles className="h-6 w-6 text-accent animate-pulse" />
              </div>
              
              {/* Orbiting elements */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="w-32 h-32 border-2 border-dashed border-secondary/30 rounded-full"></div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1">
                  <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Loading text */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                🔍 <span className="gradient-text">Searching Database</span>
              </h3>
              <p className="text-lg text-muted-foreground">
                Looking up comprehensive information for{' '}
                <span className="font-mono font-bold text-foreground bg-white/10 px-3 py-1 rounded-full">
                  {searchedNumber}
                </span>
              </p>
            </div>

            {/* Progress steps */}
            <div className="w-full space-y-4">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2 text-green-400">
                  <Database className="h-4 w-4" />
                  <span>✅ Connected to database</span>
                </div>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2 text-secondary">
                  <Search className="h-4 w-4 animate-pulse" />
                  <span>🔎 Scanning records...</span>
                </div>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                  <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2 text-accent">
                  <Zap className="h-4 w-4 animate-bounce" />
                  <span>⚡ Processing results...</span>
                </div>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.8s' }}></div>
                </div>
              </div>
              
              {/* Progress bar */}
              <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-secondary to-accent rounded-full animate-pulse" style={{ width: '75%', transition: 'width 2s ease-in-out' }}></div>
              </div>
            </div>

            {/* Fun facts while loading */}
            <div className="glass-effect rounded-xl p-6 w-full border border-white/10">
              <div className="flex items-center space-x-2 mb-3">
                <Sparkles className="h-5 w-5 text-secondary" />
                <span className="font-semibold text-foreground">💡 Did you know?</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our database contains over <span className="font-bold text-secondary">1 million</span> Pakistani phone records, 
                updated in real-time with <span className="font-bold text-accent">99.9% accuracy</span>. 
                We process searches using advanced algorithms for lightning-fast results! ⚡
              </p>
            </div>

            {/* Loading time estimate */}
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Estimated time: 1-3 seconds</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

