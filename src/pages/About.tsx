import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Target, Globe } from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-light mb-8 animate-fade-in tracking-wide">
            <span className="text-gold">Hakkımızda</span>
          </h1>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-8"></div>
          <p className="text-xl max-w-2xl mx-auto text-white/80 animate-slide-up font-light leading-relaxed">
            10 yılı aşkın deneyimimizle, iş dünyasının dinamik yapısında 
            şirketlere güvenilir danışmanlık hizmetleri sunuyoruz.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16">
            <Card className="hover:shadow-glow transition-all duration-700 hover:-translate-y-4 hover:scale-105 border-0 bg-white/90 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-gold-light"></div>
              <CardContent className="p-10">
                <div className="w-20 h-20 bg-gradient-to-br from-gold to-gold-light rounded-2xl flex items-center justify-center mb-8 shadow-glow">
                  <Target size={36} className="text-primary" />
                </div>
                <h2 className="text-3xl font-light text-gold mb-6 tracking-wide">Misyonumuz</h2>
                <p className="text-muted-foreground leading-relaxed font-light">
                  İş dünyasının karmaşık süreçlerinde müşterilerimize rehberlik ederek, 
                  onların hedeflerine ulaşmalarını sağlamak. Uzman kadromuz ve deneyimimiz 
                  ile en uygun çözümleri sunarak, şirketlerin sürdürülebilir büyümesine 
                  katkıda bulunmaktır.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-glow transition-all duration-700 hover:-translate-y-4 hover:scale-105 border-0 bg-white/90 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-gold-light"></div>
              <CardContent className="p-10">
                <div className="w-20 h-20 bg-gradient-to-br from-gold to-gold-light rounded-2xl flex items-center justify-center mb-8 shadow-glow">
                  <Globe size={36} className="text-primary" />
                </div>
                <h2 className="text-3xl font-light text-gold mb-6 tracking-wide">Vizyonumuz</h2>
                <p className="text-muted-foreground leading-relaxed font-light">
                  Türkiye'nin önde gelen danışmanlık şirketlerinden biri olmak ve 
                  uluslararası pazarlarda da tanınan bir marka haline gelmek. 
                  İnovatif yaklaşımlarımız ve müşteri odaklı hizmet anlayışımızla 
                  sektöre yön veren bir organizasyon olmaktır.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6 tracking-wide">
              <span className="font-semibold text-gold">Değer</span>lerimiz
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto font-light leading-relaxed">
              İş yapış şeklimizi ve müşteri ilişkilerimizi yönlendiren temel değerlerimiz
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-gold/10 to-gold/5 rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-gold/30 group-hover:to-gold/15 group-hover:shadow-glow transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                <Award size={40} className="text-gold group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-light text-foreground mb-3 group-hover:text-gold transition-colors duration-300">Kalite</h3>
              <p className="text-muted-foreground font-light text-sm leading-relaxed">
                Her projede mükemmellik standartlarını koruyoruz.
              </p>
            </div>

            <div className="text-center group animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-gold/10 to-gold/5 rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-gold/30 group-hover:to-gold/15 group-hover:shadow-glow transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                <Users size={40} className="text-gold group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-light text-foreground mb-3 group-hover:text-gold transition-colors duration-300">İşbirliği</h3>
              <p className="text-muted-foreground font-light text-sm leading-relaxed">
                Müşterilerimizle uzun vadeli ortaklıklar kuruyoruz.
              </p>
            </div>

            <div className="text-center group animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-gold/10 to-gold/5 rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-gold/30 group-hover:to-gold/15 group-hover:shadow-glow transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                <Target size={40} className="text-gold group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-light text-foreground mb-3 group-hover:text-gold transition-colors duration-300">Odaklılık</h3>
              <p className="text-muted-foreground font-light text-sm leading-relaxed">
                Belirlenen hedeflere ulaşmak için kararlılıkla çalışırız.
              </p>
            </div>

            <div className="text-center group animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-gold/10 to-gold/5 rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-gold/30 group-hover:to-gold/15 group-hover:shadow-glow transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                <Globe size={40} className="text-gold group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-light text-foreground mb-3 group-hover:text-gold transition-colors duration-300">İnovasyon</h3>
              <p className="text-muted-foreground font-light text-sm leading-relaxed">
                Sürekli gelişim ve yenilikçi çözümler sunarız.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative border-b-4 border-gold/20">
        {/* Subtle gradient overlay at the top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
        
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6 tracking-wide">
              <span className="font-semibold text-gold">Ekib</span>imiz
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto font-light leading-relaxed">
              Alanında uzman, deneyimli ve müşteri odaklı profesyonellerden oluşan güçlü kadromuz
            </p>
          </div>

          <div className="max-w-4xl mx-auto animate-scale-in">
            <Card className="hover:shadow-glow transition-all duration-700 hover:-translate-y-4 hover:scale-105 border-0 bg-white/90 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-gold-light"></div>
              <CardContent className="p-12 text-center">
                <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-gold to-gold-light rounded-3xl flex items-center justify-center shadow-glow hover:shadow-xl hover:scale-110 transition-all duration-500">
                  <Users size={64} className="text-primary" />
                </div>
                <h3 className="text-2xl font-light text-gold mb-6 tracking-wide">
                  Deneyimli Uzman Kadromuz
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8 font-light">
                  Ekibimiz, farklı sektörlerden gelen 10+ yıl deneyimli uzmanlardan oluşmaktadır. 
                  İktisat, işletme, mühendislik ve hukuk alanlarında akademik geçmişe sahip 
                  profesyonellerimiz, müşterilerimizin her türlü ihtiyacına cevap verebilecek 
                  bilgi ve deneyime sahiptir.
                </p>
                <div className="grid md:grid-cols-3 gap-8 text-sm">
                  <div className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
                    <h4 className="font-light text-gold mb-3 text-base">Yatırım Uzmanları</h4>
                    <p className="text-muted-foreground font-light">3 uzman danışman</p>
                  </div>
                  <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
                    <h4 className="font-light text-gold mb-3 text-base">İş Geliştirme</h4>
                    <p className="text-muted-foreground font-light">4 uzman danışman</p>
                  </div>
                  <div className="animate-slide-up" style={{ animationDelay: '0.7s' }}>
                    <h4 className="font-light text-gold mb-3 text-base">Kapasite Uzmanları</h4>
                    <p className="text-muted-foreground font-light">2 uzman danışman</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Elegant bottom separator with fade effect */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="h-12 bg-gradient-to-b from-gray-600 to-transparent"></div>
          <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"></div>
        </div>
      </section>
    </div>
  );
};

export default About;