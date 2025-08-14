import { useState, useEffect } from 'react';

const shitpostTexts = [
  "İletişim",
  "HOLY SHIT 💀",
  "BRUH MOMENTO",
  "WHAT THE F*CK",
  "NO BITCHES? 🥺",
  "TOUCH GRASS PLZ",
  "SIGMA GRINDSET 💪",
  "BASED AF FR FR",
  "GET REKT SCRUB",
  "COPE + SEETHE",
  "SKILL ISSUE TBH",
  "BIG CHUNGUS ENERGY",
  "AMOGUS SUS 📮",
  "DEEZ NUTS GOTTEM",
  "LIGMA BALLS",
  "JOE MAMA 💀💀",
  "RATIO + L + BOZO",
  "IMAGINE BEING YOU",
  "CRYING AND SHAKING",
  "LITERALLY UNPLAYABLE",
  "IT'S GIVING CRINGE",
  "BESTIE WHAT 😭",
  "I'M DECEASED 💀",
  "NOT THE... 💀💀💀",
  "PERIODT QUEEN 💅"
];

const shitpostDescriptions = [
  "Projeleriniz hakkında konuşmak istiyoruz",
  "BRO WE'RE SO F*CKING CRACKED",
  "THIS SHIT HITS DIFFERENT 💀",
  "ABSOLUTELY UNHINGED BEHAVIOR",
  "I'M LITERALLY CRYING RN 😭",
  "BESTIE THIS IS SENDING ME",
  "NOT ME GETTING EMOTIONAL 💀",
  "THE AUDACITY OF THIS B*TCH",
  "SIR THIS IS A WENDY'S",
  "MANS REALLY SAID THAT 💀",
  "PERIODT NO PRINTER 📠",
  "IT'S GIVING MAIN CHARACTER",
  "STRAIGHT UP NOT HAVING A GOOD TIME",
  "THAT'S SO F*CKED UP FR",
  "LIVING MY WORST LIFE RN",
  "ABSOLUTELY SENDING ME 💀💀",
  "BRO WHAT IS THIS BEHAVIOUR",
  "LITERALLY SHAKING AND CRYING",
  "THIS IS SOME CURSED SH*T"
];

const contactLabels = [
  "İletişim Bilgileri",
  "CONTACT INFO (NOT CLICKBAIT)",
  "LITERALLY HOW TO FIND US",
  "WHERE WE AT THO 📍",
  "COME CATCH THESE HANDS",
  "GPS COORDS UNLOCKED",
  "YEET YOURSELF OVER HERE",
  "SLIDE INTO OUR DMS IRL",
  "TOUCH GRASS WITH US",
  "MEET ME IN THE PARKING LOT",
  "LOCATION REVEAL 😳"
];

const formLabels = [
  "Bize Ulaşın",
  "SEND US YOUR SHIT",
  "DROP YOUR F*CKING MIXTAPE",
  "SPILL THE TEA B*TCH ☕",
  "SLIDE INTO OUR DMS FR",
  "YEET YOUR MESSAGE",
  "BESTIE WHAT'S THE VIBE?",
  "PERIODT SEND IT 📤",
  "RESPECTFULLY, WHAT'S GOOD?",
  "SAY LESS, TYPE MORE SH*T",
  "WHAT'S POPPIN BESTIE?"
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