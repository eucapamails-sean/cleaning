import { Sparkles, Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-max section-padding pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">Sunshine</span>
                <span className="text-xl font-bold text-primary-400"> Clean</span>
              </div>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Professional vacation home cleaning services in Davenport, Florida. 
              Trusted by 200+ property managers near Disney World.
            </p>
            <div className="space-y-2">
              <a href="tel:+18631234567" className="flex items-center gap-2 text-sm hover:text-white transition-colors">
                <Phone className="w-4 h-4" /> (863) 555-0123
              </a>
              <a href="mailto:hello@sunshineclean.com" className="flex items-center gap-2 text-sm hover:text-white transition-colors">
                <Mail className="w-4 h-4" /> hello@sunshineclean.com
              </a>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4" /> Davenport, FL 33837
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">Turnover Cleaning</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Deep Cleaning</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Linen Service</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Recurring Maintenance</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Carpet & Upholstery</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Post-Construction</a></li>
            </ul>
          </div>

          {/* Service Areas Column */}
          <div>
            <h4 className="text-white font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2 text-sm">
              <li>Davenport</li>
              <li>Champions Gate</li>
              <li>Reunion Resort</li>
              <li>Windsor Hills</li>
              <li>Solara Resort</li>
              <li>Kissimmee</li>
              <li>Clermont</li>
              <li>Haines City</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Sunshine Clean. All rights reserved. Licensed & Insured.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
