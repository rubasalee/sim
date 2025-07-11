import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { 
  X, 
  Home, 
  Search, 
  History, 
  Settings, 
  HelpCircle, 
  Shield, 
  Phone, 
  Users, 
  Database,
  TrendingUp,
  Clock,
  Star
} from 'lucide-react'

export function Sidebar({ isOpen, onClose }) {
  const menuItems = [
    { icon: Home, label: 'Home', active: true },
    { icon: Search, label: 'Advanced Search' },
    { icon: History, label: 'Search History' },
    { icon: TrendingUp, label: 'Popular Searches' },
    { icon: Database, label: 'Database Stats' },
    { icon: Settings, label: 'Settings' },
    { icon: HelpCircle, label: 'Help & Support' },
  ]

  const quickStats = [
    { icon: Users, label: 'Total Records', value: '1M+' },
    { icon: Clock, label: 'Avg Response', value: '<2s' },
    { icon: Star, label: 'Accuracy', value: '99.9%' },
  ]

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full w-64 bg-gray-800 border-r border-gray-700 z-50 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <span className="font-semibold text-white">Menu</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-gray-400 hover:text-white hover:bg-gray-700"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {menuItems.map((item, index) => (
              <Button
                key={index}
                variant={item.active ? "secondary" : "ghost"}
                className={`w-full justify-start text-left ${
                  item.active 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                <item.icon className="h-5 w-5 mr-3" />
                {item.label}
              </Button>
            ))}
          </nav>

          {/* Quick Stats */}
          <div className="p-4 border-t border-gray-700">
            <Card className="bg-gray-700 border-gray-600">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm text-gray-300">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {quickStats.map((stat, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <stat.icon className="h-4 w-4 text-blue-400" />
                      <span className="text-xs text-gray-400">{stat.label}</span>
                    </div>
                    <span className="text-sm font-semibold text-white">{stat.value}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-700">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-gray-400">Powered by Pakistan</span>
              </div>
              <p className="text-xs text-gray-500">
                © 2025 CheckSimInfo. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

