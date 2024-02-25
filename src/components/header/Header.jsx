import React from 'react'
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Trans, withTranslation } from 'react-i18next';

import './Header.css'
import MathmysticPet from '../../assets/img/MathmysticPet.png';
const Header = () => {

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(0);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(400);
  const [index, setIndex] = useState(1);
  const toRotate = ["WINGS OF THOUGHT", "CONNECTING KNOWLEDGE", "LIGHT FOR EVERY HEART"];
  const toRotate2 = ["CHẮP CÁNH TƯ DUY", "KẾT NỐI TRI THỨC", "ÁNH SÁNG CHO MỌI TRÁI TIM"];

  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    const l = localStorage.getItem('lang') == 'en' ? toRotate : toRotate2
    let i = loopNum % l.length;
    let fullText = l[i];
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
      setDelta(400);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }


  return (
    <div className='header' id='home'>
      <div className='header-content'>

        <div className='header-content_left'>
          <span className="header-tagline"><Trans>Welcome to Mathmystic</Trans></span>
          <h1>{` `}
            <span className="txt-rotate" dataPeriod="100">
              <span className="wrap">
                <Trans>{text}</Trans>
              </span>
            </span>
          </h1>
          <p >
            <li>
              <Trans>We will introduce a unique math product to all students and teachers. More than a product, it is a new, creative and fun way to learn and experience geometry.
              </Trans>
            </li>
            <br></br>
            <li>
              <Trans>What differentiates the project is the combination of model kits and a learning guide website to create a comprehensive learning experience.
              </Trans>
            </li>
            <br></br>
            <li>
              <Trans>The lectures are designed by the project team to be simple but full of resources for learning geometry, thereby encouraging group work in parallel with forming self-study habits.
              </Trans>
            </li>
          </p>
          <a href="#introduction" style={{ textDecoration: "none" }} ><button ><Trans>Let’s Connect</Trans> <ArrowRightCircle size={25} /></button>
          </a>
        </div>
        <div className='header-content_right'>
          <img src={MathmysticPet} alt="Mathmystic Pet" style={{ width: 350 }} />
        </div>
      </div>
    </div>
  )
}

export default Header
