import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Factory, Truck, Heart, Zap, ShoppingCart } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Teknoloji Şirketi Yatırım Teşviki",
      category: "Yatırım Teşvik",
      icon: Building,
      description: "Yazılım geliştirme şirketinin Ar-Ge merkezi kurulum projesi için 5 milyon TL yatırım teşviki almalarını sağladık.",
      results: ["5M TL teşvik", "18 ay süre", "%40 maliyet tasarrufu"],
      color: "text-blue-600"
    },
    {
      title: "Üretim Tesisi Kapasitesi Artırımı",
      category: "Kapasite Geliştirme",
      icon: Factory,
      description: "Gıda üretim tesisinin kapasitesini %200 artıran süreç optimizasyonu ve insan kaynakları geliştirme projesi.",
      results: ["200% kapasite artışı", "50 yeni istihdam", "Verimlilik %35 arttı"],
      color: "text-green-600"
    },
    {
      title: "Lojistik Şirketi Dijital Dönüşümü",
      category: "İş Geliştirme",
      icon: Truck,
      description: "Geleneksel lojistik şirketinin dijital platformlara geçişi ve yeni iş modellerinin geliştirilmesi.",
      results: ["3 yeni dijital platform", "%150 müşteri artışı", "Operasyonel maliyet %25 azaldı"],
      color: "text-purple-600"
    },
    {
      title: "Sağlık Kuruluşu Teşvik Projesi",
      category: "Yatırım Teşvik",
      icon: Heart,
      description: "Özel hastane yatırımı için bölgesel yatırım teşvik paketi başvurusu ve onay sürecinin yönetimi.",
      results: ["8M TL teşvik", "100 istihdam", "Bölgesel kalkınma katkısı"],
      color: "text-red-600"
    },
    {
      title: "Enerji Şirketi Büyüme Stratejisi",
      category: "İş Geliştirme",
      icon: Zap,
      description: "Yenilenebilir enerji şirketinin yeni pazarlara giriş stratejisi ve iş ortaklıkları geliştirme projesi.",
      results: ["5 yeni pazar", "12 stratejik ortaklık", "Ciro %300 artış"],
      color: "text-yellow-600"
    },
    {
      title: "E-ticaret Platformu İnsan Kaynakları",
      category: "Kapasite Geliştirme",
      icon: ShoppingCart,
      description: "Hızla büyüyen e-ticaret şirketinin organizasyonel yapısının güçlendirilmesi ve yetenek geliştirme programları.",
      results: ["200 personel eğitimi", "Yeni organizasyon yapısı", "%40 verimlilik artışı"],
      color: "text-indigo-600"
    }
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-dark text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            Projelerimiz
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200 animate-slide-up">
            Başarıyla tamamladığımız projeler ve müşterilerimizin elde ettiği 
            somut sonuçlar ile deneyimimizi paylaşıyoruz.
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-gold mb-2">500+</h3>
              <p className="text-muted-foreground">Tamamlanan Proje</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-gold mb-2">₺2.5B</h3>
              <p className="text-muted-foreground">Toplam Yatırım Değeri</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-gold mb-2">15,000+</h3>
              <p className="text-muted-foreground">Yaratılan İstihdam</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-gold mb-2">250+</h3>
              <p className="text-muted-foreground">Memnun Müşteri</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Başarı Hikayelerimiz
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Farklı sektörlerden seçtiğimiz başarılı proje örnekleri
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mr-4`}>
                      <project.icon size={24} className="text-gold" />
                    </div>
                    <Badge variant="secondary" className="bg-gold/10 text-gold">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-gold transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gold text-sm">Sonuçlar:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-gold mr-2"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Hizmet Verdiğimiz Sektörler
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Geniş sektörel deneyimimiz ile her alanda profesyonel çözümler sunuyoruz
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              'Teknoloji & Yazılım',
              'İmalat & Üretim',
              'Sağlık & Tıp',
              'Enerji & Elektrik',
              'Lojistik & Taşımacılık',
              'Gıda & İçecek',
              'Turizm & Otelcilik',
              'Eğitim & Danışmanlık',
              'İnşaat & Gayrimenkul',
              'Finans & Bankacılık',
              'Tarım & Hayvancılık',
              'Otomotiv & Yedek Parça'
            ].map((sector, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-4 text-center">
                  <p className="font-medium text-foreground group-hover:text-gold transition-colors duration-300">
                    {sector}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;