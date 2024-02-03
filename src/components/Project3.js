import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard3 } from "./ProjectCard3";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Project3 = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "https://mathmystic.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FhmXRypq%2F1.jpg&w=640&q=75",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "https://mathmystic.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FSrfyp5v%2F2.jpg&w=640&q=75",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "https://mathmystic.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FQDF8jN4%2F3.jpg&w=640&q=75",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "https://mathmystic.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2F2ZJC7d5%2F4.jpg&w=640&q=75",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "https://mathmystic.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FGCSwrvB%2F5.jpg&w=640&q=75",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "https://mathmystic.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FFBsrw2k%2F6.jpg&w=640&q=75",
    },
  ];

  const projects2 = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "https://mathmystic.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2F87XHChv%2F1.jpg&w=640&q=75",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "https://mathmystic.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FhWqgh3b%2F2.jpg&w=640&q=75",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "https://mathmystic.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FLzLB5Qs%2F3.jpg&w=640&q=75",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "https://mathmystic.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FKx8Xq6f%2F4.jpg&w=640&q=75",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "https://mathmystic.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FmSZ8qPq%2F5.jpg&w=640&q=75",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "https://mathmystic.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2F68VQVN7%2F6.jpg&w=640&q=75",
    },
  ];

  const projects3 = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project2" id="doc">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Tài liệu học tập</h2>
                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first" >Sổ tay toán học(Tiếng Việt)</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Sổ tay toán học(Tiếng Anh)</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Video hướng  dẫn sử  dụng   <></> </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard3
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard3
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                    <iframe title="Hướng dẫn sử dụng" width="560" height="500" src="https://tube.exozy.me/videos/embed/470a32e3-27f2-4101-bb5e-1cdfc1816df1" frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups"></iframe>
                      </Row>
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