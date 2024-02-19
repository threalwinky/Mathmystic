import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translations: {
          "Hello": "Hello world.",
          "i18n": "This is I18n",

        }
      },
      vn: {
        translations: {
          "Home" : "Trang chủ",
          
          "Introduction": "Giới thiệu",
          "About": "Thông tin",
          "Document": "Tài liệu",
          "Store": "Cửa hàng",
          "Contact": "Liên hệ",
          "Profile" : "Hồ sơ",
          "FEATURES OF THE WEBSITE" : "TÍNH NĂNG CỦA WEBSITE",
          "Instructions from A to Z: Our website provides step-by-step instructions for creating spatial geometric models from basic to complex." : "Hướng dẫn từ A đến Z: Trang web của chúng tôi cung cấp hướng dẫn từng bước để tạo ra các mô hình hình học không gian từ cơ bản đến phức tạp.",
          "Interactive lectures: You will practice moving, rotating, and creating spatial geometry according to instructions. This gives you a deeper understanding and more confidence when working with models.": "Bài giảng tương tác: Bạn sẽ thực hành di chuyển, xoay, và tạo các hình học không gian theo hướng dẫn. Điều này giúp bạn hiểu sâu hơn và tự tin hơn khi làm việc với các mô hình.",
          "Documentation and examples: In addition to instructions, the site also provides a rich documentation and examples. You can refer to them to enhance your knowledge and create unique models. Documentation and examples: In addition to instructions, the website also provides a rich set of documents and illustrative examples. You can refer to them to enhance your knowledge and create unique models." : "Bộ tài liệu và ví dụ: Ngoài hướng dẫn, trang web còn cung cấp bộ tài liệu phong phú và ví dụ minh họa. Bạn có thể tham khảo chúng để tăng cường kiến thức của mình và sáng tạo ra những mô hình độc đáo.Bộ tài liệu và ví dụ: Ngoài hướng dẫn, trang web còn cung cấp bộ tài liệu phong phú và ví dụ minh họa. Bạn có thể tham khảo chúng để tăng cường kiến thức của mình và sáng tạo ra những mô hình độc đáo.",          
          "We will introduce a unique math product to all students and teachers. More than a product, it is a new, creative and fun way to learn and experience geometry.": "Chúng tôi sẽ giới thiệu một sản phẩm toán học độc đáo cho tất cả các bạn học sinh và giáo viên. Hơn cả một sản phẩm, đây còn là một cách thức mới, sáng tạo và thú vị để tìm hiểu và trải nghiệm hình học.",
          "What differentiates the project is the combination of model kits and a learning guide website to create a comprehensive learning experience.": "Điểm khác biệt của dự án là việc kết hợp bộ dụng cụ mô hình và trang web hướng dẫn học tập để tạo ra một trải nghiệm học tập toàn diện. ",
          "The lectures are designed by the project team to be simple but full of resources for learning geometry, thereby encouraging group work in parallel with forming self-study habits.": "Các bài giảng được nhóm dự án thiết kế đơn giản nhưng đầy đủ các tài nguyên phục vụ cho việc học tập hình học, từ đó khuyến khích làm việc nhóm song song với hình thành thói quen tự học.",
          "SOLID GEOMETRIC MODEL" : "BỘ MÔ HÌNH HỌC KHÔNG GIAN",
          "We have developed a complete geometric modeling kit with a simple, easy-to-use, environmentally friendly design that includes a perforated wooden base, antennas, rubber bands and necessary accessories. other. Through that structure, users can interact and create many different spatial models, helping the spatial learning model become more familiar." : "Chúng tôi đã phát triển một bộ dụng cụ mô hình hình học hoàn chỉnh với thiết kế đơn giản, dễ sử dụng,thân thiện với môi trường bao gồm đế gỗ đục lỗ, các cây ăng ten, dây thun và các phụ kiện cần thiết khác. Qua cấu trúc ấy, người dùng có thể tương tác và tạo ra nhiều mô hình không gian khác nhau, giúp mô hình học không gian gần gũi hơn",
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
    lng: 'vn',
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