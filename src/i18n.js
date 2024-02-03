import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          "Hello": "Hello world.",
          
          "i18n": "This is I18n"
        }
      },
      vn: {
        translations: {
          "Trang chủ": "Home",
          "Giới thiệu": "Introduce",
          "Mô hình toán học": "Mathmystic",
          "Tài liệu học tập": "Document",
          "Cửa hàng": "Products",
          "Liên hệ": "Contact",
          "​MATHMYSTIC XIN CHÀO":"WELCOME TO ​MATHMYSTIC",
          "CHẮP CÁNH TƯ DUY, KẾT NỐI TRI THỨC,": "WINGING THINKING, CONNECTING KNOWLEDGE,",
          "ÁNH SÁNG CHO MỌI TRÁI TIM": " LIGHT FOR EVERY HEART",
        }
      }
    },
    fallbackLng: 'en',

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false, // not needed for react!!
      formatSeparator: ','
    },

    react: {
      wait: true
    }
  });

export default i18n;