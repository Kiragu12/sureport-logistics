import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  const handleNavigation = (path: string, isScroll: boolean, id?: string) => {
    setIsOpen(false);
    
    if (isScroll && id) {
      if (location.pathname === '/') {
        // We are already on home, just scroll
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Navigate to home and pass the ID to scroll to
        navigate('/', { state: { scrollTo: id } });
      }
    } else {
      // Standard navigation
      navigate(path);
      window.scrollTo(0, 0);
    }
  };

  const navLinks = [
    { label: 'Home', path: '/', isScroll: false },
    { label: 'Services', path: '/', isScroll: true, id: 'services' },
    { label: 'How it Works', path: '/', isScroll: true, id: 'how-it-works' },
    { label: 'Prohibited Items', path: '/prohibited', isScroll: false },
    { label: 'About Us', path: '/about', isScroll: false },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">
          {/* Logo */}
          <Link to="/" className="flex items-center group py-2">
            <img 
              src="/logo.png" 
              alt="Sureport Logistics" 
              className="h-20 w-auto object-contain transition-transform transform group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            {/* Fallback Logo */}
            <div className="hidden flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg">
                    <span className="font-heading font-bold text-xl">S</span>
                </div>
                <div className="flex flex-col">
                    <span className="font-heading font-extrabold text-xl text-primary leading-tight tracking-tight">SUREPORT</span>
                    <span className="font-sans text-[10px] tracking-[0.25em] text-accent font-bold uppercase">Logistics</span>
                </div>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavigation(link.path, link.isScroll, link.id)}
                className={`font-semibold text-sm transition-colors relative group ${
                  (!link.isScroll && isActive(link.path)) ? 'text-primary' : 'text-secondary hover:text-primary'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all ${
                  (!link.isScroll && isActive(link.path)) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-6">
             <div className="flex items-center text-secondary text-sm font-semibold">
                <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center mr-2">
                    <Phone className="w-4 h-4 text-accent" />
                </div>
                <span>+254 704 515905</span>
             </div>
            <Link 
              to="/quote" 
              className="bg-accent hover:bg-accentHover text-white px-7 py-3 rounded-full font-heading font-bold text-sm shadow-lg shadow-orange-500/20 transition-all transform hover:-translate-y-0.5"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary focus:outline-none p-2"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-2xl z-50">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavigation(link.path, link.isScroll, link.id)}
                className="block w-full text-left px-4 py-3 rounded-xl text-base font-medium text-secondary hover:text-primary hover:bg-gray-50"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 mt-4 border-t border-gray-100">
               <Link 
                to="/quote"
                className="block w-full text-center bg-accent text-white px-4 py-3.5 rounded-xl font-heading font-bold"
                onClick={() => setIsOpen(false)}
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;