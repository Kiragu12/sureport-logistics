import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primaryDark text-white pt-24 pb-12 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl -ml-10 -mb-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-8">
            <div className="flex items-center space-x-2">
               {/* Logo Image - Wrapped in white to show mascot colors correctly on dark background */}
               <div className="bg-white p-3 rounded-2xl shadow-lg inline-block">
                 <img 
                    src="/logo.png" 
                    alt="Sureport Logistics" 
                    className="h-16 w-auto object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.closest('div')!.style.display = 'none';
                      // Fallback logic could go here
                    }}
                  />
               </div>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm max-w-xs">
              Your trusted partner for global logistics, cargo forwarding, and door-to-door delivery services. Delivering excellence since 2015.
            </p>
            <div className="flex space-x-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300 group">
                  <Icon className="w-4 h-4 text-gray-300 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-8 text-white">Quick Links</h3>
            <ul className="space-y-4 text-gray-300 text-sm font-medium">
              <li><Link to="/" className="hover:text-accent transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-accent rounded-full mr-2 opacity-0 hover:opacity-100 transition-opacity"></span>Home</Link></li>
              <li><Link to="/quote" className="hover:text-accent transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-accent rounded-full mr-2 opacity-0 hover:opacity-100 transition-opacity"></span>Get a Quote</Link></li>
              <li><Link to="/prohibited" className="hover:text-accent transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-accent rounded-full mr-2 opacity-0 hover:opacity-100 transition-opacity"></span>Prohibited Items</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-accent rounded-full mr-2 opacity-0 hover:opacity-100 transition-opacity"></span>About Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-8 text-white">Our Services</h3>
            <ul className="space-y-4 text-gray-300 text-sm font-medium">
              <li><a href="#" className="hover:text-accent transition-colors">Air Freight</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Sea Freight</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Door-to-Door Delivery</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Cargo Financing</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Container Shipping</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-8 text-white">Contact Us</h3>
            <ul className="space-y-6 text-gray-300 text-sm">
              <li className="flex items-start group">
                <MapPin className="w-5 h-5 mr-3 text-accent shrink-0 mt-0.5 group-hover:animate-bounce" />
                <span className="group-hover:text-white transition-colors">Trust Mansion Mall, Opposite Yala Towers, Along Biashara Street, Nairobi</span>
              </li>
              <li className="flex items-center group">
                <Phone className="w-5 h-5 mr-3 text-accent shrink-0" />
                <span className="group-hover:text-white transition-colors">+254 704 515905</span>
              </li>
              <li className="flex items-center group">
                <Mail className="w-5 h-5 mr-3 text-accent shrink-0" />
                <span className="group-hover:text-white transition-colors">info@sureportlogistics.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>© 2025 Sureport Logistics. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;