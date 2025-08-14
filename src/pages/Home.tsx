import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, TrendingUp, Users, Target, DollarSign, Building, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-bg.jpg';
import { ScrollAnimatedSection, StaggeredContainer } from '@/components/ScrollAnimatedSection';
import { ParallaxSection, FloatingElement, MagneticElement } from '@/components/ParallaxSection';
import { ScrollHint } from '@/components/ScrollIndicator';

const Home = () => {
  return (
    <div>
      {/* Hero Section with Parallax */}
      <ParallaxSection
        className="relative h-[100vh] flex items-center justify-center text-center text-white overflow-hidden"
        backgroundImage={heroImage}
        overlay
        overlayOpacity={0.5}
        speed={0.3}
      >
        <div className="container mx-auto px-6 z-20 relative">
          <ScrollAnimatedSection animation="zoom-in" delay={200}>
            <FloatingElement intensity={15} duration={4}>
              <MagneticElement strength={0.2}>
                <img 
                  src="/lovable-uploads/6421f3a4-a5d9-4446-8915-67ea626ec39c.png" 
                  alt="Asya Danışmanlık Logo" 
                  className="h-48 md:h-64 w-auto mx-auto mb-8 drop-shadow-2xl"
                />
              </MagneticElement>
            </FloatingElement>
          </ScrollAnimatedSection>

          <ScrollAnimatedSection animation="slide-up" delay={400}>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-gold bg-clip-text text-transparent">
              Güvenilir İş Ortağınız
            </h1>
          </ScrollAnimatedSection>

          <ScrollAnimatedSection animation="fade-in" delay={600}>
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-100 leading-relaxed">
              Yatırım teşviklerinden iş geliştirmeye, kapasite artırımından 
              stratejik planlamaya kadar her alanda profesyonel danışmanlık hizmetleri sunuyoruz.
            </p>
          </ScrollAnimatedSection>

          <ScrollAnimatedSection animation="slide-up" delay={800}>
            <MagneticElement strength={0.1}>
              <Button 
                asChild 
                size="lg" 
                className="bg-gold hover:bg-gold-dark text-primary font-semibold px-12 py-4 text-lg shadow-glow hover:shadow-premium transition-all duration-500 hover:scale-105"
              >
                <Link to="/services">
                  Hizmetlerimizi Keşfedin
                  <ArrowRight className="ml-3" size={24} />
                </Link>
              </Button>
            </MagneticElement>
          </ScrollAnimatedSection>
        </div>
        
        <ScrollHint />
      </ParallaxSection>

      {/* Services Preview Section */}
      <section className="py-32 bg-secondary relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <ScrollAnimatedSection animation="slide-down">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary to-gold bg-clip-text text-transparent">
                Hizmetlerimiz
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                İş dünyasının karmaşık yapısında size rehberlik edecek 
                üç temel hizmet alanımız ile tanışın.
              </p>
            </div>
          </ScrollAnimatedSection>

          <StaggeredContainer staggerDelay={200} animation="zoom-in" className="grid md:grid-cols-3 gap-8">
            <MagneticElement strength={0.1}>
              <Card className="group hover:shadow-premium transition-all duration-500 hover:-translate-y-4 border-0 bg-gradient-to-br from-white to-gold/5">
                <CardContent className="p-10 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <FloatingElement intensity={8} duration={3} delay={0}>
                    <div className="w-24 h-24 mx-auto mb-8 bg-gradient-gold rounded-full flex items-center justify-center group-hover:animate-glow-pulse shadow-gold">
                      <DollarSign className="w-12 h-12 text-primary" />
                    </div>
                  </FloatingElement>
                  <h3 className="text-2xl font-bold text-gold mb-6 group-hover:scale-105 transition-transform duration-300">
                    Yatırım Teşvik
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Devlet teşviklerinden maksimum faydayı sağlayacak stratejiler geliştiriyoruz. 
                    Yatırım projelerinizin her aşamasında yanınızdayız.
                  </p>
                </CardContent>
              </Card>
            </MagneticElement>

            <MagneticElement strength={0.1}>
              <Card className="group hover:shadow-premium transition-all duration-500 hover:-translate-y-4 border-0 bg-gradient-to-br from-white to-gold/5">
                <CardContent className="p-10 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <FloatingElement intensity={8} duration={3} delay={0.5}>
                    <div className="w-24 h-24 mx-auto mb-8 bg-gradient-gold rounded-full flex items-center justify-center group-hover:animate-glow-pulse shadow-gold">
                      <Building className="w-12 h-12 text-primary" />
                    </div>
                  </FloatingElement>
                  <h3 className="text-2xl font-bold text-gold mb-6 group-hover:scale-105 transition-transform duration-300">
                    İş Geliştirme
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    İşletmenizin büyüme potansiyelini keşfediyor, yeni pazarlara açılmanızı 
                    ve rekabet gücünüzü artırmanızı sağlıyoruz.
                  </p>
                </CardContent>
              </Card>
            </MagneticElement>

            <MagneticElement strength={0.1}>
              <Card className="group hover:shadow-premium transition-all duration-500 hover:-translate-y-4 border-0 bg-gradient-to-br from-white to-gold/5">
                <CardContent className="p-10 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <FloatingElement intensity={8} duration={3} delay={1}>
                    <div className="w-24 h-24 mx-auto mb-8 bg-gradient-gold rounded-full flex items-center justify-center group-hover:animate-glow-pulse shadow-gold">
                      <Zap className="w-12 h-12 text-primary" />
                    </div>
                  </FloatingElement>
                  <h3 className="text-2xl font-bold text-gold mb-6 group-hover:scale-105 transition-transform duration-300">
                    Kapasite Geliştirme
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    İnsan kaynakları ve operasyonel süreçlerinizi optimize ediyor, 
                    organizasyonunuzun kapasitesini artırıyoruz.
                  </p>
                </CardContent>
              </Card>
            </MagneticElement>
          </StaggeredContainer>

          <ScrollAnimatedSection animation="slide-up" delay={800}>
            <div className="text-center mt-16">
              <MagneticElement strength={0.1}>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-gold text-gold hover:bg-gold hover:text-primary text-lg px-8 py-4 hover:shadow-glow transition-all duration-300"
                >
                  <Link to="/services">
                    Tüm Hizmetleri Görüntüle
                    <ArrowRight className="ml-3" size={20} />
                  </Link>
                </Button>
              </MagneticElement>
            </div>
          </ScrollAnimatedSection>
        </div>
      </section>

      {/* Stats Section with Parallax */}
      <ParallaxSection 
        className="py-32 bg-gradient-dark text-white relative overflow-hidden" 
        speed={0.2}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-gold/10" />
        <div className="container mx-auto px-6 relative z-10">
          <ScrollAnimatedSection animation="fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gold">
              Rakamlarla Başarımız
            </h2>
          </ScrollAnimatedSection>
          
          <StaggeredContainer staggerDelay={150} animation="zoom-in" className="grid md:grid-cols-3 gap-12 text-center">
            <MagneticElement strength={0.15}>
              <div className="group">
                <FloatingElement intensity={12} duration={4}>
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-gold rounded-full flex items-center justify-center shadow-glow group-hover:animate-glow-pulse">
                    <TrendingUp size={40} className="text-primary" />
                  </div>
                </FloatingElement>
                <h3 className="text-6xl md:text-7xl font-bold text-gold mb-4 group-hover:scale-110 transition-transform duration-300">500+</h3>
                <p className="text-xl text-gray-200 font-medium">Başarılı Proje</p>
              </div>
            </MagneticElement>
            
            <MagneticElement strength={0.15}>
              <div className="group">
                <FloatingElement intensity={12} duration={4} delay={0.5}>
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-gold rounded-full flex items-center justify-center shadow-glow group-hover:animate-glow-pulse">
                    <Users size={40} className="text-primary" />
                  </div>
                </FloatingElement>
                <h3 className="text-6xl md:text-7xl font-bold text-gold mb-4 group-hover:scale-110 transition-transform duration-300">250+</h3>
                <p className="text-xl text-gray-200 font-medium">Mutlu Müşteri</p>
              </div>
            </MagneticElement>
            
            <MagneticElement strength={0.15}>
              <div className="group">
                <FloatingElement intensity={12} duration={4} delay={1}>
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-gold rounded-full flex items-center justify-center shadow-glow group-hover:animate-glow-pulse">
                    <Target size={40} className="text-primary" />
                  </div>
                </FloatingElement>
                <h3 className="text-6xl md:text-7xl font-bold text-gold mb-4 group-hover:scale-110 transition-transform duration-300">10+</h3>
                <p className="text-xl text-gray-200 font-medium">Yıllık Deneyim</p>
              </div>
            </MagneticElement>
          </StaggeredContainer>
        </div>
      </ParallaxSection>
    </div>
  );
};

export default Home;