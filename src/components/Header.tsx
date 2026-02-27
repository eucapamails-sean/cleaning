'use client'

import { useState } from 'react'
import { Phone, Menu, X, Sparkles } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-gray-900">Sunshine</span>
              <span className="text-xl font-bold text-primary-600"> Clean</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors">Services</a>
            <a href="#why-us" className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors">Why Us</a>
            <a href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors">How It Works</a>
            <a href="#pricing" className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors">Pricing</a>
            <a href="#faq" className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors">FAQ</a>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+18631234567" className="flex items-center gap-2 text-sm font-semibold text-primary-700">
              <Phone className="w-4 h-4" />
              (863) 555-0123
            </a>
            <a href="#contact" className="px-6 py-2.5 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all text-sm shadow-md hover:shadow-lg">
              Get Free Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 space-y-3">
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-600 font-medium">Services</a>
            <a href="#why-us" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-600 font-medium">Why Us</a>
            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-600 font-medium">How It Works</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-600 font-medium">Pricing</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-600 font-medium">FAQ</a>
            <div className="pt-3 border-t border-gray-100 space-y-3">
              <a href="tel:+18631234567" className="flex items-center gap-2 text-primary-700 font-semibold">
                <Phone className="w-4 h-4" />
                (863) 555-0123
              </a>
              <a href="#contact" className="block text-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg">
                Get Free Quote
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
