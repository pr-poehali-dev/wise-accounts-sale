
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="py-4 px-4 md:px-8 bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-wiseGreen to-wiseMedium flex items-center justify-center">
              <span className="text-wiseDarkGreen font-bold text-xl">W</span>
            </div>
            <span className="text-wiseDarkGreen font-bold text-xl hidden sm:inline-block">WiseAccounts</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-wiseDarkGreen hover:text-wiseMedium transition-colors font-medium">Главная</Link>
            <Link to="/prices" className="text-wiseDarkGreen hover:text-wiseMedium transition-colors font-medium">Цены</Link>
            <Link to="/how-it-works" className="text-wiseDarkGreen hover:text-wiseMedium transition-colors font-medium">Как это работает</Link>
            <Link to="/faq" className="text-wiseDarkGreen hover:text-wiseMedium transition-colors font-medium">FAQ</Link>
          </div>

          {/* Call to Action Button */}
          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-wiseGreen to-wiseMedium text-wiseDarkGreen font-medium hover:shadow-lg transition-all">
              Связаться с нами
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-wiseDarkGreen"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-wiseDarkGreen hover:text-wiseMedium transition-colors font-medium py-2 px-4 rounded-md hover:bg-wiseLight"
                onClick={() => setMobileMenuOpen(false)}
              >
                Главная
              </Link>
              <Link 
                to="/prices" 
                className="text-wiseDarkGreen hover:text-wiseMedium transition-colors font-medium py-2 px-4 rounded-md hover:bg-wiseLight"
                onClick={() => setMobileMenuOpen(false)}
              >
                Цены
              </Link>
              <Link 
                to="/how-it-works" 
                className="text-wiseDarkGreen hover:text-wiseMedium transition-colors font-medium py-2 px-4 rounded-md hover:bg-wiseLight"
                onClick={() => setMobileMenuOpen(false)}
              >
                Как это работает
              </Link>
              <Link 
                to="/faq" 
                className="text-wiseDarkGreen hover:text-wiseMedium transition-colors font-medium py-2 px-4 rounded-md hover:bg-wiseLight"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Button 
                className="bg-gradient-to-r from-wiseGreen to-wiseMedium text-wiseDarkGreen font-medium hover:shadow-lg transition-all w-full mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Связаться с нами
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
