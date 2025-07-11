import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Menu, Search, Moon, Sun, Shield, Phone } from 'lucide-react'

export function Header({ onToggleSidebar, onToggleDarkMode, isDarkMode }) {
  return (
    <header className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Logo and Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggleSidebar}
              className="text-white hover:bg-gray-700"
            >
              <Menu className="h-6 w-6" />
            </Button>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">CheckSimInfo</span>
                <div className="text-xs text-gray-400">Phone Lookup Service</div>
              </div>
            </div>
          </div>

          {/* Center - Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search phone numbers, CNIC, or names..."
                className="w-full pl-10 pr-4 py-2 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Right side - Theme toggle and user actions */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggleDarkMode}
              className="text-white hover:bg-gray-700"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Phone className="h-4 w-4" />
              <span>Pakistan</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

