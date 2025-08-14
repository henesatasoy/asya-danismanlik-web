import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, TrendingUp, Users, Target, DollarSign, Building, Zap, Info, Briefcase, Mail, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-bg.jpg';
import FloatingParticles from '@/components/FloatingParticles';
import { useMousePosition } from '@/hooks/useMousePosition';
import { useInView } from '@/hooks/useInView';
import { useEffect, useState } from 'react';
const Home = () => {
  const mousePosition = useMousePosition();
  const [scrollY, setScrollY] = useState(0);

  // Section refs for animations - threshold %15, root margin -20px
  const servicesRef = useInView({
    threshold: 0.15,
    rootMargin: '-20px'
  });
  const aboutRef = useInView({
    threshold: 0.15,
    rootMargin: '-20px'
  });
  const projectsRef = useInView({
    threshold: 0.15,
    rootMargin: '-20px'
  });
  const contactRef = useInView({
    threshold: 0.15,
    rootMargin: '-20px'
  });
  const statsRef = useInView({
    threshold: 0.15,
    rootMargin: '-20px'
  });
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <div className="relative">
      <FloatingParticles />
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center text-center text-white overflow-hidden" style={{
      backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(${heroImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30 py-0"></div>
        
        {/* Interactive background elements */}
        <div className="absolute w-96 h-96 bg-gold/10 rounded-full blur-3xl opacity-30 pointer-events-none" style={{
        left: `${mousePosition.x * 0.02}px`,
        top: `${mousePosition.y * 0.02}px`,
        transform: 'translate(-50%, -50%)'
      }} />
        <div className="absolute w-64 h-64 bg-gold/5 rounded-full blur-2xl opacity-40 pointer-events-none" style={{
        left: `${mousePosition.x * -0.01 + 200}px`,
        top: `${mousePosition.y * -0.01 + 100}px`,
        transform: 'translate(-50%, -50%)'
      }} />
        
        <div className="container mx-auto px-6 animate-fade-in relative z-10">
          <div className="mb-8">
            <img src="/lovable-uploads/6421f3a4-a5d9-4446-8915-67ea626ec39c.png" alt="Asya Danışmanlık Logo" className="h-48 md:h-56 w-auto mx-auto mb-6 shadow-glow filter drop-shadow-lg hover:drop-shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer" />
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
          <Button asChild variant="elegant" size="lg" className="px-12 py-4 text-lg font-semibold group relative overflow-hidden" onMouseEnter={e => {
          const button = e.currentTarget;
          const rect = button.getBoundingClientRect();
          const x = mousePosition.x - rect.left;
          const y = mousePosition.y - rect.top;
          button.style.setProperty('--mouse-x', `${x}px`);
          button.style.setProperty('--mouse-y', `${y}px`);
        }}>
            <Link to="/services">
              Hizmetlerimizi Keşfedin
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>

      {/* Services Preview Section */}
      <section ref={servicesRef.ref} className="bg-white relative border-b border-gray-100 py-20">
        <div className="container mx-auto px-6">
          <div className={`text-center mb-20 transition-all duration-1000 ${servicesRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-8 tracking-tight">
              <span className="font-normal text-gold">Hizmet</span> Alanlarımız
            </h2>
            <div className="w-24 h-px bg-gold mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
              İş dünyasının dinamik yapısında size rehberlik edecek 
              üç temel uzmanlık alanımız.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
            <Link to="/contact" className={`block group transition-all duration-1000 delay-200 ${servicesRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Card className="h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 bg-white relative overflow-hidden cursor-pointer">
                <div className="absolute top-0 left-0 w-full h-1 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <CardContent className="p-12 text-center h-full flex flex-col">
                  <div className="w-20 h-20 mx-auto mb-8 bg-gold/5 rounded-full flex items-center justify-center group-hover:bg-gold/10 transition-colors duration-300">
                    <DollarSign className="w-10 h-10 text-gold" />
                  </div>
                  <h3 className="text-2xl font-medium text-gold mb-6 tracking-tight">
                    Yatırım Teşvik
                  </h3>
                  <p className="text-muted-foreground leading-relaxed flex-1">
                    Devlet teşviklerinden maksimum faydayı sağlayacak stratejiler geliştiriyoruz. 
                    Yatırım projelerinizin her aşamasında yanınızdayız.
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/contact" className={`block group transition-all duration-1000 delay-300 ${servicesRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Card className="h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 bg-white relative overflow-hidden cursor-pointer">
                <div className="absolute top-0 left-0 w-full h-1 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <CardContent className="p-12 text-center h-full flex flex-col">
                  <div className="w-20 h-20 mx-auto mb-8 bg-gold/5 rounded-full flex items-center justify-center group-hover:bg-gold/10 transition-colors duration-300">
                    <Building className="w-10 h-10 text-gold" />
                  </div>
                  <h3 className="text-2xl font-medium text-gold mb-6 tracking-tight">
                    İş Geliştirme
                  </h3>
                  <p className="text-muted-foreground leading-relaxed flex-1">
                    İşletmenizin büyüme potansiyelini keşfediyor, yeni pazarlara açılmanızı 
                    ve rekabet gücünüzü artırmanızı sağlıyoruz.
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/contact" className={`block group transition-all duration-1000 delay-500 ${servicesRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Card className="h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 bg-white relative overflow-hidden cursor-pointer">
                <div className="absolute top-0 left-0 w-full h-1 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <CardContent className="p-12 text-center h-full flex flex-col">
                  <div className="w-20 h-20 mx-auto mb-8 bg-gold/5 rounded-full flex items-center justify-center group-hover:bg-gold/10 transition-colors duration-300">
                    <Zap className="w-10 h-10 text-gold" />
                  </div>
                  <h3 className="text-2xl font-medium text-gold mb-6 tracking-tight">
                    Kapasite Geliştirme
                  </h3>
                  <p className="text-muted-foreground leading-relaxed flex-1">
                    İnsan kaynakları ve operasyonel süreçlerinizi optimize ediyor, 
                    organizasyonunuzun kapasitesini artırıyoruz.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className={`text-center mt-20 transition-all duration-1000 delay-700 ${servicesRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center">
              <Button asChild variant="outline" size="lg" className="border-gold text-gold hover:bg-gold hover:text-white px-8 py-3 rounded-sm font-medium tracking-wide">
                <Link to="/services">
                  Tüm Hizmetleri Keşfedin
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </Button>
              
              <Button asChild variant="elegant" size="lg" className="px-8 py-3 rounded-sm font-medium tracking-wide">
                <Link to="/contact">
                  İletişime Geçin
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef.ref} className="bg-gray-50 relative py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className={`text-center mb-20 transition-all duration-1000 ${aboutRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-4xl md:text-5xl font-light text-foreground mb-8 tracking-tight">
                <span className="font-normal text-gold">Hakkımızda</span>
              </h2>
              <div className="w-24 h-px bg-gold mx-auto mb-8"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div className={`space-y-8 transition-all duration-1000 delay-200 ${aboutRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h3 className="text-3xl font-light text-foreground mb-6 leading-tight">
                  10+ Yıllık Deneyim ile 
                  <span className="text-gold font-normal"> Güvenilir Ortağınız</span>
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Asya Danışmanlık olarak, işletmenizin büyümesi ve başarısı için 
                  stratejik çözümler sunuyoruz. Deneyimli ekibimizle sektörün 
                  dinamiklerini takip ediyor, müşterilerimize özel çözümler geliştiriyoruz.
                </p>
                <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold hover:text-white rounded-sm px-6 py-3 font-medium">
                  <Link to="/about">
                    Detayları Keşfedin
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                <div className={`p-8 text-center bg-white rounded-sm border border-gray-200 hover:shadow-lg transition-all duration-300 ${aboutRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
                transitionDelay: aboutRef.isInView ? '400ms' : '0ms'
              }}>
                  <div className="w-16 h-16 mx-auto mb-6 bg-gold/5 rounded-full flex items-center justify-center">
                    <Award className="w-8 h-8 text-gold" />
                  </div>
                  <h4 className="text-xl font-medium text-gold mb-3 tracking-tight">Uzman Ekip</h4>
                  <p className="text-muted-foreground">Alanında deneyimli profesyoneller</p>
                </div>
                
                <div className={`p-8 text-center bg-white rounded-sm border border-gray-200 hover:shadow-lg transition-all duration-300 ${aboutRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
                transitionDelay: aboutRef.isInView ? '600ms' : '0ms'
              }}>
                  <div className="w-16 h-16 mx-auto mb-6 bg-gold/5 rounded-full flex items-center justify-center">
                    <Target className="w-8 h-8 text-gold" />
                  </div>
                  <h4 className="text-xl font-medium text-gold mb-3 tracking-tight">Hedef Odaklı</h4>
                  <p className="text-muted-foreground">Sonuç odaklı yaklaşım</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef.ref} className="bg-white relative border-b border-gray-100 py-20">
        <div className="container mx-auto px-6">
          <div className={`text-center mb-20 transition-all duration-1000 ${projectsRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-8 tracking-tight">
              <span className="font-normal text-gold">Projelerimiz</span>
            </h2>
            <div className="w-24 h-px bg-gold mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Gerçekleştirdiğimiz başarılı projeler ve çözüm ortaklıklarımız
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto mb-16">
            <div className={`p-10 text-center bg-gray-50 rounded-sm border border-gray-100 hover:shadow-lg transition-all duration-300 ${projectsRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
            transitionDelay: projectsRef.isInView ? '200ms' : '0ms'
          }}>
              <div className="w-20 h-20 mx-auto mb-8 bg-gold/5 rounded-full flex items-center justify-center">
                <Briefcase className="w-10 h-10 text-gold" />
              </div>
              <h3 className="text-2xl font-medium text-gold mb-6 tracking-tight">İmalat Sektörü</h3>
              <p className="text-muted-foreground leading-relaxed">
                Büyük ölçekli üretim tesisleri için teşvik danışmanlığı ve iş geliştirme projeleri
              </p>
            </div>
            
            <div className={`p-10 text-center bg-gray-50 rounded-sm border border-gray-100 hover:shadow-lg transition-all duration-300 ${projectsRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
            transitionDelay: projectsRef.isInView ? '400ms' : '0ms'
          }}>
              <div className="w-20 h-20 mx-auto mb-8 bg-gold/5 rounded-full flex items-center justify-center">
                <TrendingUp className="w-10 h-10 text-gold" />
              </div>
              <h3 className="text-2xl font-medium text-gold mb-6 tracking-tight">Teknoloji</h3>
              <p className="text-muted-foreground leading-relaxed">
                Yazılım ve teknoloji şirketleri için stratejik büyüme planlaması
              </p>
            </div>
            
            <div className={`p-10 text-center bg-gray-50 rounded-sm border border-gray-100 hover:shadow-lg transition-all duration-300 ${projectsRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
            transitionDelay: projectsRef.isInView ? '600ms' : '0ms'
          }}>
              <div className="w-20 h-20 mx-auto mb-8 bg-gold/5 rounded-full flex items-center justify-center">
                <Building className="w-10 h-10 text-gold" />
              </div>
              <h3 className="text-2xl font-medium text-gold mb-6 tracking-tight">Hizmet Sektörü</h3>
              <p className="text-muted-foreground leading-relaxed">
                Hizmet işletmeleri için operasyonel verimlilik ve kapasite artırımı
              </p>
            </div>
          </div>
          
          <div className={`text-center transition-all duration-1000 delay-700 ${projectsRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold hover:text-white rounded-sm px-6 py-3 font-medium">
              <Link to="/projects">
                Tüm Projeleri Görüntüle
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Preview Section */}
      <section ref={contactRef.ref} className="bg-gray-900 text-white relative py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className={`mb-20 transition-all duration-1000 ${contactRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-tight">
                <span className="font-normal text-gold">İletişim</span>
              </h2>
              <div className="w-24 h-px bg-gold mx-auto mb-12"></div>
              <p className="text-2xl text-white/80 leading-relaxed font-light max-w-3xl mx-auto">
                Projeleriniz için güvenilir bir ortak arıyorsanız, 
                uzman ekibimizle iletişime geçin.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12 mb-16">
              <div className={`text-center transition-all duration-1000 delay-200 ${contactRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="w-20 h-20 mx-auto mb-6 bg-gold/10 rounded-full flex items-center justify-center border border-gold/20">
                  <Mail className="w-10 h-10 text-gold" />
                </div>
                <h3 className="text-xl font-medium text-gold mb-4 tracking-tight">E-posta</h3>
                <p className="text-white/70 text-lg">info@asyadanismanlik.com</p>
              </div>
              
              <div className={`text-center transition-all duration-1000 delay-300 ${contactRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="w-20 h-20 mx-auto mb-6 bg-gold/10 rounded-full flex items-center justify-center border border-gold/20">
                  <Building className="w-10 h-10 text-gold" />
                </div>
                <h3 className="text-xl font-medium text-gold mb-4 tracking-tight">Ofis</h3>
                <p className="text-white/70 text-lg">Merkez / Bolu</p>
              </div>
              
              <div className={`text-center transition-all duration-1000 delay-500 ${contactRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="w-20 h-20 mx-auto mb-6 bg-gold/10 rounded-full flex items-center justify-center border border-gold/20">
                  <Users className="w-10 h-10 text-gold" />
                </div>
                <h3 className="text-xl font-medium text-gold mb-4 tracking-tight">Danışmanlık</h3>
                <p className="text-white/70 text-lg">Ücretsiz ön görüşme</p>
              </div>
            </div>
            
            <div className={`transition-all duration-1000 delay-700 ${contactRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Button asChild variant="elegant" size="lg" className="px-10 py-4 text-lg rounded-sm font-medium">
                <Link to="/contact">
                  İletişime Geçin
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef.ref} className="bg-black text-white relative py-[50px]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-16 text-center max-w-5xl mx-auto">
            <div className={`group transition-all duration-1000 delay-200 ${statsRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="w-24 h-24 mx-auto mb-8 bg-gold/10 rounded-full flex items-center justify-center border border-gold/20 group-hover:bg-gold/20 transition-colors duration-300">
                <TrendingUp size={32} className="text-gold" />
              </div>
              <h3 className="text-6xl font-light text-gold mb-4 tracking-tight">500<span className="text-4xl">+</span></h3>
              <p className="text-white/70 text-xl font-light tracking-wide">Başarılı Proje</p>
            </div>
            
            <div className={`group transition-all duration-1000 delay-300 ${statsRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="w-24 h-24 mx-auto mb-8 bg-gold/10 rounded-full flex items-center justify-center border border-gold/20 group-hover:bg-gold/20 transition-colors duration-300">
                <Users size={32} className="text-gold" />
              </div>
              <h3 className="text-6xl font-light text-gold mb-4 tracking-tight">250<span className="text-4xl">+</span></h3>
              <p className="text-white/70 text-xl font-light tracking-wide">Mutlu Müşteri</p>
            </div>
            
            <div className={`group transition-all duration-1000 delay-500 ${statsRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="w-24 h-24 mx-auto mb-8 bg-gold/10 rounded-full flex items-center justify-center border border-gold/20 group-hover:bg-gold/20 transition-colors duration-300">
                <Target size={32} className="text-gold" />
              </div>
              <h3 className="text-6xl font-light text-gold mb-4 tracking-tight">10<span className="text-4xl">+</span></h3>
              <p className="text-white/70 text-xl font-light tracking-wide">Yıllık Deneyim</p>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;