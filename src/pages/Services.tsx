import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, DollarSign, Building, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-dark text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            Hizmetlerimiz
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200 animate-slide-up">
            İş dünyasının her alanında profesyonel danışmanlık hizmetleri ile 
            şirketinizin başarısına katkıda bulunuyoruz.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="container mx-auto px-6 space-y-20">
          
          {/* Yatırım Teşvik */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 mr-4 bg-gold/10 rounded-full flex items-center justify-center">
                  <DollarSign className="w-8 h-8 text-gold" />
                </div>
                <h2 className="text-4xl font-bold text-gold">Yatırım Teşvik</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Devlet teşviklerinden maksimum fayda sağlayacak stratejiler geliştiriyor, 
                yatırım projelerinizin her aşamasında profesyonel destek sunuyoruz.
              </p>
              <ul className="space-y-3 mb-8">
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
              <Card className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-8">
                  <div className="bg-gold/10 rounded-lg p-6 text-center">
                    <h3 className="text-2xl font-bold text-gold mb-4">
                      500+ Başarılı Teşvik Projesi
                    </h3>
                    <p className="text-muted-foreground">
                      15 yıllık deneyimimizle yüzlerce şirkete teşvik süreçlerinde 
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
                    <h3 className="text-2xl font-bold text-gold mb-4">
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
                <h2 className="text-4xl font-bold text-gold">İş Geliştirme</h2>
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
                <h2 className="text-4xl font-bold text-gold">Kapasite Geliştirme</h2>
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
                    <h3 className="text-2xl font-bold text-gold mb-4">
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
      <section className="py-20 bg-gradient-dark text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Projeleriniz İçin Hemen Başlayın
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Uzman ekibimizle ücretsiz ön görüşme yapmak ve size özel 
            çözümlerimizi keşfetmek için iletişime geçin.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-gold hover:bg-gold-dark text-primary font-semibold px-8 py-3 shadow-gold"
          >
            <Link to="/contact">
              Ücretsiz Danışmanlık
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;