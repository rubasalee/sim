import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { User, Phone, CreditCard, MapPin, Users, CheckCircle } from 'lucide-react'

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

  const getOperatorColor = (operator) => {
    const colors = {
      'Telenor': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      'Mobilink/Jazz': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      'Ufone': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
      'Zong': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      'Warid': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
      'PTCL EVO': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
      'Unknown': 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    }
    return colors[operator] || colors['Unknown']
  }

  return (
    <div className="w-full max-w-6xl mx-auto mt-8 animate-fade-in-up">
      <Card className="shadow-soft-lg border-0 glass-effect">
        <CardHeader className="text-center pb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mb-4 mx-auto">
            <CheckCircle className="h-6 w-6 text-accent" />
          </div>
          <CardTitle className="text-2xl font-semibold flex items-center justify-center gap-2">
            <Users className="h-6 w-6 text-primary" />
            Search Results
          </CardTitle>
          <CardDescription className="text-lg">
            Found <span className="font-semibold text-accent">{results.length}</span> record{results.length !== 1 ? 's' : ''} for{' '}
            <span className="font-mono font-medium">{searchedNumber}</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {results.slice(0, 12).map((result, index) => {
              const network = getNetworkOperator(result.phone)
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-soft-lg transition-all duration-300 transform hover:scale-[1.02] border border-border/50 hover:border-primary/30 animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {/* Name */}
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <User className="h-5 w-5 text-primary" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-muted-foreground">Full Name</p>
                          <p className="text-lg font-semibold text-foreground truncate" title={result.full_name || 'Not available'}>
                            {result.full_name || 'Not available'}
                          </p>
                        </div>
                      </div>

                      {/* Phone & Network */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-mono font-medium">
                            {result.phone || 'Not available'}
                          </span>
                        </div>
                        <Badge className={`text-xs font-medium ${getOperatorColor(network)}`}>
                          {network}
                        </Badge>
                      </div>

                      {/* CNIC */}
                      <div className="flex items-center space-x-2">
                        <CreditCard className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">CNIC:</span>
                        <span className="text-sm font-mono font-medium">
                          {result.cnic || 'Not available'}
                        </span>
                      </div>

                      {/* Address */}
                      <div className="flex items-start space-x-2">
                        <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-muted-foreground">Address</p>
                          <p className="text-sm text-foreground line-clamp-2" title={result.address || 'Not available'}>
                            {result.address || 'Not available'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {results.length > 12 && (
            <div className="mt-8 text-center">
              <Card className="inline-block bg-muted/50 border-dashed">
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">
                    Showing first 12 results out of {results.length} total records
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Refine your search for more specific results
                  </p>
                </CardContent>
              </Card>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

