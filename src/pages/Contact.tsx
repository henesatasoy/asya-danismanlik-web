import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useCrazyAnimation, useGlitchAnimation, useMorphAnimation } from '@/hooks/useScrollAnimation';
import { useGlitchText } from '@/hooks/useGlitchText';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  // Professional & Elegant Animations
  const heroAnimation = useCrazyAnimation();
  const contactInfoAnimation = useGlitchAnimation();
  const formAnimation = useMorphAnimation();
  const mapAnimation = useCrazyAnimation(800);
  
  // Sophisticated card animations with staggered timing
  const addressCard = useMorphAnimation(100);
  const phoneCard = useGlitchAnimation(200);
  const emailCard = useCrazyAnimation(300);
  const hoursCard = useMorphAnimation(400);

  // Professional text variations
  const heroText = useGlitchText("İletişim", "title");
  const heroDesc = useGlitchText("Projeleriniz hakkında konuşmak ve size nasıl yardımcı olabileceğimizi öğrenmek için bizimle iletişime geçin.", "description");
  const contactInfoText = useGlitchText("İletişim Bilgileri", "contact");
  const formText = useGlitchText("Bize Ulaşın", "form");

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
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-muted/30">
      {/* Elegant Hero Section */}
      <section 
        ref={heroAnimation.elementRef}
        className={`relative py-24 px-4 text-center ${heroAnimation.className}`}
        style={heroAnimation.style}
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            {heroText}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {heroDesc}
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none"></div>
      </section>

      {/* Professional Contact Information Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <div ref={contactInfoAnimation.elementRef}>
              <h2 className={`text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent ${contactInfoAnimation.className}`}
                  style={contactInfoAnimation.style}>
                {contactInfoText}
              </h2>
              
              <div className="space-y-6">
                <Card 
                  ref={addressCard.elementRef}
                  className={`hover:shadow-lg transition-all duration-700 ${addressCard.className}`}
                  style={addressCard.style}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <MapPin className="text-gold" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Adres</h3>
                        <p className="text-muted-foreground">
                          İhsaniye Mahallesi, Çeşmeli Sok. No: 11/1<br />
                          Merkez, Bolu 14200
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card 
                  ref={phoneCard.elementRef}
                  className={`hover:shadow-lg transition-all duration-700 ${phoneCard.className}`}
                  style={phoneCard.style}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Phone className="text-gold" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Telefon</h3>
                        <p className="text-muted-foreground">
                          +90 507 863 30 30
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card 
                  ref={emailCard.elementRef}
                  className={`hover:shadow-lg transition-all duration-700 ${emailCard.className}`}
                  style={emailCard.style}
                >
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

                <Card 
                  ref={hoursCard.elementRef}
                  className={`hover:shadow-lg transition-all duration-700 ${hoursCard.className}`}
                  style={hoursCard.style}
                >
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

            {/* Professional Contact Form */}
            <div ref={formAnimation.elementRef}>
              <h2 className={`text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent ${formAnimation.className}`}
                  style={formAnimation.style}>
                {formText}
              </h2>
              
              <Card className={`hover:shadow-elegant transition-all duration-700 ${formAnimation.className}`}
                   style={{...formAnimation.style, animationDelay: '600ms'}}>
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

      {/* Professional Map Section */}
      <section 
        ref={mapAnimation.elementRef} 
        className="py-20 bg-gradient-to-t from-background to-muted/20"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent ${mapAnimation.className}`}
                style={mapAnimation.style}>
              Ofisimizi Ziyaret Edin
            </h2>
            <p className={`text-lg text-muted-foreground ${mapAnimation.className}`}
               style={{...mapAnimation.style, animationDelay: '1000ms'}}>
              Bolu merkez lokasyonumuzda sizleri ağırlamaktan mutluluk duyarız.
            </p>
          </div>
          
          <Card className={`overflow-hidden hover:shadow-elegant transition-all duration-700 ${mapAnimation.className}`}
               style={{...mapAnimation.style, animationDelay: '1200ms'}}>
            <CardContent className="p-0">
              <div className="w-full h-96 bg-muted flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="text-gold mx-auto mb-4" size={48} />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Harita Entegrasyonu
                  </h3>
                  <p className="text-muted-foreground">
                    İhsaniye Mahallesi, Çeşmeli Sok. No: 11/1<br />
                    Merkez, Bolu 14200
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