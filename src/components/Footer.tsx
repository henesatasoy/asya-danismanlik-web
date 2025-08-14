import { Link } from 'react-router-dom';
import { Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/3 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          
          {/* Navigation Links */}
          <div className="text-center md:text-left">
            <div className="space-y-3">
              <Link
                to="/"
                className="block text-white/70 hover:text-gold transition-all duration-300 font-light tracking-wide group"
              >
                <span className="relative">
                  Ana Sayfa
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
              <Link
                to="/about"
                className="block text-white/70 hover:text-gold transition-all duration-300 font-light tracking-wide group"
              >
                <span className="relative">
                  Hakkımızda
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
              <Link
                to="/services"
                className="block text-white/70 hover:text-gold transition-all duration-300 font-light tracking-wide group"
              >
                <span className="relative">
                  Hizmetlerimiz
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
              <Link
                to="/projects"
                className="block text-white/70 hover:text-gold transition-all duration-300 font-light tracking-wide group"
              >
                <span className="relative">
                  Projelerimiz
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
              <Link
                to="/contact"
                className="block text-white/70 hover:text-gold transition-all duration-300 font-light tracking-wide group"
              >
                <span className="relative">
                  İletişim
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
            </div>
          </div>

          {/* Logo */}
          <div className="flex justify-center items-center">
            <Link
              to="/"
              className="group transition-all duration-500 hover:scale-105"
            >
              <img 
                src="/lovable-uploads/6421f3a4-a5d9-4446-8915-67ea626ec39c.png" 
                alt="Asya Danışmanlık Logo" 
                className="h-36 md:h-42 w-auto filter drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-500"
              />
            </Link>
          </div>

          {/* Contact & Social */}
          <div className="text-center md:text-right">
            <div className="space-y-2 mb-6">
              <p className="text-white/70 font-light text-sm leading-relaxed">
                İhsaniye Mahallesi<br />
                Çeşmeli Sok. No: 11/1<br />
                Merkez, Bolu 14200
              </p>
              <p className="text-gold font-light text-sm mt-3">
                +90 507 863 30 30
              </p>
            </div>
            
            {/* Social Media */}
            <div className="flex justify-center md:justify-end space-x-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-gold hover:text-primary transition-all duration-500 flex items-center justify-center group hover:scale-110 hover:shadow-glow"
              >
                <Instagram size={16} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-gold hover:text-primary transition-all duration-500 flex items-center justify-center group hover:scale-110 hover:shadow-glow"
              >
                <span className="text-sm font-bold group-hover:scale-110 transition-transform duration-300">𝕏</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-gold hover:text-primary transition-all duration-500 flex items-center justify-center group hover:scale-110 hover:shadow-glow"
              >
                <Linkedin size={16} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/50 font-light text-sm tracking-wide">
            © 2025 <span className="text-gold">Asya Danışmanlık</span>. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;