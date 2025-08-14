import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, TrendingUp, Users, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-bg.jpg';
import investmentIcon from '@/assets/investment-icon.png';
import businessIcon from '@/assets/business-icon.png';
import capacityIcon from '@/assets/capacity-icon.png';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-[80vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-6 animate-fade-in">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/6421f3a4-a5d9-4446-8915-67ea626ec39c.png" 
              alt="Asya Danışmanlık Logo" 
              className="h-48 md:h-56 w-auto mx-auto mb-6 animate-scale-in"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="block text-gold text-3xl md:text-4xl">
              Güvenilir İş Ortağınız
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
            Yatırım teşviklerinden iş geliştirmeye, kapasite artırımından 
            stratejik planlamaya kadar her alanda profesyonel danışmanlık hizmetleri sunuyoruz.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-gold hover:bg-gold-dark text-primary font-semibold px-8 py-3 shadow-gold"
          >
            <Link to="/services">
              Hizmetlerimizi Keşfedin
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Hizmetlerimiz
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              İş dünyasının karmaşık yapısında size rehberlik edecek 
              üç temel hizmet alanımız ile tanışın.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                  <img src={investmentIcon} alt="Yatırım Teşvik" className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-semibold text-gold mb-4">
                  Yatırım Teşvik
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Devlet teşviklerinden maksimum faydayı sağlayacak stratejiler geliştiriyoruz. 
                  Yatırım projelerinizin her aşamasında yanınızdayız.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                  <img src={businessIcon} alt="İş Geliştirme" className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-semibold text-gold mb-4">
                  İş Geliştirme
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  İşletmenizin büyüme potansiyelini keşfediyor, yeni pazarlara açılmanızı 
                  ve rekabet gücünüzü artırmanızı sağlıyoruz.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                  <img src={capacityIcon} alt="Kapasite Geliştirme" className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-semibold text-gold mb-4">
                  Kapasite Geliştirme
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  İnsan kaynakları ve operasyonel süreçlerinizi optimize ediyor, 
                  organizasyonunuzun kapasitesini artırıyoruz.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-gold text-gold hover:bg-gold hover:text-primary"
            >
              <Link to="/services">
                Tüm Hizmetleri Görüntüle
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-dark text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="animate-slide-up">
              <div className="w-16 h-16 mx-auto mb-4 bg-gold rounded-full flex items-center justify-center">
                <TrendingUp size={32} className="text-primary" />
              </div>
              <h3 className="text-4xl font-bold text-gold mb-2">500+</h3>
              <p className="text-gray-300">Başarılı Proje</p>
            </div>
            
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 mx-auto mb-4 bg-gold rounded-full flex items-center justify-center">
                <Users size={32} className="text-primary" />
              </div>
              <h3 className="text-4xl font-bold text-gold mb-2">250+</h3>
              <p className="text-gray-300">Mutlu Müşteri</p>
            </div>
            
            <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 mx-auto mb-4 bg-gold rounded-full flex items-center justify-center">
                <Target size={32} className="text-primary" />
              </div>
              <h3 className="text-4xl font-bold text-gold mb-2">15+</h3>
              <p className="text-gray-300">Yıllık Deneyim</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;