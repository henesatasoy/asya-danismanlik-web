import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-background/95 backdrop-blur-sm shadow-elegant" 
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Sol menü */}
          <div className="flex items-center space-x-8">
            <Link
              to="/about"
              className={cn(
                "text-sm font-medium transition-colors duration-300 hover:text-gold relative group",
                isActive('/about') ? "text-gold" : "text-foreground"
              )}
            >
              Hakkımızda
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/contact"
              className={cn(
                "text-sm font-medium transition-colors duration-300 hover:text-gold relative group",
                isActive('/contact') ? "text-gold" : "text-foreground"
              )}
            >
              İletişim
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Logo ortada */}
          <Link
            to="/"
            className="text-2xl font-bold text-foreground hover:text-gold transition-colors duration-300"
          >
            Asya Danışmanlık
          </Link>

          {/* Sağ menü */}
          <div className="flex items-center space-x-8">
            <Link
              to="/services"
              className={cn(
                "text-sm font-medium transition-colors duration-300 hover:text-gold relative group",
                isActive('/services') ? "text-gold" : "text-foreground"
              )}
            >
              Hizmetlerimiz
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/projects"
              className={cn(
                "text-sm font-medium transition-colors duration-300 hover:text-gold relative group",
                isActive('/projects') ? "text-gold" : "text-foreground"
              )}
            >
              Projelerimiz
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;