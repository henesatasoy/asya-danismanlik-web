import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, TrendingUp, Users, Target, DollarSign, Building, Zap, Sparkles, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-bg.jpg';
import FloatingElements from '@/components/FloatingElements';
import ParallaxSection from '@/components/ParallaxSection';
import { useScrollReveal, useStaggeredReveal } from '@/hooks/useScrollReveal';

const Home = () => {
  const heroReveal = useScrollReveal({ threshold: 0.2 });
  const statsReveal = useScrollReveal({ threshold: 0.3, delay: 200 });
  const { elementRef: servicesRef, visibleItems } = useStaggeredReveal(3, 150);

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Advanced Parallax */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background with Parallax */}
        <div 
          className="absolute inset-0 scale-110"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.4)), url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        />
        
        {/* Floating Elements */}
        <FloatingElements />
        
        {/* Elegant Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background/30" />
        
        {/* Content */}
        <div 
          ref={heroReveal.elementRef}
          className={`relative z-10 container mx-auto px-6 text-center transition-all duration-1000 ${
            heroReveal.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
          <ParallaxSection speed={0.3}>
            <div className="mb-12">
              <img 
                src="/lovable-uploads/6421f3a4-a5d9-4446-8915-67ea626ec39c.png" 
                alt="Asya Danışmanlık Logo" 
                className="h-56 md:h-64 w-auto mx-auto mb-8 animate-glow-pulse"
              />
            </div>
            
            <div className="space-y-8">
              <h1 className="text-5xl md:text-7xl font-bold text-white text-shadow-gold">
                <span className="block text-gold text-4xl md:text-5xl mb-4 animate-slide-in-left">
                  Güvenilir İş Ortağınız
                </span>
                <span className="animate-slide-in-right">
                  Premium Danışmanlık
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed animate-slide-up-elegant">
                Yatırım teşviklerinden iş geliştirmeye, kapasite artırımından 
                stratejik planlamaya kadar her alanda <span className="text-gold font-semibold">profesyonel danışmanlık</span> hizmetleri sunuyoruz.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
                <Button 
                  asChild 
                  size="lg" 
                  className="group bg-gradient-to-r from-gold to-gold-light hover:from-gold-dark hover:to-gold text-primary font-bold px-10 py-4 text-lg shadow-gold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Link to="/services">
                    <Sparkles className="mr-3" size={24} />
                    Hizmetlerimizi Keşfedin
                    <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={24} />
                  </Link>
                </Button>
                
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-elegant px-10 py-4 text-lg"
                >
                  <Link to="/about">
                    <Star className="mr-3" size={20} />
                    Hakkımızda
                  </Link>
                </Button>
              </div>
            </div>
          </ParallaxSection>
        </div>
      </section>

      {/* Services Section with Staggered Animation */}
      <section className="py-32 bg-gradient-to-br from-background via-secondary/50 to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gold-light rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <ParallaxSection speed={0.2}>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-shadow-elegant">
                <span className="text-gold">Premium</span> Hizmetlerimiz
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                İş dünyasının karmaşık yapısında size rehberlik edecek 
                <span className="text-gold font-semibold"> üç temel hizmet alanımız</span> ile tanışın.
              </p>
            </div>
          </ParallaxSection>

          <div ref={servicesRef} className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: DollarSign,
                title: "Yatırım Teşvik",
                description: "Devlet teşviklerinden maksimum faydayı sağlayacak stratejiler geliştiriyoruz. Yatırım projelerinizin her aşamasında yanınızdayız.",
                gradient: "from-emerald-500/20 to-gold/20"
              },
              {
                icon: Building,
                title: "İş Geliştirme", 
                description: "İşletmenizin büyüme potansiyelini keşfediyor, yeni pazarlara açılmanızı ve rekabet gücünüzü artırmanızı sağlıyoruz.",
                gradient: "from-blue-500/20 to-gold/20"
              },
              {
                icon: Zap,
                title: "Kapasite Geliştirme",
                description: "İnsan kaynakları ve operasyonel süreçlerinizi optimize ediyor, organizasyonunuzun kapasitesini artırıyoruz.",
                gradient: "from-purple-500/20 to-gold/20"
              }
            ].map((service, index) => (
              <Card 
                key={index}
                className={`group h-full backdrop-blur-elegant border-0 bg-gradient-to-br ${service.gradient} hover:shadow-2xl transform transition-all duration-700 hover:-translate-y-4 hover:rotate-1 ${
                  visibleItems[index] 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-16 scale-95'
                }`}
                style={{ 
                  transitionDelay: `${index * 150}ms`,
                  backgroundBlendMode: 'overlay'
                }}
              >
                <CardContent className="p-10 text-center h-full flex flex-col justify-between">
                  <div>
                    <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-gold to-gold-light rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                      <service.icon className="w-12 h-12 text-primary" />
                    </div>
                    <h3 className="text-3xl font-bold text-gold mb-6 group-hover:text-shadow-gold transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {service.description}
                    </p>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="mt-8 border-gold/50 text-gold hover:bg-gold hover:text-primary group-hover:scale-105 transition-all duration-300"
                  >
                    Detayları Gör
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <ParallaxSection speed={0.1}>
            <div className="text-center mt-16">
              <Button 
                asChild 
                size="lg"
                className="bg-gradient-to-r from-gold to-gold-light hover:from-gold-dark hover:to-gold text-primary font-bold px-12 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Link to="/services">
                  <Building className="mr-3" size={24} />
                  Tüm Hizmetleri Keşfet
                  <ArrowRight className="ml-3" size={24} />
                </Link>
              </Button>
            </div>
          </ParallaxSection>
        </div>
      </section>

      {/* Stats Section with Dynamic Counters */}
      <section className="py-32 bg-gradient-to-r from-foreground via-gray-900 to-foreground text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div 
            ref={statsReveal.elementRef}
            className={`grid md:grid-cols-3 gap-16 text-center transition-all duration-1000 ${
              statsReveal.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`}
          >
            {[
              { icon: TrendingUp, number: "500+", label: "Başarılı Proje", delay: "0s" },
              { icon: Users, number: "250+", label: "Mutlu Müşteri", delay: "0.2s" },
              { icon: Target, number: "10+", label: "Yıllık Deneyim", delay: "0.4s" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="group"
                style={{ animationDelay: stat.delay }}
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-gold to-gold-light rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-xl">
                  <stat.icon size={40} className="text-primary" />
                </div>
                <h3 className="text-6xl font-bold text-gold mb-4 text-shadow-gold group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </h3>
                <p className="text-xl text-gray-300 group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;