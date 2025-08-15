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
          <div className="flex items-center space-x-8 overflow-x-auto scrollbar-hide">
            <Link
              to="/about"
              className={cn(
                "text-xs font-medium transition-all duration-300 hover:text-gold whitespace-nowrap relative group tracking-wide font-sans",
                isActive('/about') ? "text-black" : "text-black"
              )}
            >
              Hakkımızda
              <span className="absolute left-0 -bottom-1 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/services"
              className={cn(
                "text-xs font-medium transition-all duration-300 hover:text-gold whitespace-nowrap relative group tracking-wide font-sans",
                isActive('/services') ? "text-gold font-semibold" : "text-black"
              )}
            >
              Hizmetler
              <span className="absolute left-0 -bottom-1 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/projects"
              className={cn(
                "text-xs font-medium transition-all duration-300 hover:text-gold whitespace-nowrap relative group tracking-wide font-sans",
                isActive('/projects') ? "text-gold font-semibold" : "text-black"
              )}
            >
              Projeler
              <span className="absolute left-0 -bottom-1 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/contact"
              className={cn(
                "text-xs font-medium transition-all duration-300 hover:text-gold whitespace-nowrap relative group tracking-wide font-sans",
                isActive('/contact') ? "text-gold font-semibold" : "text-black"
              )}
            >
              İletişim
              <span className="absolute left-0 -bottom-1 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
        </div>

        {/* Desktop görünüm */}
        <div className="hidden md:grid w-full grid-cols-[1fr_auto_1fr] items-center">
          {/* Sol menü */}
          <div className="flex items-center justify-start space-x-16">
            <Link
              to="/about"
              className={cn(
                "text-sm font-medium transition-all duration-300 hover:text-gold relative group whitespace-nowrap tracking-wide font-sans",
                isActive('/about') ? "text-black" : "text-black"
              )}
            >
              Hakkımızda
              <span className="absolute left-0 -bottom-2 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/contact"
              className={cn(
                "text-sm font-medium transition-all duration-300 hover:text-gold relative group whitespace-nowrap tracking-wide font-sans",
                isActive('/contact') ? "text-gold font-semibold" : "text-black"
              )}
            >
              İletişim
              <span className="absolute left-0 -bottom-2 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Logo ortada */}
          <div className="flex justify-center px-8">
            <Link
              to="/"
              className="group transition-all duration-500 hover:scale-110 relative"
            >
              {/* Halka animasyonları */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700">
                {/* Dış halka - gradyan efektli partial halkalar */}
                <div className="absolute w-40 h-40 animate-spin-slow" style={{ animationDuration: '8s' }}>
                  <div className="absolute inset-0 rounded-full" style={{
                    background: `conic-gradient(from 0deg, transparent 0deg, hsl(var(--gold)) 60deg, transparent 120deg, hsl(var(--gold)) 180deg, transparent 240deg, hsl(var(--gold)) 300deg, transparent 360deg)`,
                    mask: `radial-gradient(circle, transparent 78px, black 82px, black 86px, transparent 90px)`,
                    WebkitMask: `radial-gradient(circle, transparent 78px, black 82px, black 86px, transparent 90px)`
                  }}></div>
                </div>
                
                {/* Orta halka - ters yönde dönmeli partial halka */}
                <div className="absolute w-32 h-32 animate-spin-slow" style={{ animationDuration: '6s', animationDirection: 'reverse' }}>
                  <div className="absolute inset-0 rounded-full" style={{
                    background: `conic-gradient(from 0deg, transparent 0deg, hsl(var(--gold)) 90deg, transparent 180deg, hsl(var(--gold)) 270deg, transparent 360deg)`,
                    mask: `radial-gradient(circle, transparent 62px, black 66px, black 70px, transparent 74px)`,
                    WebkitMask: `radial-gradient(circle, transparent 62px, black 66px, black 70px, transparent 74px)`
                  }}></div>
                </div>
                
                {/* İç halka - glow efektli sürekli halka */}
                <div className="absolute w-24 h-24 border-2 border-gold/60 rounded-full animate-spin-slow shadow-lg shadow-gold/40" style={{ animationDuration: '4s' }}></div>
                
                {/* Orbital noktalar - dış halka ile beraber dönen */}
                <div className="absolute w-40 h-40 animate-spin-slow" style={{ animationDuration: '8s' }}>
                  <div className="absolute w-2 h-2 bg-gold rounded-full shadow-sm shadow-gold/50" style={{ top: '10%', left: '50%', transform: 'translateX(-50%)' }}></div>
                  <div className="absolute w-2 h-2 bg-gold rounded-full shadow-sm shadow-gold/50" style={{ top: '50%', right: '10%', transform: 'translateY(-50%)' }}></div>
                  <div className="absolute w-2 h-2 bg-gold rounded-full shadow-sm shadow-gold/50" style={{ bottom: '10%', left: '50%', transform: 'translateX(-50%)' }}></div>
                </div>
                
                {/* Parlayan merkez nokta efektleri */}
                <div className="absolute w-3 h-3 bg-gold rounded-full animate-ping shadow-lg shadow-gold/60" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
                
                {/* Ek atmosphere parçacıkları */}
                <div className="absolute w-1 h-1 bg-gold/80 rounded-full animate-ping" style={{ top: '25%', right: '30%', animationDelay: '1s', animationDuration: '2s' }}></div>
                <div className="absolute w-1 h-1 bg-gold/80 rounded-full animate-ping" style={{ bottom: '25%', left: '30%', animationDelay: '2s', animationDuration: '2s' }}></div>
              </div>
              
              <img 
                src="/lovable-uploads/6ae3607a-1bff-42d6-8d71-5848a2c20a8f.png" 
                alt="Asya Danışmanlık Logo" 
                className="h-20 w-auto filter drop-shadow-lg group-hover:drop-shadow-xl group-hover:brightness-110 transition-all duration-500 relative z-10"
              />
            </Link>
          </div>

          {/* Sağ menü */}
          <div className="flex items-center justify-end space-x-16">
            <Link
              to="/services"
              className={cn(
                "text-sm font-medium transition-all duration-300 hover:text-gold relative group whitespace-nowrap tracking-wide font-sans",
                isActive('/services') ? "text-gold font-semibold" : "text-black"
              )}
            >
              Hizmetlerimiz
              <span className="absolute left-0 -bottom-2 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/projects"
              className={cn(
                "text-sm font-medium transition-all duration-300 hover:text-gold relative group whitespace-nowrap tracking-wide font-sans",
                isActive('/projects') ? "text-gold font-semibold" : "text-black"
              )}
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