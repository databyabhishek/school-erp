// src/components/Footer.jsx
import { Link } from 'react-router-dom'
import { 
  Facebook, Twitter, Linkedin, Youtube, Instagram, 
  Mail, Phone, MapPin, Globe, Award, Star,
  ChevronRight, Smartphone, Laptop,
  ExternalLink, Shield,
  PlayCircle, Apple, Monitor, Chrome
} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = {
    information: {
      title: 'Information',
      links: [
        'Products', 'Plans & Pricing', 'Services', 'Features',
        'Affiliate Program', 'Referral Program', 'Coming Soon', 'Sitemap'
      ]
    },
    support: {
      title: 'Support',
      links: ['Knowledge Base', 'Video Tutorials', 'Our Blogs', 'Changelogs']
    }
  }

  const socialIcons = [
    { icon: <Facebook className="w-4 h-4" />, href: '#', label: 'Facebook' },
    { icon: <Twitter className="w-4 h-4" />, href: '#', label: 'Twitter' },
    { icon: <Linkedin className="w-4 h-4" />, href: '#', label: 'LinkedIn' },
    { icon: <Youtube className="w-4 h-4" />, href: '#', label: 'YouTube' },
    { icon: <Instagram className="w-4 h-4" />, href: '#', label: 'Instagram' },
  ]

  const mobileApps = [
    { icon: <PlayCircle className="w-5 h-5" />, name: 'Play Store', color: 'from-green-500 to-emerald-500' },
    { icon: <Apple className="w-5 h-5" />, name: 'App Store', color: 'from-gray-500 to-gray-700' },
    { icon: <Monitor className="w-5 h-5" />, name: 'Web App', color: 'from-blue-500 to-indigo-500' },
    { icon: <Chrome className="w-5 h-5" />, name: 'Chrome Extension', color: 'from-yellow-500 to-orange-500' },
  ]

  return (
    <footer className="relative bg-gray-900 text-gray-300">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        
        {/* Main Grid */}
        <div className="grid lg:grid-cols-4 gap-8 mb-10">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🏫</span>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                eskooly
              </span>
            </div>
            
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              The world's #1 free online school management software, empowering schools worldwide to manage everything digitally.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              <div className="flex items-center gap-1 bg-white/5 rounded-full px-2.5 py-1 border border-white/5">
                <Award className="w-3.5 h-3.5 text-yellow-400" />
                <span className="text-xs text-gray-300">#1 Rated</span>
              </div>
              <div className="flex items-center gap-1 bg-white/5 rounded-full px-2.5 py-1 border border-white/5">
                <Star className="w-3.5 h-3.5 text-yellow-400" />
                <span className="text-xs text-gray-300">4.6 ★</span>
              </div>
              <div className="flex items-center gap-1 bg-white/5 rounded-full px-2.5 py-1 border border-white/5">
                <Shield className="w-3.5 h-3.5 text-green-400" />
                <span className="text-xs text-gray-300">100% Free</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-1.5">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 hover:-translate-y-0.5"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
              <span className="w-0.5 h-4 bg-blue-500 rounded-full"></span>
              Information
            </h3>
            <ul className="space-y-2">
              {footerSections.information.links.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-1 group">
                    <ChevronRight className="w-3 h-3 text-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                    <span className="group-hover:translate-x-0.5 transition-transform duration-200">{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
              <span className="w-0.5 h-4 bg-indigo-500 rounded-full"></span>
              Support
            </h3>
            <ul className="space-y-2">
              {footerSections.support.links.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-1 group">
                    <ChevronRight className="w-3 h-3 text-indigo-500 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                    <span className="group-hover:translate-x-0.5 transition-transform duration-200">{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Apps */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
              <span className="w-0.5 h-4 bg-purple-500 rounded-full"></span>
              Mobile Apps
            </h3>
            <div className="space-y-2">
              {mobileApps.map((app, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="group flex items-center gap-3 p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${app.color} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    {app.icon}
                  </div>
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                    {app.name}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-gray-500 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300 ml-auto" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="border-t border-white/10 pt-6 pb-6 mb-6">
          <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-0.5 h-4 bg-rose-500 rounded-full"></span>
            Contact Us
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="flex items-start gap-3 group p-3 rounded-lg hover:bg-white/5 transition-colors duration-300">
              <MapPin className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm text-gray-400 group-hover:text-white transition-colors leading-relaxed">
                103, Oxford House, Oxford Rd, Manchester M1 7ED, UK
              </span>
            </div>
            <div className="flex items-center gap-3 group p-3 rounded-lg hover:bg-white/5 transition-colors duration-300">
              <Mail className="w-4 h-4 text-rose-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
              <a href="mailto:support@eskooly.com" className="text-sm text-gray-400 group-hover:text-white transition-colors">
                support@eskooly.com
              </a>
            </div>
            <div className="flex items-center gap-3 group p-3 rounded-lg hover:bg-white/5 transition-colors duration-300">
              <Phone className="w-4 h-4 text-rose-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
              <a href="tel:+447404074252" className="text-sm text-gray-400 group-hover:text-white transition-colors">
                +44 (740) 407 4252
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-4 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-500">
            &copy; {currentYear} eSkooly. All rights reserved.
          </p>
          
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <a href="#" className="text-gray-500 hover:text-white transition-colors hover:underline">
              Privacy Policy
            </a>
            <span className="text-gray-700">|</span>
            <a href="#" className="text-gray-500 hover:text-white transition-colors hover:underline">
              Terms of Service
            </a>
            <span className="text-gray-700">|</span>
            <a href="#" className="text-gray-500 hover:text-white transition-colors hover:underline">
              Cookie Policy
            </a>
            <span className="text-gray-700">|</span>
            <div className="flex items-center gap-1 text-gray-500">
              <Globe className="w-3.5 h-3.5" />
              <span>Global</span>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button - Clean Version */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 group"
        aria-label="Back to top"
      >
        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-white/10">
          <ChevronRight className="w-5 h-5 rotate-[-90deg] group-hover:translate-y-[-2px] transition-transform duration-300" />
        </div>
      </button>
    </footer>
  )
}

export default Footer