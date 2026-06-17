// src/components/Navbar.jsx
import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { 
  Menu, X, ChevronDown, 
  BookOpen, Users, Calendar, CreditCard, 
  Compass, Award, FileText, HelpCircle, 
  MessageCircle, Book, Settings, ChevronRight,
  LogIn, PlayCircle
} from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const dropdownRef = useRef(null)
  const mobileMenuRef = useRef(null)

  // Dropdown data
  const products = [
    { icon: <BookOpen className="w-5 h-5" />, name: 'School Management', desc: 'Complete admin solution' },
    { icon: <Users className="w-5 h-5" />, name: 'Student Portal', desc: 'Student engagement platform' },
    { icon: <Calendar className="w-5 h-5" />, name: 'Attendance Tracker', desc: 'Real-time attendance' },
    { icon: <CreditCard className="w-5 h-5" />, name: 'Fee Management', desc: 'Automated billing' },
  ]

  const explore = [
    { icon: <Compass className="w-5 h-5" />, name: 'Features', desc: 'All platform features' },
    { icon: <Award className="w-5 h-5" />, name: 'Success Stories', desc: 'Client testimonials' },
    { icon: <FileText className="w-5 h-5" />, name: 'Documentation', desc: 'API & guides' },
  ]

  const support = [
    { icon: <HelpCircle className="w-5 h-5" />, name: 'Help Center', desc: 'FAQs & tutorials' },
    { icon: <MessageCircle className="w-5 h-5" />, name: 'Live Chat', desc: '24/7 support' },
    { icon: <Book className="w-5 h-5" />, name: 'Blog', desc: 'Latest updates' },
    { icon: <Settings className="w-5 h-5" />, name: 'System Status', desc: 'Service health' },
  ]

  const navItems = [
    { 
      name: 'Products', 
      key: 'products',
      items: products,
      link: '#products'
    },
    { 
      name: 'Explore', 
      key: 'explore',
      items: explore,
      link: '#explore'
    },
    { 
      name: 'Support', 
      key: 'support',
      items: support,
      link: '#support'
    },
  ]

  const toggleDropdown = (key) => {
    if (activeDropdown === key) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(key)
    }
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside dropdown
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null)
      }
      
      // Check if click is outside mobile menu
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        // Only close mobile menu if it's open and clicked outside
        if (isOpen) {
          // Check if the click was on the menu button itself
          const menuButton = document.querySelector('.menu-toggle-button')
          if (!menuButton || !menuButton.contains(event.target)) {
            setIsOpen(false)
          }
        }
      }
    }

    // Add event listener
    document.addEventListener('mousedown', handleClickOutside)
    
    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen]) // Re-run when isOpen changes

  // Close dropdown when pressing Escape key
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null)
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscapeKey)
    
    return () => {
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [])

  // Close mobile menu when window resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false)
        setActiveDropdown(null)
      }
    }

    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const closeMobileMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600 flex items-center">
              <span className="text-3xl mr-1">🏫</span>
              Shiksha.ai
            </Link>
          </div>

          {/* Desktop Menu - Wrapped in ref for click outside detection */}
          <div ref={dropdownRef} className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.key} className="relative group">
                <button
                  onClick={() => toggleDropdown(item.key)}
                  className="flex items-center gap-1 px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition duration-200 font-medium text-sm"
                >
                  {item.name}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.key ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Dropdown Menu */}
                {activeDropdown === item.key && (
                  <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-fadeIn">
                    <div className="grid grid-cols-1 divide-y divide-gray-50">
                      {item.items.map((subItem, index) => (
                        <a
                          key={index}
                          href="#"
                          className="flex items-start gap-3 px-4 py-3 hover:bg-blue-50 transition duration-150 group/item"
                          onClick={() => setActiveDropdown(null)} // Close dropdown on item click
                        >
                          <div className="text-blue-600 mt-0.5">
                            {subItem.icon}
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-gray-800 group-hover/item:text-blue-600">
                              {subItem.name}
                            </div>
                            <div className="text-xs text-gray-500">
                              {subItem.desc}
                            </div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-gray-400 group-hover/item:text-blue-600 opacity-0 group-hover/item:opacity-100 transition-all" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right side buttons with 3D effects */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Login Button with 3D effect */}
            <Link 
              to="/login" 
              className="group relative flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-blue-600 font-medium text-sm transition-all duration-300"
            >
              <span className="relative">
                <LogIn className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-10deg]" />
                <span className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </span>
              <span className="relative">
                Login
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </span>
            </Link>

            {/* Get Demo Button with 3D effect */}
            <Link 
              to="/demo" 
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium px-6 py-2.5 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-700"></span>
              <span className="relative flex items-center gap-2">
                <PlayCircle className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                <span>Get Demo</span>
              </span>
              <span className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-lg"></span>
              <span className="absolute -inset-1 bg-blue-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></span>
            </Link>
          </div>

          {/* Mobile Menu Button - Added class for reference */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-700 hover:text-blue-600 p-2 menu-toggle-button"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu - Wrapped in ref for click outside detection */}
        {isOpen && (
          <div ref={mobileMenuRef} className="lg:hidden py-4 border-t border-gray-100 max-h-[80vh] overflow-y-auto">
            {/* Mobile Navigation Items */}
            {navItems.map((item) => (
              <div key={item.key} className="border-b border-gray-50 last:border-0">
                <button
                  onClick={() => toggleDropdown(item.key)}
                  className="flex items-center justify-between w-full py-3 px-2 text-gray-700 hover:text-blue-600 transition"
                >
                  <span className="font-medium">{item.name}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.key ? 'rotate-180' : ''}`} />
                </button>
                
                {activeDropdown === item.key && (
                  <div className="pl-4 pb-2 space-y-1">
                    {item.items.map((subItem, index) => (
                      <a
                        key={index}
                        href="#"
                        className="flex items-center gap-3 py-2 px-2 hover:bg-blue-50 rounded-md transition"
                        onClick={() => {
                          setActiveDropdown(null)
                          closeMobileMenu()
                        }}
                      >
                        <span className="text-blue-600">{subItem.icon}</span>
                        <div>
                          <div className="text-sm font-medium text-gray-800">{subItem.name}</div>
                          <div className="text-xs text-gray-500">{subItem.desc}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* Mobile Action Buttons */}
            <div className="mt-4 space-y-3">
              <Link 
                to="/login" 
                className="group flex items-center justify-center gap-2 text-gray-700 hover:text-blue-600 font-medium py-2 border border-gray-200 rounded-lg transition-all duration-300 hover:border-blue-400"
                onClick={closeMobileMenu}
              >
                <LogIn className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-10deg]" />
                Login
              </Link>
              <Link 
                to="/demo" 
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl flex items-center justify-center gap-2"
                onClick={closeMobileMenu}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-700"></span>
                <PlayCircle className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                <span className="relative">Get Demo</span>
                <span className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-lg"></span>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* CSS for animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </nav>
  )
}

export default Navbar