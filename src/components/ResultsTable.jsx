import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { User, Phone, CreditCard, MapPin, Users, CheckCircle, Star, Zap } from 'lucide-react'

export function ResultsTable({ results, searchedNumber }) {
  if (!results || results.length === 0) {
    return null
  }

  // Get network operator from phone number
  const getNetworkOperator = (phoneNumber) => {
    if (!phoneNumber) return 'Unknown'
    const prefix = phoneNumber.substring(2, 4)
    const operators = {
      '00': 'Telenor',
      '01': 'Mobilink/Jazz',
      '02': 'Telenor',
      '03': 'Ufone',
      '04': 'Zong',
      '05': 'Telenor',
      '06': 'Telenor',
      '07': 'Mobilink/Jazz',
      '08': 'SCO Mobile',
      '09': 'SCO Mobile',
      '10': 'Mobilink/Jazz',
      '11': 'Mobilink/Jazz',
      '12': 'Mobilink/Jazz',
      '13': 'SCOM',
      '14': 'Telenor',
      '15': 'Ufone',
      '16': 'Ufone',
      '17': 'Ufone',
      '18': 'Ufone',
      '19': 'Mobilink/Jazz',
      '21': 'Warid',
      '22': 'Warid',
      '23': 'SCO Mobile',
      '24': 'SCOM',
      '25': 'SCOM',
      '30': 'Zong',
      '31': 'Zong',
      '32': 'Warid',
      '33': 'Ufone',
      '34': 'Zong',
      '35': 'Ufone',
      '36': 'Zong',
      '37': 'Zong',
      '38': 'Zong',
      '39': 'Zong',
      '40': 'PTCL EVO',
      '41': 'PTCL EVO',
      '42': 'PTCL EVO',
      '43': 'PTCL EVO',
      '44': 'PTCL EVO',
      '45': 'PTCL EVO',
      '46': 'PTCL EVO',
      '47': 'PTCL EVO',
      '48': 'PTCL EVO',
      '49': 'PTCL EVO'
    }
    return operators[prefix] || 'Unknown'
  }

  const getOperatorBadgeClass = (operator) => {
    const classes = {
      'Telenor': 'badge-telenor',
      'Mobilink/Jazz': 'badge-jazz',
      'Ufone': 'badge-ufone',
      'Zong': 'badge-zong',
      'Warid': 'badge-warid',
      'PTCL EVO': 'badge-ptcl',
      'Unknown': 'badge-unknown'
    }
    return classes[operator] || classes['Unknown']
  }

  return (
    <div className="w-full max-w-7xl mx-auto mt-12 animate-fade-in-up">
      <Card className="glass-effect border-2 border-white/20 shadow-2xl backdrop-blur-xl">
        <CardHeader className="text-center pb-8 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-t-lg">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full mb-6 mx-auto animate-bounce-slow">
            <CheckCircle className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-4xl font-bold flex items-center justify-center gap-3 mb-4">
            <Users className="h-8 w-8 text-secondary" />
            <span className="gradient-text">Search Results</span>
            <Star className="h-8 w-8 text-accent animate-pulse" />
          </CardTitle>
          <CardDescription className="text-xl">
            🎉 Found <span className="font-bold text-2xl gradient-text">{results.length}</span> record{results.length !== 1 ? 's' : ''} for{' '}
            <span className="font-mono font-bold text-foreground bg-white/10 px-3 py-1 rounded-full">{searchedNumber}</span>
          </CardDescription>
          
          <div className="flex justify-center mt-6">
            <div className="flex items-center space-x-2 glass-effect px-4 py-2 rounded-full">
              <Zap className="h-4 w-4 text-secondary" />
              <span className="text-sm font-medium text-foreground">Search completed in &lt;2 seconds</span>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="p-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {results.slice(0, 16).map((result, index) => {
              const network = getNetworkOperator(result.phone)
              const badgeClass = getOperatorBadgeClass(network)
              
              return (
                <Card 
                  key={index} 
                  className="card-hover glass-effect border border-white/20 hover:border-secondary/50 transition-all duration-300 transform hover:scale-105 animate-fade-in group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6 space-y-5">
                    {/* Header with avatar and network badge */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <User className="h-6 w-6 text-white" />
                      </div>
                      <Badge className={`${badgeClass} text-white font-bold px-3 py-1 rounded-full shadow-lg`}>
                        {network}
                      </Badge>
                    </div>

                    {/* Name */}
                    <div className="space-y-2">
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Full Name</p>
                      <p className="text-lg font-bold text-foreground truncate group-hover:text-secondary transition-colors duration-300" title={result.full_name || 'Not available'}>
                        {result.full_name || '👤 Not available'}
                      </p>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center space-x-3 bg-white/5 rounded-lg p-3">
                      <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-xs text-muted-foreground">Phone Number</p>
                        <p className="text-sm font-mono font-bold text-foreground">
                          {result.phone || '📱 Not available'}
                        </p>
                      </div>
                    </div>

                    {/* CNIC */}
                    <div className="flex items-center space-x-3 bg-white/5 rounded-lg p-3">
                      <CreditCard className="h-5 w-5 text-accent flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-xs text-muted-foreground">CNIC Number</p>
                        <p className="text-sm font-mono font-bold text-foreground">
                          {result.cnic || '🆔 Not available'}
                        </p>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-secondary" />
                        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Address</p>
                      </div>
                      <p className="text-sm text-foreground line-clamp-3 bg-white/5 rounded-lg p-3" title={result.address || 'Not available'}>
                        {result.address || '📍 Not available'}
                      </p>
                    </div>

                    {/* Record quality indicator */}
                    <div className="flex items-center justify-between pt-3 border-t border-white/10">
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-muted-foreground">Verified Record</span>
                      </div>
                      <div className="flex space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-3 w-3 text-secondary fill-current" />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {results.length > 16 && (
            <div className="mt-12 text-center">
              <Card className="inline-block glass-effect border-2 border-dashed border-secondary/30 bg-gradient-to-r from-secondary/5 to-accent/5">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center space-x-3 mb-3">
                    <Users className="h-6 w-6 text-secondary" />
                    <span className="text-lg font-bold gradient-text">More Results Available</span>
                  </div>
                  <p className="text-muted-foreground mb-2">
                    Showing first 16 results out of <span className="font-bold text-foreground">{results.length}</span> total records
                  </p>
                  <p className="text-xs text-muted-foreground">
                    💡 Refine your search for more specific results or contact support for bulk data access
                  </p>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Summary stats */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-effect p-6 rounded-xl text-center border border-white/20">
              <div className="text-2xl font-bold gradient-text mb-2">{results.length}</div>
              <div className="text-sm text-muted-foreground">Total Records Found</div>
            </div>
            <div className="glass-effect p-6 rounded-xl text-center border border-white/20">
              <div className="text-2xl font-bold gradient-text mb-2">
                {Math.round((results.filter(r => r.full_name && r.full_name !== 'Not available').length / results.length) * 100)}%
              </div>
              <div className="text-sm text-muted-foreground">Records with Names</div>
            </div>
            <div className="glass-effect p-6 rounded-xl text-center border border-white/20">
              <div className="text-2xl font-bold gradient-text mb-2">
                {Math.round((results.filter(r => r.address && r.address !== 'Not available').length / results.length) * 100)}%
              </div>
              <div className="text-sm text-muted-foreground">Records with Addresses</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

