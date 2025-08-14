import { useState, useEffect } from 'react';

const shitpostTexts = [
  "İletişim",
  "Ğ Moment 🇹🇷",
  "STONKS 📈",
  "Chad Türk",
  "Sigma Erkek",
  "Alpha Türk 🐺",
  "AUUUUU 🐺",
  "Ne Diyon Kardeşim",
  "Yuh Artık",
  "Eyvah Eyvah",
  "Vallahi Billahi",
  "Hadi Yaa",
  "Aşkım Benim 💕",
  "Efendim Efendim",
  "Vay Canına",
  "Allah Allah",
  "Maşallah",
  "İnşallah",
  "Elhamdülillah",
  "Subhanallah",
  "Bismillah",
  "Hayırlı İşler",
  "Kolay Gelsin",
  "Afiyet Olsun",
  "Geçmiş Olsun"
];

const shitpostDescriptions = [
  "Projeleriniz hakkında konuşmak istiyoruz",
  "Vallahi çok iyiyiz bu işte kardeşim",
  "Bak şimdi anlatayım sana",
  "Böyle bir profesyonellik görmedin sen",
  "Yeminle çok iyiyiz bu işlerde",
  "Allah allah ne kadar güzel",
  "Maşallah çok başarılıyız",
  "İnşallah beğenirsiniz",
  "Bismillah başlayalım",
  "Hayırlı uğurlu olsun",
  "Kolay gelsin size de",
  "Afiyet olsun canım",
  "Geçmiş olsun kardeşim",
  "Vay canına ne güzel",
  "Hadi ya cidden mi?",
  "Eyvah çok güzel olmuş",
  "Ne diyon sen ya 😂",
  "Yuh artık bu ne böyle"
];

const contactLabels = [
  "İletişim Bilgileri",
  "Bizi Nasıl Bulacaksınız",
  "Adres Tarif Ediyoruz",
  "Gel Buraya Kardeşim 📍",
  "Hadi Gel Buluşalım",
  "GPS Koordinatları Açık",
  "Yolu Tarif Edelim",
  "Gel Sohbet Edelim",
  "Kapımız Herkese Açık",
  "Bekleriz Sizi Burada"
];

const formLabels = [
  "Bize Ulaşın",
  "Mesaj Gönder Bize",
  "Sohbet Edelim Canım",
  "Ne Var Ne Yok Anlat ☕",
  "Derdini Söyle Bana",
  "Mesajını Yolla Gelsin",
  "Naber Nasılsın?",
  "Yaz Bakalım 📤",
  "Saygılar, Ne Var Ne Yok?",
  "Az Konuş Çok Yaz"
];

export const useGlitchText = (originalText: string, category: 'title' | 'description' | 'contact' | 'form' = 'title') => {
  const [currentText, setCurrentText] = useState(originalText);
  
  useEffect(() => {
    const interval = setInterval(() => {
      let textArray;
      switch (category) {
        case 'title':
          textArray = shitpostTexts;
          break;
        case 'description':
          textArray = shitpostDescriptions;
          break;
        case 'contact':
          textArray = contactLabels;
          break;
        case 'form':
          textArray = formLabels;
          break;
        default:
          textArray = shitpostTexts;
      }
      
      const randomText = textArray[Math.floor(Math.random() * textArray.length)];
      setCurrentText(randomText);
      
      // Kısa süre sonra orijinal metne geri dön
      setTimeout(() => {
        setCurrentText(originalText);
      }, 1500);
    }, 3000);

    return () => clearInterval(interval);
  }, [originalText, category]);

  return currentText;
};