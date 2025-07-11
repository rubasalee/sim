import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { User, Phone, CreditCard, MapPin } from 'lucide-react'

export function ResultsTable({ results, searchedNumber }) {
  if (!results || results.length === 0) {
    return null
  }

  return (
    <Card className="w-full max-w-4xl mx-auto mt-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <User className="h-5 w-5" />
          Search Results
        </CardTitle>
        <CardDescription>
          Found {results.length} record{results.length !== 1 ? 's' : ''} for {searchedNumber}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="min-w-[150px]">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Full Name
                  </div>
                </TableHead>
                <TableHead className="min-w-[120px]">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Phone #
                  </div>
                </TableHead>
                <TableHead className="min-w-[140px]">
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-4 w-4" />
                    CNIC #
                  </div>
                </TableHead>
                <TableHead className="min-w-[200px]">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Address
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {results.map((result, index) => (
                <TableRow key={index} className="hover:bg-muted/50">
                  <TableCell className="font-medium">
                    {result.full_name || '-'}
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="font-mono">
                      {result.phone || '-'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="font-mono">
                      {result.cnic || '-'}
                    </Badge>
                  </TableCell>
                  <TableCell className="max-w-[250px]">
                    <div className="truncate" title={result.address || '-'}>
                      {result.address || '-'}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}

