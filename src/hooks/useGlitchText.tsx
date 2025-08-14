import { useState, useEffect } from 'react';

const shitpostTexts = [
  "İletişim",
  "BASS BOOSTED 🔊",
  "HODL 💎🙌",
  "Big Chungus",
  "Sus Among Us",
  "STONKS 📈",
  "Ğ Moment",
  "Sigma Male",
  "Chad Energy",
  "NO CAP FR FR",
  "BRUH 💀",
  "Based & Redpilled",
  "GIGACHAD MOVE",
  "SHEEEESH 🥶",
  "It's Giving Main Character",
  "Slay Queen 💅",
  "Periodt.",
  "That's So Sussy Baka",
  "YEET",
  "OK Boomer",
  "Touch Grass",
  "Ratio + L + You Fell Off"
];

const shitpostDescriptions = [
  "Projeleriniz hakkında konuşmak istiyoruz",
  "BRO WE'RE LITERALLY SO CRACKED AT THIS",
  "NO SHOT YOU'RE ACTUALLY READING THIS 💀",
  "THIS HITS DIFFERENT FR 🔥",
  "ABSOLUTELY UNHINGED BEHAVIOR",
  "I'M DECEASED 💀💀💀",
  "PERIODT NO PRINTER 📠",
  "IT'S GIVING PROFESSIONAL VIBES ✨",
  "BESTIE THIS IS SENDING ME 😭",
  "CRYING SCREAMING THROWING UP",
  "MAIN CHARACTER ENERGY ONLY 👑",
  "LIVING MY BEST LIFE RN",
  "SLAY ALL DAY EVERY DAY 💅",
  "STRAIGHT UP VIBING THO",
  "THAT'S ON PERIODT LUVSSS",
  "LITERALLY SHAKING AND CRYING RN",
  "BRO WHY IS THIS SO FUNNY 😂",
  "I CAN'T EVEN- 💀"
];

const contactLabels = [
  "İletişim Bilgileri",
  "CONTACT INFO (NOT CLICKBAIT)",
  "LITERALLY HOW TO FIND US",
  "WHERE WE AT THO 📍",
  "COME FIND US BESTIE",
  "GPS COORDINATES UNLOCKED",
  "YEET YOURSELF OVER HERE",
  "SLIDE INTO OUR DMS IRL",
  "TOUCH GRASS WITH US",
  "MEET ME IN THE PARKING LOT"
];

const formLabels = [
  "Bize Ulaşın",
  "SEND US MEMES",
  "DROP YOUR MIXTAPE HERE",
  "SPILL THE TEA SIS ☕",
  "SLIDE INTO OUR DMS",
  "YEET YOUR MESSAGE",
  "BESTIE WHAT'S THE VIBE?",
  "PERIODT SEND IT 📤",
  "RESPECTFULLY, WHAT'S GOOD?",
  "SAY LESS, TYPE MORE"
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