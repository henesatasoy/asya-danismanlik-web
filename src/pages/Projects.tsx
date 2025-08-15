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
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-light mb-8 animate-fade-in tracking-wide">
            <span className="text-gold">Projelerimiz</span>
          </h1>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-8"></div>
          <p className="text-xl max-w-2xl mx-auto text-white/80 animate-slide-up font-light leading-relaxed">
            Başarıyla tamamladığımız projeler ve müşterilerimizin elde ettiği 
            somut sonuçlar ile deneyimimizi paylaşıyoruz.
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-slide-up">
              <h3 className="text-4xl font-light text-gold mb-3 tracking-wide">500<span className="text-2xl">+</span></h3>
              <p className="text-muted-foreground font-light">Tamamlanan Proje</p>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-4xl font-light text-gold mb-3 tracking-wide">₺2.5<span className="text-2xl">B</span></h3>
              <p className="text-muted-foreground font-light">Toplam Yatırım Değeri</p>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-4xl font-light text-gold mb-3 tracking-wide">15,000<span className="text-2xl">+</span></h3>
              <p className="text-muted-foreground font-light">Yaratılan İstihdam</p>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-4xl font-light text-gold mb-3 tracking-wide">250<span className="text-2xl">+</span></h3>
              <p className="text-muted-foreground font-light">Memnun Müşteri</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-light text-gold mb-6 tracking-wide">
              Başarı Hikayelerimiz
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto font-light leading-relaxed">
              Farklı sektörlerden seçtiğimiz başarılı proje örnekleri
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
             {projects.map((project, index) => (
               <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                 <Card className="group hover:shadow-glow transition-all duration-700 hover:-translate-y-4 hover:scale-105 border-0 bg-white/90 backdrop-blur-sm relative overflow-hidden h-full">
                   <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-gold-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                   <CardContent className="p-6">
                     <div className="flex items-center mb-4">
                       <div className={`w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mr-4 group-hover:bg-gold/30 group-hover:shadow-glow transition-all duration-300`}>
                         <project.icon size={24} className="text-gold group-hover:scale-110 transition-transform duration-300" />
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
               </div>
              ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6 tracking-wide">
              <span className="font-semibold text-gold">Hizmet Verdiğimiz</span> Sektörler
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto font-light leading-relaxed">
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