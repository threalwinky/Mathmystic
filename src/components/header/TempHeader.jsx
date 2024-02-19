import React from 'react'
import './Header.css'
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MathmysticPet from '../../assets/img/MathmysticPet.png';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { translate, Trans, withTranslation } from 'react-i18next';
const Header = () => {

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(0);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(400);
  const [index, setIndex] = useState(1);
  const toRotate = [ "WINGS OF THOUGHT", "CONNECTING KNOWLEDGE" , "LIGHT FOR EVERY HEART" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(50);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }


  return (
    <div className='mmt__header' id='home'>
      <Container>
        <Row className="mmt__header-content">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="mmt__header-tagline"><Trans>Welcome to Mathmystic</Trans></span>
                  <h1>{` `} <span className="txt-rotate" dataPeriod="100" data-rotate='[ "b", "a", "ÁNH SÁNG CHO MỌI TRÁI TIM" ]'><span className="wrap"><Trans>{text}</Trans></span></span></h1>
                  <p >
                    {/* <Trans>a</Trans> */}
                    <li style={{ color: "#0f4135" }}><Trans>We will introduce a unique math product to all students and teachers. More than a product, it is a new, creative and fun way to learn and experience geometry.</Trans></li>
                    <br></br>
                    <li style={{ color: "#0f4135" }}><Trans>What differentiates the project is the combination of model kits and a learning guide website to create a comprehensive learning experience.</Trans> </li>
                    <br></br>
                    <li style={{ color: "#0f4135" }}><Trans>The lectures are designed by the project team to be simple but full of resources for learning geometry, thereby encouraging group work in parallel with forming self-study habits.</Trans></li>

                  </p>
                  <a href="#intro" style={{textDecoration: "none"}}><button ><Trans>Let’s Connect</Trans> <ArrowRightCircle size={25} /></button>
                    </a>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={MathmysticPet} alt="Mathmystic Pet" style={{ width: 350 }} />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Header
