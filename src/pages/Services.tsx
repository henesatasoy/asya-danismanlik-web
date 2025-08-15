import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, DollarSign, Building, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-light mb-8 animate-fade-in tracking-wide">
            <span className="text-gold">Hizmetlerimiz</span>
          </h1>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-8"></div>
          <p className="text-xl max-w-2xl mx-auto text-white/80 animate-slide-up font-light leading-relaxed">
            İş dünyasının her alanında profesyonel danışmanlık hizmetleri ile 
            şirketinizin başarısına katkıda bulunuyoruz.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-6 space-y-24 relative z-10">
          
          {/* Yatırım Teşvik */}
          <div className="grid md:grid-cols-2 gap-16 items-center animate-slide-up">
            <div className="order-2 md:order-1">
              <div className="flex items-center mb-8">
                <div className="w-20 h-20 mr-6 bg-gradient-to-br from-gold/10 to-gold/5 rounded-2xl flex items-center justify-center hover:shadow-glow transition-all duration-500">
                  <DollarSign className="w-10 h-10 text-gold" />
                </div>
                <h2 className="text-3xl md:text-4xl font-light text-gold tracking-wide">Yatırım Teşvik</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-light">
                Devlet teşviklerinden maksimum fayda sağlayacak stratejiler geliştiriyor, 
                yatırım projelerinizin her aşamasında profesyonel destek sunuyoruz.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start">
                  <CheckCircle className="text-gold mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>Yatırım teşvik başvuru süreçlerinin yönetimi</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-gold mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>Uygun teşvik paketlerinin analizi ve seçimi</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-gold mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>Proje fizibilite çalışmaları</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-gold mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>Teşvik sürecinde takip ve koordinasyon</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <Card className="hover:shadow-glow transition-all duration-500 hover:-translate-y-3 hover:scale-105 border-0 bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="bg-gold/10 rounded-lg p-6 text-center hover:bg-gold/20 transition-all duration-300">
                    <h3 className="text-2xl font-light text-gold mb-4">
                      500+ Başarılı Teşvik Projesi
                    </h3>
                    <p className="text-muted-foreground">
                      10 yıllık deneyimimizle yüzlerce şirkete teşvik süreçlerinde 
                      rehberlik ettik ve milyonlarca liralık tasarruf sağladık.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* İş Geliştirme */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-8">
                  <div className="bg-gold/10 rounded-lg p-6 text-center">
                    <h3 className="text-2xl font-light text-gold mb-4">
                      %250 Ortalama Büyüme
                    </h3>
                    <p className="text-muted-foreground">
                      Danışmanlık hizmetimizden yararlanan şirketler ortalama 
                      %250 büyüme performansı sergilediler.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 mr-4 bg-gold/10 rounded-full flex items-center justify-center">
                  <Building className="w-8 h-8 text-gold" />
                </div>
                <h2 className="text-4xl font-light text-gold">İş Geliştirme</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                İşletmenizin büyüme potansiyelini keşfediyor, yeni pazarlara açılmanızı 
                ve rekabet gücünüzü artırmanızı sağlıyoruz.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="text-gold mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>Pazar analizi ve rekabet stratejileri</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-gold mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>İş modeli optimizasyonu</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-gold mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>Satış ve pazarlama stratejileri</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-gold mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>Operasyonel verimlilik artırımı</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Kapasite Geliştirme */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 mr-4 bg-gold/10 rounded-full flex items-center justify-center">
                  <Zap className="w-8 h-8 text-gold" />
                </div>
                <h2 className="text-4xl font-light text-gold">Kapasite Geliştirme</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                İnsan kaynakları ve operasyonel süreçlerinizi optimize ediyor, 
                organizasyonunuzun kapasitesini artırıyoruz.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="text-gold mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>İnsan kaynakları danışmanlığı</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-gold mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>Kurumsal eğitim programları</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-gold mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>Süreç iyileştirme çalışmaları</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-gold mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>Organizasyonel dönüşüm desteği</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <Card className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-8">
                  <div className="bg-gold/10 rounded-lg p-6 text-center">
                    <h3 className="text-2xl font-light text-gold mb-4">
                      1000+ Eğitim Saati
                    </h3>
                    <p className="text-muted-foreground">
                      Yıllık olarak 1000+ saatlik eğitim programı düzenleyerek 
                      şirketlerin insan kaynaklarını güçlendiriyoruz.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-light mb-8 tracking-wide text-gold">
            Projeleriniz İçin Hemen Başlayın
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-8"></div>
          <p className="text-xl mb-12 text-white/70 max-w-xl mx-auto font-light leading-relaxed">
            Uzman ekibimizle ücretsiz ön görüşme yapmak ve size özel 
            çözümlerimizi keşfetmek için iletişime geçin.
          </p>
          <Button 
            asChild 
            variant="elegant"
            size="lg" 
            className="px-12 py-4 text-lg font-light tracking-wide rounded-full group"
          >
            <Link to="/contact">
              Ücretsiz Ön Görüşme
              <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer Separator */}
      <div className="h-8 bg-gradient-to-b from-gray-900 to-background"></div>
    </div>
  );
};

export default Services;