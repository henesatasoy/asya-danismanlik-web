import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form gönderme simülasyonu
    toast({
      title: "Mesaj Gönderildi!",
      description: "En kısa sürede size dönüş yapacağız.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-dark text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            İletişim
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200 animate-slide-up">
            Projeleriniz hakkında konuşmak ve size nasıl yardımcı olabileceğimizi 
            öğrenmek için bizimle iletişime geçin.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* İletişim Bilgileri */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">
                İletişim Bilgileri
              </h2>
              
              <div className="space-y-6">
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <MapPin className="text-gold" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Adres</h3>
                        <p className="text-muted-foreground">
                          Atatürk Mahallesi, İş Merkezi Sok. No:12<br />
                          Kadıköy, İstanbul 34716
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Phone className="text-gold" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Telefon</h3>
                        <p className="text-muted-foreground">
                          +90 (216) 555 01 23<br />
                          +90 (216) 555 01 24
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Mail className="text-gold" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">E-posta</h3>
                        <p className="text-muted-foreground">
                          info@asyadanismanlik.com<br />
                          destek@asyadanismanlik.com
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Clock className="text-gold" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Çalışma Saatleri</h3>
                        <p className="text-muted-foreground">
                          Pazartesi - Cuma: 09:00 - 18:00<br />
                          Cumartesi: 09:00 - 14:00<br />
                          Pazar: Kapalı
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* İletişim Formu */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Bize Ulaşın
              </h2>
              
              <Card className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-foreground">
                          Ad Soyad *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                          placeholder="Adınız ve soyadınız"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-foreground">
                          Telefon
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="mt-1"
                          placeholder="Telefon numaranız"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-foreground">
                        E-posta *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        placeholder="E-posta adresiniz"
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject" className="text-foreground">
                        Konu *
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        placeholder="Mesajınızın konusu"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-foreground">
                        Mesaj *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        rows={6}
                        placeholder="Mesajınızı buraya yazın..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gold hover:bg-gold-dark text-primary font-semibold shadow-gold"
                    >
                      <Send className="mr-2" size={20} />
                      Mesaj Gönder
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Ofisimizi Ziyaret Edin
            </h2>
            <p className="text-lg text-muted-foreground">
              Kadıköy merkez lokasyonumuzda sizleri ağırlamaktan mutluluk duyarız.
            </p>
          </div>
          
          <Card className="overflow-hidden hover:shadow-elegant transition-all duration-300">
            <CardContent className="p-0">
              <div className="w-full h-96 bg-muted flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="text-gold mx-auto mb-4" size={48} />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Harita Entegrasyonu
                  </h3>
                  <p className="text-muted-foreground">
                    Atatürk Mahallesi, İş Merkezi Sok. No:12<br />
                    Kadıköy, İstanbul 34716
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;