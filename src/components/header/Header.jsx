/*Module before File after */
import { useState, useEffect, React } from 'react'
import { Trans, withTranslation, useTranslation } from 'react-i18next';
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, updateDoc } from 'firebase/firestore'



import db from '../../../firebase'
import './Header.css'
import MathmysticPet from '../../assets/img/MathmysticPet.png';
import MathmysticLogo from '../../assets/img/MathmysticLogo.png'

const Header = () => {
  /* Necessary function */
  const [t, i18n] = useTranslation()

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(0);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(100);
  const [index, setIndex] = useState(1);
  const toRotate = ["WINGS OF THOUGHT", "CONNECTING KNOWLEDGE", "LIGHT FOR EVERY HEART"];
  const toRotate2 = ["CHẮP CÁNH TƯ DUY", "KẾT NỐI TRI THỨC", "ÁNH SÁNG CHO MỌI TRÁI TIM"];

  const period = 1000;

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
      setDelta(100);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }


  return (
    <div>

      <div className='header' id='home'>
        <div className='header-content'>

          <div className='header-content_left'>
            <span className="header-tagline"><Trans>Welcome to Mathmystic</Trans></span>
            <h1>{` `}
              <span className="txt-rotate" dataperiod="100">
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
            <a href="#introduction" style={{ textDecoration: "none" }} ><button >
              <Trans>Let’s Connect</Trans>

              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="1.8em"
                width="2em"
                style={{ fontSize: 10 }}
                stroke='#890036'
                strokeWidth='0.8px'
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a7 7 0 1014 0A7 7 0 001 8zm15 0A8 8 0 110 8a8 8 0 0116 0zM4.5 7.5a.5.5 0 000 1h5.793l-2.147 2.146a.5.5 0 00.708.708l3-3a.5.5 0 000-.708l-3-3a.5.5 0 10-.708.708L10.293 7.5H4.5z"
                />
              </svg>

            </button>
            </a>
          </div>
          <div className='header-content_right'>
            <img src={MathmysticPet} alt="Mathmystic Pet" style={{ width: 350 }} />
          </div>
        </div>
      </div>


    </div>
  )
}

export default Header
