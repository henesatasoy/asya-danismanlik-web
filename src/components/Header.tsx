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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 h-16 md:h-24",
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-soft border-b border-gold/10" 
          : "bg-gradient-to-b from-black/30 via-black/10 to-transparent backdrop-blur-sm"
      )}
    >
      <nav className="container mx-auto px-3 md:px-6 h-full flex items-center">
        {/* Mobil görünüm */}
        <div className="md:hidden w-full flex items-center justify-between">
          {/* Logo sol tarafta */}
          <Link
            to="/"
            className="group transition-all duration-300 hover:scale-105"
          >
            <img 
              src="/lovable-uploads/6ae3607a-1bff-42d6-8d71-5848a2c20a8f.png" 
              alt="Asya Danışmanlık Logo" 
              className="h-12 w-auto filter drop-shadow-sm group-hover:drop-shadow-md transition-all duration-300"
            />
          </Link>
          
          {/* Mobil menü - yatay scroll */}
          <div className="flex items-center space-x-6 overflow-x-auto scrollbar-hide">
            <Link
              to="/about"
              className={cn(
                "text-xs font-medium transition-all duration-300 hover:text-gold whitespace-nowrap relative group tracking-wide font-sans",
                isActive('/about') ? "text-gold font-semibold" : isScrolled ? "text-slate-600" : "text-white/95 font-medium",
                !isScrolled && "text-shadow-strong"
              )}
              style={!isScrolled ? { textShadow: '0px 1px 3px rgba(0,0,0,0.8), 0px 0px 8px rgba(0,0,0,0.4)' } : {}}
            >
              Hakkımızda
              <span className="absolute left-0 -bottom-1 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/services"
              className={cn(
                "text-xs font-medium transition-all duration-300 hover:text-gold whitespace-nowrap relative group tracking-wide font-sans",
                isActive('/services') ? "text-gold font-semibold" : isScrolled ? "text-slate-600" : "text-white/95 font-medium",
                !isScrolled && "text-shadow-strong"
              )}
              style={!isScrolled ? { textShadow: '0px 1px 3px rgba(0,0,0,0.8), 0px 0px 8px rgba(0,0,0,0.4)' } : {}}
            >
              Hizmetler
              <span className="absolute left-0 -bottom-1 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/projects"
              className={cn(
                "text-xs font-medium transition-all duration-300 hover:text-gold whitespace-nowrap relative group tracking-wide font-sans",
                isActive('/projects') ? "text-gold font-semibold" : isScrolled ? "text-slate-600" : "text-white/95 font-medium",
                !isScrolled && "text-shadow-strong"
              )}
              style={!isScrolled ? { textShadow: '0px 1px 3px rgba(0,0,0,0.8), 0px 0px 8px rgba(0,0,0,0.4)' } : {}}
            >
              Projeler
              <span className="absolute left-0 -bottom-1 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/contact"
              className={cn(
                "text-xs font-medium transition-all duration-300 hover:text-gold whitespace-nowrap relative group tracking-wide font-sans",
                isActive('/contact') ? "text-gold font-semibold" : isScrolled ? "text-slate-600" : "text-white/95 font-medium",
                !isScrolled && "text-shadow-strong"
              )}
              style={!isScrolled ? { textShadow: '0px 1px 3px rgba(0,0,0,0.8), 0px 0px 8px rgba(0,0,0,0.4)' } : {}}
            >
              İletişim
              <span className="absolute left-0 -bottom-1 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
        </div>

        {/* Desktop görünüm */}
        <div className="hidden md:grid w-full grid-cols-[1fr_auto_1fr] items-center">
          {/* Sol menü */}
          <div className="flex items-center justify-start space-x-12">
            <Link
              to="/about"
              className={cn(
                "text-sm font-medium transition-all duration-300 hover:text-gold relative group whitespace-nowrap tracking-wide font-sans",
                isActive('/about') ? "text-gold font-semibold" : isScrolled ? "text-slate-600" : "text-white/95 font-medium",
                !isScrolled && "text-shadow-strong"
              )}
              style={!isScrolled ? { textShadow: '0px 1px 3px rgba(0,0,0,0.8), 0px 0px 8px rgba(0,0,0,0.4)' } : {}}
            >
              Hakkımızda
              <span className="absolute left-0 -bottom-2 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/contact"
              className={cn(
                "text-sm font-medium transition-all duration-300 hover:text-gold relative group whitespace-nowrap tracking-wide font-sans",
                isActive('/contact') ? "text-gold font-semibold" : isScrolled ? "text-slate-600" : "text-white/95 font-medium",
                !isScrolled && "text-shadow-strong"
              )}
              style={!isScrolled ? { textShadow: '0px 1px 3px rgba(0,0,0,0.8), 0px 0px 8px rgba(0,0,0,0.4)' } : {}}
            >
              İletişim
              <span className="absolute left-0 -bottom-2 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Logo ortada */}
          <div className="flex justify-center px-8">
            <Link
              to="/"
              className="group transition-all duration-500 hover:scale-110"
            >
              <img 
                src="/lovable-uploads/6ae3607a-1bff-42d6-8d71-5848a2c20a8f.png" 
                alt="Asya Danışmanlık Logo" 
                className="h-20 w-auto filter drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-500"
              />
            </Link>
          </div>

          {/* Sağ menü */}
          <div className="flex items-center justify-end space-x-12">
            <Link
              to="/services"
              className={cn(
                "text-sm font-medium transition-all duration-300 hover:text-gold relative group whitespace-nowrap tracking-wide font-sans",
                isActive('/services') ? "text-gold font-semibold" : isScrolled ? "text-slate-600" : "text-white/95 font-medium",
                !isScrolled && "text-shadow-strong"
              )}
              style={!isScrolled ? { textShadow: '0px 1px 3px rgba(0,0,0,0.8), 0px 0px 8px rgba(0,0,0,0.4)' } : {}}
            >
              Hizmetlerimiz
              <span className="absolute left-0 -bottom-2 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/projects"
              className={cn(
                "text-sm font-medium transition-all duration-300 hover:text-gold relative group whitespace-nowrap tracking-wide font-sans",
                isActive('/projects') ? "text-gold font-semibold" : isScrolled ? "text-slate-600" : "text-white/95 font-medium",
                !isScrolled && "text-shadow-strong"
              )}
              style={!isScrolled ? { textShadow: '0px 1px 3px rgba(0,0,0,0.8), 0px 0px 8px rgba(0,0,0,0.4)' } : {}}
            >
              Projelerimiz
              <span className="absolute left-0 -bottom-2 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;