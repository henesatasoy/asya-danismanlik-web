import { useState, useEffect } from 'react';

const shitpostTexts = [
  "İletişim",
  "Professional Contact",
  "Communication Hub",
  "Expert Consultation",
  "Strategic Partnership",
  "Business Collaboration",
  "Client Relations",
  "Professional Services",
  "Expert Advisory",
  "Consultation Center",
  "Partnership Portal",
  "Business Gateway",
  "Client Experience",
  "Service Excellence",
  "Professional Network",
  "Strategic Solutions",
  "Expert Guidance",
  "Business Innovation",
  "Quality Assurance",
  "Professional Standards",
  "Excellence in Service",
  "Strategic Consulting",
  "Business Development",
  "Client Success",
  "Professional Excellence"
];

const shitpostDescriptions = [
  "Projeleriniz hakkında konuşmak istiyoruz",
  "Let's discuss your vision and transform it into reality",
  "Collaborative excellence through strategic partnership",
  "Innovative solutions tailored to your unique needs",
  "Professional expertise meets creative innovation",
  "Delivering exceptional results with precision",
  "Your success is our primary objective",
  "Building lasting partnerships through quality service",
  "Expert consultation for optimal project outcomes",
  "Strategic guidance for sustainable growth",
  "Professional excellence in every interaction",
  "Transforming ideas into exceptional experiences",
  "Dedicated to exceeding your expectations",
  "Innovation through collaborative excellence",
  "Quality-driven solutions for modern challenges",
  "Professional standards that set us apart",
  "Excellence delivered through expert execution",
  "Strategic thinking meets creative implementation",
  "Your project deserves nothing less than excellence"
];

const contactLabels = [
  "İletişim Bilgileri",
  "Professional Contact Information",
  "Get in Touch with Our Experts",
  "Connect with Our Team",
  "Reach Out for Consultation",
  "Professional Communication Channels",
  "Contact Our Specialists",
  "Expert Support & Guidance",
  "Professional Correspondence",
  "Business Communication Hub",
  "Expert Consultation Portal"
];

const formLabels = [
  "Bize Ulaşın",
  "Professional Inquiry Form",
  "Submit Your Project Details",
  "Request Expert Consultation",
  "Professional Communication Portal",
  "Send Your Requirements",
  "Schedule a Consultation",
  "Project Submission Form",
  "Expert Advisory Request",
  "Professional Service Inquiry",
  "Strategic Consultation Portal"
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