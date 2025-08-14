import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Target, Globe } from 'lucide-react';
import { ScrollAnimatedSection, StaggeredContainer } from '@/components/ScrollAnimatedSection';
import { ParallaxSection, FloatingElement, MagneticElement } from '@/components/ParallaxSection';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <ParallaxSection className="bg-gradient-dark text-white py-32 relative overflow-hidden" speed={0.2}>
        <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <ScrollAnimatedSection animation="zoom-in" delay={200}>
            <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-gold bg-clip-text text-transparent">
              Hakkımızda
            </h1>
          </ScrollAnimatedSection>
          <ScrollAnimatedSection animation="slide-up" delay={600}>
            <p className="text-2xl max-w-4xl mx-auto text-gray-200 leading-relaxed">
              10 yılı aşkın deneyimimizle, iş dünyasının dinamik yapısında 
              şirketlere güvenilir danışmanlık hizmetleri sunuyoruz.
            </p>
          </ScrollAnimatedSection>
        </div>
      </ParallaxSection>

      {/* Mission & Vision */}
      <section className="py-32 bg-secondary relative overflow-hidden">
        <div className="container mx-auto px-6">
          <StaggeredContainer staggerDelay={300} animation="slide-left" className="grid md:grid-cols-2 gap-16">
            <MagneticElement strength={0.1}>
              <Card className="group hover:shadow-premium transition-all duration-500 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-gold/5">
                <CardContent className="p-10">
                  <FloatingElement intensity={10} duration={4}>
                    <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mb-8 shadow-glow group-hover:animate-glow-pulse">
                      <Target size={40} className="text-primary" />
                    </div>
                  </FloatingElement>
                  <h2 className="text-4xl font-bold text-gold mb-6 group-hover:scale-105 transition-transform duration-300">Misyonumuz</h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    İş dünyasının karmaşık süreçlerinde müşterilerimize rehberlik ederek, 
                    onların hedeflerine ulaşmalarını sağlamak. Uzman kadromuz ve deneyimimiz 
                    ile en uygun çözümleri sunarak, şirketlerin sürdürülebilir büyümesine 
                    katkıda bulunmaktır.
                  </p>
                </CardContent>
              </Card>
            </MagneticElement>

            <MagneticElement strength={0.1}>
              <Card className="group hover:shadow-premium transition-all duration-500 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-gold/5">
                <CardContent className="p-10">
                  <FloatingElement intensity={10} duration={4} delay={0.5}>
                    <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mb-8 shadow-glow group-hover:animate-glow-pulse">
                      <Globe size={40} className="text-primary" />
                    </div>
                  </FloatingElement>
                  <h2 className="text-4xl font-bold text-gold mb-6 group-hover:scale-105 transition-transform duration-300">Vizyonumuz</h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Türkiye'nin önde gelen danışmanlık şirketlerinden biri olmak ve 
                    uluslararası pazarlarda da tanınan bir marka haline gelmek. 
                    İnovatif yaklaşımlarımız ve müşteri odaklı hizmet anlayışımızla 
                    sektöre yön veren bir organizasyon olmaktır.
                  </p>
                </CardContent>
              </Card>
            </MagneticElement>
          </StaggeredContainer>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Değerlerimiz
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              İş yapış şeklimizi ve müşteri ilişkilerimizi yönlendiren temel değerlerimiz
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                <Award size={40} className="text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Kalite</h3>
              <p className="text-muted-foreground">
                Her projede mükemmellik standartlarını koruyoruz.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                <Users size={40} className="text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">İşbirliği</h3>
              <p className="text-muted-foreground">
                Müşterilerimizle uzun vadeli ortaklıklar kuruyoruz.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                <Target size={40} className="text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Odaklılık</h3>
              <p className="text-muted-foreground">
                Belirlenen hedeflere ulaşmak için kararlılıkla çalışırız.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                <Globe size={40} className="text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">İnovasyon</h3>
              <p className="text-muted-foreground">
                Sürekli gelişim ve yenilikçi çözümler sunarız.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Ekibimiz
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Alanında uzman, deneyimli ve müşteri odaklı profesyonellerden oluşan güçlü kadromuz
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-gold rounded-full flex items-center justify-center">
                  <Users size={64} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gold mb-4">
                  Deneyimli Uzman Kadromuz
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Ekibimiz, farklı sektörlerden gelen 10+ yıl deneyimli uzmanlardan oluşmaktadır. 
                  İktisat, işletme, mühendislik ve hukuk alanlarında akademik geçmişe sahip 
                  profesyonellerimiz, müşterilerimizin her türlü ihtiyacına cevap verebilecek 
                  bilgi ve deneyime sahiptir.
                </p>
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div>
                    <h4 className="font-semibold text-gold mb-2">Yatırım Uzmanları</h4>
                    <p className="text-muted-foreground">3 uzman danışman</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gold mb-2">İş Geliştirme</h4>
                    <p className="text-muted-foreground">4 uzman danışman</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gold mb-2">Kapasite Uzmanları</h4>
                    <p className="text-muted-foreground">2 uzman danışman</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;