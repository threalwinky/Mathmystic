import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Project2 = () => {
  const projects = [
    {
      title: "​TÍNH NĂNG CỦA WEBSITE",
      description: `​

      Hướng dẫn từ A đến Z: Trang web của chúng tôi cung cấp hướng dẫn từng bước để tạo ra các mô hình hình học không gian từ cơ bản đến phức tạp.
  
      Bài giảng tương tác: Bạn sẽ thực hành di chuyển, xoay, và tạo các hình học không gian theo hướng dẫn. Điều này giúp bạn hiểu sâu hơn và tự tin hơn khi làm việc với các mô hình.
  
      Bộ tài liệu và ví dụ: Ngoài hướng dẫn, trang web còn cung cấp bộ tài liệu phong phú và ví dụ minh họa. Bạn có thể tham khảo chúng để tăng cường kiến thức của mình và sáng tạo ra những mô hình độc đáo.
      `,
      imgUrl:
        "https://static.wixstatic.com/media/11062b_a6e1bb8d93704b859a65ba5d3dd3645a~mv2.jpg/v1/fill/w_950,h_777,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_a6e1bb8d93704b859a65ba5d3dd3645a~mv2.jpg",
    },
    {
      title: "BỘ MÔ HÌNH HÌNH HỌC KHÔNG GIAN ",
      description: `Chúng tôi đã phát triển một bộ dụng cụ mô hình hình
       học hoàn chỉnh với thiết kế đơn giản, dễ sử dụng,thân thiện với 
       môi trường bao gồm đế gỗ đục lỗ, các cây ăng ten, dây thun và các 
       phụ kiện cần thiết khác. Qua cấu trúc ấy, người dùng có thể tương tác 
       và tạo ra nhiều mô hình không gian khác nhau, giúp mô hình học không gian 
       gần gũi hơn`,
      imgUrl:
        "https://static.wixstatic.com/media/ce0c23_4ad8407ea753428a87bd66ceabe5182a~mv2.jpg/v1/fill/w_950,h_470,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ce0c23_4ad8407ea753428a87bd66ceabe5182a~mv2.jpg",
    },
    {
      title: " CHẮP CÁNH TƯ DUY, KẾT NỐI TRI THỨC, ÁNH SÁNG CHO MỌI TRÁI TIM",
      description: `Điểm đặc biệt của dự án này nằm ở việc đây là một sản phẩm hoàn toàn mới trên thị trường, giúp tạo ra một phương tiện giảng dạy hình học dễ tiếp cận. Một phần lợi nhuận từ dự án này sẽ được trích vào Quỹ Tạo Mô Hình, nhằm hỗ trợ các bạn khiếm thị trong việc tiếp cận giáo dục về hình học và thúc đẩy sự sáng tạo của mỗi cá nhân. Chúng tôi cam kết đóng góp cho cộng đồng, xã hội và công tác giáo dục.`,
      imgUrl:
        "https://static.wixstatic.com/media/ce0c23_96772a588b3140d8b006814b93eca971~mv2.jpg/v1/fill/w_950,h_599,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ce0c23_96772a588b3140d8b006814b93eca971~mv2.jpg",
    },
  ];

  return (
    <section className="project2" id="intro">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Introduce</h2>
                  {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    ></Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
