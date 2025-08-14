import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, TrendingUp, Users, Target, DollarSign, Building, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-bg.jpg';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-[85vh] flex items-center justify-center text-center text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30"></div>
        <div className="container mx-auto px-6 animate-fade-in relative z-10">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/6421f3a4-a5d9-4446-8915-67ea626ec39c.png" 
              alt="Asya Danışmanlık Logo" 
              className="h-48 md:h-56 w-auto mx-auto mb-6 shadow-glow filter drop-shadow-lg hover:drop-shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-light mb-8 tracking-wide">
            <span className="block text-white/90 text-2xl md:text-3xl font-light mb-2 tracking-wider">
              Güvenilir İş Ortağınız
            </span>
            <span className="block bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent font-semibold">
              ASYA DANIŞMANLIK
            </span>
          </h1>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-white/80 leading-relaxed font-light">
            Yatırım teşviklerinden iş geliştirmeye, stratejik planlamadan 
            kapasite artırımına kadar profesyonel danışmanlık hizmetleri.
          </p>
          <Button 
            asChild 
            variant="elegant"
            size="lg" 
            className="px-12 py-4 text-lg font-semibold"
          >
            <Link to="/services">
              Hizmetlerimizi Keşfedin
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6 tracking-wide">
              <span className="font-semibold text-gold">Hizmet</span> Alanlarımız
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto font-light leading-relaxed">
              İş dünyasının dinamik yapısında size rehberlik edecek 
              üç temel uzmanlık alanımız.
            </p>
          </div>

           <div className="grid md:grid-cols-3 gap-10">
            <Card className="group hover:shadow-glow transition-all duration-700 hover:-translate-y-4 hover:scale-105 border-0 bg-white/90 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-gold-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <CardContent className="p-10 text-center">
                <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-gold/10 to-gold/5 rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-gold/30 group-hover:to-gold/15 group-hover:shadow-glow transition-all duration-500 group-hover:rotate-3">
                  <DollarSign className="w-10 h-10 text-gold group-hover:scale-125 transition-transform duration-500" />
                </div>
                <h3 className="text-2xl font-light text-gold mb-6 group-hover:font-normal transition-all duration-300">
                  Yatırım Teşvik
                </h3>
                <p className="text-muted-foreground leading-relaxed font-light text-sm">
                  Devlet teşviklerinden maksimum faydayı sağlayacak stratejiler geliştiriyoruz. 
                  Yatırım projelerinizin her aşamasında yanınızdayız.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-glow transition-all duration-700 hover:-translate-y-4 hover:scale-105 border-0 bg-white/90 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-gold-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <CardContent className="p-10 text-center">
                <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-gold/10 to-gold/5 rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-gold/30 group-hover:to-gold/15 group-hover:shadow-glow transition-all duration-500 group-hover:rotate-3">
                  <Building className="w-10 h-10 text-gold group-hover:scale-125 transition-transform duration-500" />
                </div>
                <h3 className="text-2xl font-light text-gold mb-6 group-hover:font-normal transition-all duration-300">
                  İş Geliştirme
                </h3>
                <p className="text-muted-foreground leading-relaxed font-light text-sm">
                  İşletmenizin büyüme potansiyelini keşfediyor, yeni pazarlara açılmanızı 
                  ve rekabet gücünüzü artırmanızı sağlıyoruz.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-glow transition-all duration-700 hover:-translate-y-4 hover:scale-105 border-0 bg-white/90 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-gold-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <CardContent className="p-10 text-center">
                <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-gold/10 to-gold/5 rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-gold/30 group-hover:to-gold/15 group-hover:shadow-glow transition-all duration-500 group-hover:rotate-3">
                  <Zap className="w-10 h-10 text-gold group-hover:scale-125 transition-transform duration-500" />
                </div>
                <h3 className="text-2xl font-light text-gold mb-6 group-hover:font-normal transition-all duration-300">
                  Kapasite Geliştirme
                </h3>
                <p className="text-muted-foreground leading-relaxed font-light text-sm">
                  İnsan kaynakları ve operasyonel süreçlerinizi optimize ediyor, 
                  organizasyonunuzun kapasitesini artırıyoruz.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-16 space-y-6 md:space-y-0 md:space-x-6 md:flex md:justify-center">
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-gold/50 text-gold hover:bg-gold hover:text-primary hover:border-gold group px-10 py-4 rounded-full font-light tracking-wide"
            >
              <Link to="/services">
                Tüm Hizmetleri Keşfedin
                <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" size={18} />
              </Link>
            </Button>
            
            <Button 
              asChild 
              variant="elegant"
              size="lg"
              className="px-10 py-4 group rounded-full font-light tracking-wide"
            >
              <Link to="/contact">
                İletişime Geçin
                <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="animate-slide-up group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-gold to-gold-light rounded-2xl flex items-center justify-center shadow-glow group-hover:shadow-xl group-hover:scale-110 transition-all duration-500">
                <TrendingUp size={36} className="text-primary" />
              </div>
              <h3 className="text-5xl font-light text-gold mb-3 tracking-wide">500<span className="text-3xl">+</span></h3>
              <p className="text-white/70 font-light tracking-wide">Başarılı Proje</p>
            </div>
            
            <div className="animate-slide-up group" style={{ animationDelay: '0.2s' }}>
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-gold to-gold-light rounded-2xl flex items-center justify-center shadow-glow group-hover:shadow-xl group-hover:scale-110 transition-all duration-500">
                <Users size={36} className="text-primary" />
              </div>
              <h3 className="text-5xl font-light text-gold mb-3 tracking-wide">250<span className="text-3xl">+</span></h3>
              <p className="text-white/70 font-light tracking-wide">Mutlu Müşteri</p>
            </div>
            
            <div className="animate-slide-up group" style={{ animationDelay: '0.4s' }}>
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-gold to-gold-light rounded-2xl flex items-center justify-center shadow-glow group-hover:shadow-xl group-hover:scale-110 transition-all duration-500">
                <Target size={36} className="text-primary" />
              </div>
              <h3 className="text-5xl font-light text-gold mb-3 tracking-wide">10<span className="text-3xl">+</span></h3>
              <p className="text-white/70 font-light tracking-wide">Yıllık Deneyim</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;