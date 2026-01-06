import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  pt: {
    translation: {
      nav: {
        home: "Início",
        about: "Sobre",
        dogs: "Nossos Cães",
        available: "Nosso Canil",
        blog: "Blog",
        contact: "Contato",
        partners: "Parceiros"
      }
    }
  },
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About",
        dogs: "Our Dogs",
        available: "Our Kennel",
        blog: "Blog",
        contact: "Contact",
        partners: "Partners"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt',
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
