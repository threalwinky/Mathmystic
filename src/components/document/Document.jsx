import React from 'react'
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ReactPlayer from 'react-player/file'
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import 'react-slideshow-image/dist/styles.css'
import { Fade, Slide } from 'react-slideshow-image';

import { DocumentCard } from "./DocumentCard";
import './Document.css'

import Document1 from '../../assets/vid/V1.mp4'
import Document2 from '../../assets/vid/V2.mp4'
import Document3 from '../../assets/vid/V3.mp4'
import Document4 from '../../assets/vid/V4.mp4'
import Document5 from '../../assets/vid/V5.mp4'
import DocEn1 from '../../assets/img/Doc/En/DocEn1.png'
import DocEn2 from '../../assets/img/Doc/En/DocEn2.png'
import DocEn3 from '../../assets/img/Doc/En/DocEn3.png'
import DocEn4 from '../../assets/img/Doc/En/DocEn4.png'
import DocEn5 from '../../assets/img/Doc/En/DocEn5.png'
import DocEn6 from '../../assets/img/Doc/En/DocEn6.png'
import DocEn7 from '../../assets/img/Doc/En/DocEn7.png'
import DocEn8 from '../../assets/img/Doc/En/DocEn8.png'
import DocEn9 from '../../assets/img/Doc/En/DocEn9.png'
import DocEn10 from '../../assets/img/Doc/En/DocEn10.png'

import DocVn1 from '../../assets/img/Doc/Vn/DocVn1.png'
import DocVn2 from '../../assets/img/Doc/Vn/DocVn2.png'
import DocVn3 from '../../assets/img/Doc/Vn/DocVn3.png'
import DocVn4 from '../../assets/img/Doc/Vn/DocVn4.png'
import DocVn5 from '../../assets/img/Doc/Vn/DocVn5.png'
import DocVn6 from '../../assets/img/Doc/Vn/DocVn6.png'
import DocVn7 from '../../assets/img/Doc/Vn/DocVn7.png'
import DocVn8 from '../../assets/img/Doc/Vn/DocVn8.png'
import DocVn9 from '../../assets/img/Doc/Vn/DocVn9.png'
import DocVn10 from '../../assets/img/Doc/Vn/DocVn10.png'
import { Trans } from 'react-i18next';

const Document = () => {

  const projects = [
    { imgUrl : DocVn1 },
    { imgUrl : DocVn2 },
    { imgUrl : DocVn3 },
    { imgUrl : DocVn4 },
    { imgUrl : DocVn5 },
    { imgUrl : DocVn6 },
    { imgUrl : DocVn7 },
    { imgUrl : DocVn8 },
    { imgUrl : DocVn9 },
    { imgUrl : DocVn10 },
  ];

  const projects2 = [
    { imgUrl : DocEn1 },
    { imgUrl : DocEn2 },
    { imgUrl : DocEn3 },
    { imgUrl : DocEn4 },
    { imgUrl : DocEn5 },
    { imgUrl : DocEn6 },
    { imgUrl : DocEn7 },
    { imgUrl : DocEn8 },
    { imgUrl : DocEn9 },
    { imgUrl : DocEn10 },
  ];
  const projects3 = [
    { imgUrl : DocEn1 },
    { imgUrl : DocEn2 },
    { imgUrl : DocEn3 },
    { imgUrl : DocEn4 },
    { imgUrl : DocEn5 },
    { imgUrl : DocEn6 },
    { imgUrl : DocEn7 },
    { imgUrl : DocEn8 },
    { imgUrl : DocEn9 },
    { imgUrl : DocEn10 },
  ];

  return (
    <div className='mmt__document' id='document'>
      <h1><Trans>Document</Trans></h1>
      <div className='mmt__document-content'>
        <Tab.Container id="projects-tabs" defaultActiveKey="first">
          <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
            <Nav.Item>
              <Nav.Link eventKey="first" ><Trans>Handbook(Vietnamese)</Trans></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second"><Trans>Handbook(English)</Trans></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third"><Trans>Manual</Trans></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourth"><Trans>Instructional video</Trans></Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content id="slideInUp" >
            <Tab.Pane eventKey="first">
              <div className="slide-container mmt__document-slide">
                <Slide {...{ duration: 100, autoplay: false, indicators: true}}>
                  {projects.map((fadeImage, index) => (
                    <div key={index}>
                      <img style={{ width: '100%', borderRadius: 30 }} src={fadeImage.imgUrl} />
                      {/* <h2>{fadeImage.caption}</h2> */}
                    </div>
                  ))}
                </Slide>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <div className="slide-container mmt__document-slide">
                <Slide {...{ duration: 100, autoplay: false, indicators: true }}>
                  {projects2.map((fadeImage, index) => (
                    <div key={index}>
                      <img style={{ width: '100%', borderRadius: 30 }} src={fadeImage.imgUrl} />
                      {/* <h2>{fadeImage.caption}</h2> */}
                    </div>
                  ))}
                </Slide>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <div className="slide-container mmt__document-slide">
                <Slide {...{ duration: 100, autoplay: false, indicators: true }}>
                  {projects3.map((fadeImage, index) => (
                    <div key={index}>
                      <img style={{ width: '100%', borderRadius: 30 }} src={fadeImage.imgUrl} />
                      {/* <h2>{fadeImage.caption}</h2> */}
                    </div>
                  ))}
                </Slide>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="fourth">
              <div className="slide-container mmt__document-slide2">
                <Slide {...{ duration: 100, autoplay: false, infinite: false,indicators:true  }}>
                  <ReactPlayer
                    {...{ controls: true, width: '80%', height: '80%' }}
                    style={{ margin: 'auto'}}
                    url={Document1} />

                  <ReactPlayer
                   {...{ controls: true, width: '80%', height: '80%' }}
                    style={{ margin: 'auto' }}
                    url={Document2} />

                  <ReactPlayer
                    {...{ controls: true, width: '80%', height: '80%' }}
                    style={{ margin: 'auto' }}
                    url={Document3} />

                  <ReactPlayer
                   {...{ controls: true, width: '80%', height: '80%' }}
                    style={{ margin: 'auto' }}
                    url={Document4} />
                    <ReactPlayer
                   {...{ controls: true, width: '80%', height: '80%' }}
                    style={{ margin: 'auto' }}
                    url={Document5} />
                </Slide>
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </div>
  )
}

export default Document
