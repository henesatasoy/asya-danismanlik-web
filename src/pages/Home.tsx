import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, TrendingUp, Users, Target, DollarSign, Building, Zap, Info, Briefcase, Mail, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-bg.jpg';
import FloatingParticles from '@/components/FloatingParticles';
import { useMousePosition } from '@/hooks/useMousePosition';
import { useEffect, useState } from 'react';

const Home = () => {
  const mousePosition = useMousePosition();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <FloatingParticles />
      {/* Hero Section */}
      <section 
        className="relative h-[85vh] flex items-center justify-center text-center text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30"></div>
        
        {/* Interactive background elements */}
        <div 
          className="absolute w-96 h-96 bg-gold/10 rounded-full blur-3xl opacity-30 pointer-events-none"
          style={{
            left: `${mousePosition.x * 0.02}px`,
            top: `${mousePosition.y * 0.02}px`,
            transform: 'translate(-50%, -50%)',
          }}
        />
        <div 
          className="absolute w-64 h-64 bg-gold/5 rounded-full blur-2xl opacity-40 pointer-events-none"
          style={{
            left: `${mousePosition.x * -0.01 + 200}px`,
            top: `${mousePosition.y * -0.01 + 100}px`,
            transform: 'translate(-50%, -50%)',
          }}
        />
        
        <div className="container mx-auto px-6 animate-fade-in relative z-10">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/6421f3a4-a5d9-4446-8915-67ea626ec39c.png" 
              alt="Asya Danışmanlık Logo" 
              className="h-48 md:h-56 w-auto mx-auto mb-6 shadow-glow filter drop-shadow-lg hover:drop-shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-light mb-8 tracking-wide">
            <span className="block text-gold text-3xl md:text-4xl font-light mb-2 tracking-wider">
              Güvenilir İş Ortağınız
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
            className="px-12 py-4 text-lg font-semibold group relative overflow-hidden"
            onMouseEnter={(e) => {
              const button = e.currentTarget;
              const rect = button.getBoundingClientRect();
              const x = mousePosition.x - rect.left;
              const y = mousePosition.y - rect.top;
              button.style.setProperty('--mouse-x', `${x}px`);
              button.style.setProperty('--mouse-y', `${y}px`);
            }}
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
        
        {/* Interactive elements that follow mouse */}
        <div 
          className="absolute w-32 h-32 bg-gold/5 rounded-full blur-xl opacity-50 pointer-events-none transition-all duration-300"
          style={{
            left: `${mousePosition.x * 0.01}px`,
            top: `${mousePosition.y * 0.01 + scrollY * 0.1}px`,
            transform: 'translate(-50%, -50%)',
          }}
        />
        
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
            <Link to="/contact" className="block group">
              <Card className="group hover:shadow-glow transition-all duration-700 hover:-translate-y-4 hover:scale-105 border-0 bg-white/90 backdrop-blur-sm relative overflow-hidden cursor-pointer transform-gpu">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-gold-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/0 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-10 text-center relative z-10">
                  <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-gold/10 to-gold/5 rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-gold/30 group-hover:to-gold/15 group-hover:shadow-glow transition-all duration-500 group-hover:rotate-3 transform-gpu">
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
            </Link>

            <Link to="/contact" className="block group">
              <Card className="group hover:shadow-glow transition-all duration-700 hover:-translate-y-4 hover:scale-105 border-0 bg-white/90 backdrop-blur-sm relative overflow-hidden cursor-pointer">
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
            </Link>

            <Link to="/contact" className="block group">
              <Card className="group hover:shadow-glow transition-all duration-700 hover:-translate-y-4 hover:scale-105 border-0 bg-white/90 backdrop-blur-sm relative overflow-hidden cursor-pointer">
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
            </Link>
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

      {/* About Section */}
      <section className="py-24 bg-gradient-to-br from-white to-gray-50 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6 tracking-wide">
                <span className="font-semibold text-gold">Hakkımızda</span>
              </h2>
              <div className="w-16 h-0.5 bg-gold mx-auto mb-6"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-light text-gold mb-4">
                  10+ Yıllık Deneyim ile Güvenilir Ortağınız
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Asya Danışmanlık olarak, işletmenizin büyümesi ve başarısı için 
                  stratejik çözümler sunuyoruz. Deneyimli ekibimizle sektörün 
                  dinamiklerini takip ediyor, müşterilerimize özel çözümler geliştiriyoruz.
                </p>
                <Button asChild variant="outline" className="border-gold/50 text-gold hover:bg-gold hover:text-primary">
                  <Link to="/about">
                    Detayları Keşfedin
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <Card className="p-6 text-center border-0 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gold/10 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-gold" />
                  </div>
                  <h4 className="text-lg font-medium text-gold mb-2">Uzman Ekip</h4>
                  <p className="text-sm text-muted-foreground">Alanında deneyimli profesyoneller</p>
                </Card>
                
                <Card className="p-6 text-center border-0 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gold/10 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-gold" />
                  </div>
                  <h4 className="text-lg font-medium text-gold mb-2">Hedef Odaklı</h4>
                  <p className="text-sm text-muted-foreground">Sonuç odaklı yaklaşım</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6 tracking-wide">
              <span className="font-semibold text-gold">Projelerimiz</span>
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Gerçekleştirdiğimiz başarılı projeler ve çözüm ortaklıklarımız
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="group hover:shadow-glow transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-gold/10 to-gold/5 rounded-xl flex items-center justify-center">
                  <Briefcase className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-medium text-gold mb-4">İmalat Sektörü</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Büyük ölçekli üretim tesisleri için teşvik danışmanlığı ve iş geliştirme projeleri
                </p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-glow transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-gold/10 to-gold/5 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-medium text-gold mb-4">Teknoloji</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Yazılım ve teknoloji şirketleri için stratejik büyüme planlaması
                </p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-glow transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-gold/10 to-gold/5 rounded-xl flex items-center justify-center">
                  <Building className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-medium text-gold mb-4">Hizmet Sektörü</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Hizmet işletmeleri için operasyonel verimlilik ve kapasite artırımı
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <Button asChild variant="outline" className="border-gold/50 text-gold hover:bg-gold hover:text-primary">
              <Link to="/projects">
                Tüm Projeleri Görüntüle
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Preview Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-wide">
                <span className="font-semibold text-gold">İletişim</span>
              </h2>
              <div className="w-16 h-0.5 bg-gold mx-auto mb-8"></div>
              <p className="text-xl text-white/80 leading-relaxed font-light">
                Projeleriniz için güvenilir bir ortak arıyorsanız, 
                uzman ekibimizle iletişime geçin.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-gold to-gold-light rounded-xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-all duration-300">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-medium text-gold mb-2">E-posta</h3>
                <p className="text-white/70 text-sm">info@asyadanismanlik.com</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-gold to-gold-light rounded-xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-all duration-300">
                  <Building className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-medium text-gold mb-2">Ofis</h3>
                <p className="text-white/70 text-sm">İstanbul / Türkiye</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-gold to-gold-light rounded-xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-all duration-300">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-medium text-gold mb-2">Danışmanlık</h3>
                <p className="text-white/70 text-sm">Ücretsiz ön görüşme</p>
              </div>
            </div>
            
            <Button asChild variant="elegant" size="lg" className="px-12 py-4">
              <Link to="/contact">
                İletişime Geçin
                <ArrowRight className="ml-2" size={20} />
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