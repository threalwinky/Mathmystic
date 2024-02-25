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
          "Sign In" : "Đăng nhập",
          " Password" : " Mật khẩu",
          "Show Password" : "Hiện mật khẩu",
          "Forum" : "Diễn đàn",
          "Study space" : "Góc học tập",
          "Welcome to Mathmystic": "Chào mừng đến với Mathmystic",
          "Let’s Connect": "Cùng đi nào!",

          "WINGS OF THOUGHT": "CHẮP CÁNH TƯ DUY",
          "CONNECTING KNOWLEDGE": "KẾT NỐI TRI THỨC",
          "LIGHT FOR EVERY HEART": "ÁNH SÁNG CHO MỌI TRÁI TIM",
          "Introduce": "Giới thiệu",
          "Chat": "Diễn đàn",
          "Manual" : "Hướng dẫn sử dụng",


          "FEATURES OF THE WEBSITE" : "TÍNH NĂNG CỦA WEBSITE",
          "Instructions from A to Z: Our website provides step-by-step instructions for creating spatial geometric models from basic to complex." : "Hướng dẫn từ A đến Z: Trang web của chúng tôi cung cấp hướng dẫn từng bước để tạo ra các mô hình hình học không gian từ cơ bản đến phức tạp.",
          "Interactive lectures: You will practice moving, rotating, and creating spatial geometry according to instructions. This gives you a deeper understanding and more confidence when working with models.": "Bài giảng tương tác: Bạn sẽ thực hành di chuyển, xoay, và tạo các hình học không gian theo hướng dẫn. Điều này giúp bạn hiểu sâu hơn và tự tin hơn khi làm việc với các mô hình.",
          "Documentation and examples: In addition to instructions, the site also provides a rich documentation and examples. You can refer to them to enhance your knowledge and create unique models. Documentation and examples: In addition to instructions, the website also provides a rich set of documents and illustrative examples. You can refer to them to enhance your knowledge and create unique models." : "Bộ tài liệu và ví dụ: Ngoài hướng dẫn, trang web còn cung cấp bộ tài liệu phong phú và ví dụ minh họa. Bạn có thể tham khảo chúng để tăng cường kiến thức của mình và sáng tạo ra những mô hình độc đáo.Bộ tài liệu và ví dụ: Ngoài hướng dẫn, trang web còn cung cấp bộ tài liệu phong phú và ví dụ minh họa. Bạn có thể tham khảo chúng để tăng cường kiến thức của mình và sáng tạo ra những mô hình độc đáo.",          
          "We will introduce a unique math product to all students and teachers. More than a product, it is a new, creative and fun way to learn and experience geometry.": "Chúng tôi sẽ giới thiệu một sản phẩm toán học độc đáo cho tất cả các bạn học sinh và giáo viên. Hơn cả một sản phẩm, đây còn là một cách thức mới, sáng tạo và thú vị để tìm hiểu và trải nghiệm hình học.",
          "What differentiates the project is the combination of model kits and a learning guide website to create a comprehensive learning experience.": "Điểm khác biệt của dự án là việc kết hợp bộ dụng cụ mô hình và trang web hướng dẫn học tập để tạo ra một trải nghiệm học tập toàn diện. ",
          "The lectures are designed by the project team to be simple but full of resources for learning geometry, thereby encouraging group work in parallel with forming self-study habits.": "Các bài giảng được nhóm dự án thiết kế đơn giản nhưng đầy đủ các tài nguyên phục vụ cho việc học tập hình học, từ đó khuyến khích làm việc nhóm song song với hình thành thói quen tự học.",
          "SOLID GEOMETRIC MODEL" : "BỘ MÔ HÌNH HỌC KHÔNG GIAN",
          "We have developed a complete geometric modeling kit with a simple, easy-to-use, environmentally friendly design that includes a perforated wooden base, antennas, rubber bands and necessary accessories. other. Through that structure, users can interact and create many different spatial models, helping the spatial learning model become more familiar." : "Chúng tôi đã phát triển một bộ dụng cụ mô hình hình học hoàn chỉnh với thiết kế đơn giản, dễ sử dụng,thân thiện với môi trường bao gồm đế gỗ đục lỗ, các cây ăng ten, dây thun và các phụ kiện cần thiết khác. Qua cấu trúc ấy, người dùng có thể tương tác và tạo ra nhiều mô hình không gian khác nhau, giúp mô hình học không gian gần gũi hơn",
          
          "CULTIVATE THINKING, CONNECT KNOWLEDGE," : "CHẮP CÁNH TƯ DUY, KẾT NỐI TRI THỨC,",
          "The special feature of this project is that it is a finished product completely new to the market, helping to create a teaching medium accessible geometry. Part of the profits from this project will be Dedicated to the Model Creation Fund, to support visually impaired people access to geometry education and promote creativity each person. We are committed to contributing to the community and society and educational work." : "Điểm đặc biệt của dự án này nằm ở việc đây là một sản phẩm hoàn toàn mới trên thị trường, giúp tạo ra một phương tiện giảng dạy hình học dễ tiếp cận. Một phần lợi nhuận từ dự án này sẽ được trích vào Quỹ Tạo Mô Hình, nhằm hỗ trợ các bạn khiếm thị trong việc tiếp cận giáo dục về hình học và thúc đẩy sự sáng tạo của mỗi cá nhân. Chúng tôi cam kết đóng góp cho cộng đồng, xã hội và công tác giáo dục.",
          
          "Mathematical model" : "Mô hình toán học",
          "HOW TO USE" : "CÁCH SỬ  DỤNG",
          "Step 1: We need to make the bottom of the shape arbitrarily fixed by selecting the wooden board holes and then attaching wooden buttons" : "Bước 1: Ta cần dựng đáy của hình tùy ý cố định bằng cách chọn các lỗ bảng gỗ rồi gắn các nút gỗ vào",
          "Step 2: Use recycled elastic band to wrap around to create shape for the bottom." : " Bước 2: Dùng dây thun tái chế bọc quanh tạo hình dạng cho mặt đáy.",
          "Step 3: Build the height of the model's base with the antenna adjusting the height accordingly.(if needed)" : "Bước 3: Dựng chân đường cao cho mô hình bằng ăng ten điều chỉnh chiều cao cho phù hợp. (nếu cần)",
          "Step 4: Connect the elastic bands from the top of the antenna to the wooden wicks to create the side edges of the model" : "Bước 4: Nối những dây thun từ đỉnh ăng ten xuống các bấc gỗ tạo cạnh bên cho mô hình",
          "COLLECTION" : "BỘ SƯU TẬP",
          "Triangle" : "Hình tam giác",
          "Quadrangle" : "Hình tứ giác",
          "Rectangle" : "Hình chữ nhật",
          "Circle" : "Hình tròn",
          "Triangle with incircle" : "Hình tròn nội tiếp tam giác",
          "Parallelogram" : "Hình bình hành",
          "Trapezoid" : "Hình thang",
          "Square" : "Hình vuông",
          "Regular triangular pyramid" : "Hình chóp tam giác",
          "Regular quadrangular pyramid" : "Hình chóp tứ giác",
          "Square triangular pyramid" : "Hình chóp tam giác có cạnh bên vuông góc với đáy",
          "Regular triangular prism" : "Hình lăng trụ",
          "Regular quadrangular prism" : "Hình lăng trụ đáy tứ giác",
          "Cone" : "Hình nón",
          "Cylinder" : "Hình trụ",
          "Globular" : "Hình cầu",

          "Handbook(Vietnamese)": "Sổ tay toán học(Tiếng Việt)",
          "Handbook(English)": "Sổ tay toán học(Tiếng Anh)",
          "Instructional video": "Video hướng dẫn sử dụng",
          "Store": "Cửa hàng",
          "Purchase" : "Đơn mua",
          "Setting" : "Cài đặt",
          "Sign out" : "Đăng xuất",

          "Geometry learning kit for visually impaired students" : "Bộ dụng cụ học tập hình học cho học sinh khiếm thị",
          "Geometry learning kit" : "Bộ dụng cụ học tập hình học",
          "Out of stock" : "Hết hàng",
          "Contact" : "Liên hệ",
          "Last Name" : "Họ",
          "First Name" : "Tên",
          "Email address" : "Địa chỉ email",
          "Phone number" : "Số điện thoại",
          "Message" : "Tin nhắn",
          "Send" : "Gửi",
          "Get In Touch" : "Liên Hệ",
          " Location : 18, Le Thuc Hoach Street, Phu Tho Hoa Ward, Tan Phu District, Ho Minh City" : " Địa chỉ : Số 18, đường Lê Thúc Hoạch, P. Phú Thọ Hoà, Q. Tân Phú, Tp. Hồ Chí Minh",
          "Phone number" : "Số điện thoại",
          "1 Wooden hole board 20*20cm": "1 Bảng lỗ gỗ 20*20cm",
          "2 Round elastic bands" : "2 Cọng dây thun tròn",
          "6 Long elastic bands with 2 holes" : "6 Cọng dây thun dài 2 lỗ",
          "4 Antennas" : "4 Cây ăng ten",
          "3 Round rings" : "3 Khoen tròn ",
          "1 Geometry flashcard" : "1 Flashcard hình học",
          "1 Mathematics handbook (2 versions)" : "1 Sổ tay toán học ( 2 phiên bản )",
          "1 Instructional book" : "1 Sách hướng dẫn",
          "Add to cart" : "Thêm vào giỏ hàng",
          "Out of stock" : "Hết hàng",
          "Cart" : "Giỏ hàng",
          "Price per product" : "Giá 1 sản phẩm",
          "Total price" : "Tổng giá tiền",
          "Delete" : "Xóa",
          "Total" : "Tổng cộng",
          "Buy" : "Mua",
          "New Post" : "Cuộc trò chuyện mới",
          "Search a post" : "Tìm kiếm cuộc trò chuyện",
          "Post description" : "Thông tin cuộc trò chuyện",
          "Post title" : "Tiêu đề",
          "Add" : "Thêm"
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