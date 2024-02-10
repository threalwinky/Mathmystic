import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard2 } from "./ProjectCard2";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

import hctgd from "../assets/img/hctgd.jpg"


import chat from "../assets/img/chat.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Project4 = () => {

  const projects = [
    {
      title: "Hình chóp tứ giác",
      description: "Design & Development",
      imgUrl: "https://static.wixstatic.com/media/ce0c23_b5de02f1401c482b91a636d58bc5593d~mv2.jpg/v1/fill/w_280,h_337,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/z4869686102273_0c0209212da4e87c51ce2cdec.jpg",
    },
    {
      title: "Hình chóp tam giác",
      description: "Design & Development",
      imgUrl: {hctgd},
    },
    {
      title: "Hình hộp",
      description: "Design & Development",
      imgUrl: "https://static.wixstatic.com/media/ce0c23_98108f8d0be24d42b1d209660b1e95c5~mv2.jpg/v1/crop/x_0,y_35,w_2068,h_2489/fill/w_280,h_337,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/z4869760232479_f5bc173b15fec7f7e399273dccbc5f5e.jpg",
    },
    {
      title: "Khối lăng trụ xiên",
      description: "Design & Development",
      imgUrl: "https://static.wixstatic.com/media/ce0c23_a4537172529a41c5bece4df7dd5f611f~mv2.jpg/v1/crop/x_112,y_0,w_2125,h_2558/fill/w_280,h_337,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/z4870058130745_31628de0d9357669f6b1262d7a997921.jpg",
    },
    {
      title: "Khối tứ diện có cạnh vuông với đáy",
      description: "Design & Development",
      imgUrl: "https://static.wixstatic.com/media/ce0c23_f9f28c0eb5854fda8c3c883afce553c6~mv2.jpg/v1/crop/x_0,y_125,w_1926,h_2318/fill/w_280,h_337,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/z4869775196834_057713b635ccb6d5c7ebf192aa6eac73.jpg",
    },
    {
      title: "Khối chóp cụt",
      description: "Design & Development",
      imgUrl: "https://static.wixstatic.com/media/ce0c23_9f38198976084003b469c590b1c9f04f~mv2.jpg/v1/crop/x_0,y_125,w_1926,h_2318/fill/w_280,h_337,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/z4870078441139_33306a7529abc72758897718d23fad5e.jpg",
    },
  ];

  return (
    <section className="project" id="chat">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Diễn đàn</h2>
                {/*<img src={chat} style={{width: 1300, borderRadius: 40}}></img>*/}
                <p>
                {/* <li>Bước 1:Ta cần dựng đáy của hình tùy ý cố định bằng cách chọn các lỗ bảng gỗ rồi gắn các nút gỗ vào</li> */}
                {/* <li>Bước 2: Dùng dây thun tái chế bọc quanh tạo hình dạng cho mặt đáy.</li> */}
                {/* <li>Bước 3: Dựng chân đường cao cho mô hình bằng ăng ten điều chỉnh chiều cao cho phù hợp.</li> */}
                {/* <li>Bước 4: Nối những dây thun từ đỉnh ăng ten xuống các bấc gỗ tạo cạnh bên cho mô hình</li> */}
      
                

                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav> */}
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {/* {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard2
                                key={index}
                                {...project}
                                />
                            )
                          })
                        } */}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
