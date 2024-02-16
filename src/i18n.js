import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translations: {
          "Hello": "Hello world.",
          "i18n": "This is I18n"
        }
      },
      vn: {
        translations: {
          "Home": "Trang chủ",
          "Introduction": "Giới thiệu",
          "About": "Thông tin",
          "Documentation": "Tài liệu",
          "Store": "Cửa hàng",
          "Contact": "Liên hệ",
          "We will introduce a unique math product to all students and teachers. More than a product, it is a new, creative and fun way to learn and experience geometry.": "Chúng tôi sẽ giới thiệu một sản phẩm toán học độc đáo cho tất cả các bạn học sinh và giáo viên. Hơn cả một sản phẩm, đây còn là một cách thức mới, sáng tạo và thú vị để tìm hiểu và trải nghiệm hình học.",
          "What differentiates the project is the combination of model kits and a learning guide website to create a comprehensive learning experience.": "Điểm khác biệt của dự án là việc kết hợp bộ dụng cụ mô hình và trang web hướng dẫn học tập để tạo ra một trải nghiệm học tập toàn diện. ",
          "The lectures are designed by the project team to be simple but full of resources for learning geometry, thereby encouraging group work in parallel with forming self-study habits.": "Các bài giảng được nhóm dự án thiết kế đơn giản nhưng đầy đủ các tài nguyên phục vụ cho việc học tập hình học, từ đó khuyến khích làm việc nhóm song song với hình thành thói quen tự học.",

          "Welcome to Mathmystic": "Chào mừng đến với Mathmystic",
          "Let’s Connect": "Cùng đi nào!",

          "WINGS OF THOUGHT": "CHẮP CÁNH TƯ DUY",
          "CONNECTING KNOWLEDGE": "KẾT NỐI TRI THỨC",
          "LIGHT FOR EVERY HEART": "ÁNH SÁNG CHO MỌI TRÁI TIM",
          "Introduce": "Giới thiệu",
          "Chat": "Diễn đàn"
        }
      }
    },
    fallbackLng: 'en',
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      formatSeparator: ','
    },
    react: {
      wait: true
    }
  });
export default i18n;