import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/pet4.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { translate, Trans, withTranslation } from 'react-i18next';

export const Banner = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
  
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "CHẮP CÁNH TƯ DUY", "KẾT NỐI TRI THỨC" , "ÁNH SÁNG CHO MỌI TRÁI TIM" ];
  const period = 500;

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
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline"><Trans>Welcome to Mathmystic</Trans></span>
                <h1>{` `} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "b", "a", "ÁNH SÁNG CHO MỌI TRÁI TIM" ]'><span className="wrap">{text}</span></span></h1>
                  <p >
                    {/* <Trans>a</Trans> */}
                    <li style={{color: "#0f4135"}}><Trans>We will introduce a unique math product to all students and teachers. More than a product, it is a new, creative and fun way to learn and experience geometry.</Trans></li>
                    <br></br>
                    <li style={{color: "#0f4135"}}><Trans>What differentiates the project is the combination of model kits and a learning guide website to create a comprehensive learning experience.</Trans> </li>
                    <br></br>
                    <li style={{color: "#0f4135"}}><Trans>The lectures are designed by the project team to be simple but full of resources for learning geometry, thereby encouraging group work in parallel with forming self-study habits.</Trans></li>


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
                  <img src={headerImg} alt="Header Img" style={{width: 350}}/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
