import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
          {/* Mobilde logo ve menü yan yana */}
          <div className="flex flex-row md:flex-col justify-between items-center md:items-start w-full md:w-auto mb-8 md:mb-0">
            {/* Hızlı menü - mobilde sol tarafta, desktop'ta normal */}
            <div className="flex flex-col items-start space-y-3 md:space-y-0 md:flex-row md:space-x-8">
              <Link
                to="/"
                className="text-sm hover:text-gold transition-colors duration-300"
              >
                Ana Sayfa
              </Link>
              <Link
                to="/about"
                className="text-sm hover:text-gold transition-colors duration-300"
              >
                Hakkımızda
              </Link>
              <Link
                to="/contact"
                className="text-sm hover:text-gold transition-colors duration-300"
              >
                İletişim
              </Link>
              <Link
                to="/services"
                className="text-sm hover:text-gold transition-colors duration-300"
              >
                Hizmetlerimiz
              </Link>
              <Link
                to="/projects"
                className="text-sm hover:text-gold transition-colors duration-300"
              >
                Projelerimiz
              </Link>
            </div>

            {/* Logo - mobilde ortada ve büyük, desktop'ta üstte */}
            <div className="md:hidden flex items-center">
              <Link
                to="/"
                className="hover:opacity-80 transition-opacity duration-300"
              >
                <img 
                  src="/lovable-uploads/6421f3a4-a5d9-4446-8915-67ea626ec39c.png" 
                  alt="Asya Danışmanlık Logo" 
                  className="h-48 w-auto"
                />
              </Link>
            </div>
          </div>

          {/* Desktop düzen - logo ortada, menü sol tarafta alt alta */}
          <div className="hidden md:flex w-full justify-between items-start">
            {/* Sol tarafta menü linkler alt alta */}
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-sm hover:text-gold transition-colors duration-300"
              >
                Ana Sayfa
              </Link>
              <Link
                to="/about"
                className="text-sm hover:text-gold transition-colors duration-300"
              >
                Hakkımızda
              </Link>
              <Link
                to="/contact"
                className="text-sm hover:text-gold transition-colors duration-300"
              >
                İletişim
              </Link>
              <Link
                to="/services"
                className="text-sm hover:text-gold transition-colors duration-300"
              >
                Hizmetlerimiz
              </Link>
              <Link
                to="/projects"
                className="text-sm hover:text-gold transition-colors duration-300"
              >
                Projelerimiz
              </Link>
            </div>
            
            {/* Logo tam ortada */}
            <div className="flex justify-center flex-1">
              <Link
                to="/"
                className="hover:opacity-80 transition-opacity duration-300"
              >
                <img 
                  src="/lovable-uploads/6421f3a4-a5d9-4446-8915-67ea626ec39c.png" 
                  alt="Asya Danışmanlık Logo" 
                  className="h-28 w-auto"
                />
              </Link>
            </div>

            {/* Sağ tarafta boş alan - hizalama için */}
            <div className="w-40"></div>
          </div>

          {/* Adres bilgisi ve sosyal medya sağda */}
          <div className="text-center md:text-right">
            <div className="mb-4">
              <p className="text-sm text-muted-foreground mb-1">
                Atatürk Mahallesi, İş Merkezi Sok. No:12
              </p>
              <p className="text-sm text-muted-foreground mb-1">
                Kadıköy, İstanbul 34716
              </p>
              <p className="text-sm text-muted-foreground">
                +90 (216) 555 01 23
              </p>
            </div>
            
            {/* Sosyal medya ikonları */}
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gold/10 hover:bg-gold hover:text-primary transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gold/10 hover:bg-gold hover:text-primary transition-all duration-300"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gold/10 hover:bg-gold hover:text-primary transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/20 mt-8 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Asya Danışmanlık. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;