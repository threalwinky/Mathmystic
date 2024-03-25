/*Module before File after */
import { useState, useEffect, React } from 'react'
import { Trans, withTranslation, useTranslation } from 'react-i18next';
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, updateDoc } from 'firebase/firestore'
import { useMediaQuery } from 'react-responsive'


import db from '../../../firebase'
import './Footer.css'
import MathmysticPet from '../../assets/img/MathmysticPet.png';
import MathmysticLogo from '../../assets/img/MathmysticLogo.png'
import LinkedinIcon from "../../assets/img/LinkedinIcon.svg";
import FacebookIcon from "../../assets/img/FacebookIcon.svg";
import InstagramIcon from "../../assets/img/InstagramIcon.svg";
const Footer = () => {
  /* Necessary function */
  const [t, i18n] = useTranslation()
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1050px)'
  })


  return (
    <div className='footer' id='footer'>
      <div className='container'>
        <div className='left'>
          <div className='title'>
            <Trans>
              Contact
            </Trans>
          </div>
          <div>
            <p>
              <Trans>Địa chỉ : Số 18, đường Lê Thúc Hoạch, P. Phú Thọ Hoà, Q. Tân Phú, Tp. Hồ Chí Minh</Trans>
            </p>
            <p>
              <Trans>
                Email : mathmystic12345@gmail.com
              </Trans>
            </p>
            <p>
              <Trans>
                Số điện thoại : 0794746779
              </Trans>
            </p>
          </div>
        </div>
        <div className='right'>
          <div className='social'>
            <a href="https://www.facebook.com/people/Mathmystic/61553045231824/">
              <svg
                viewBox="0 0 512 512"
                fill="currentColor"
                height="2em"
                width="2em"

              >
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
              </svg>


            </a>

            <a href="https://www.linkedin.com/in/vu-vo-winky-682203260/">
              <svg
                viewBox="0 0 960 1000"
                fill="currentColor"
                height="2em"
                width="2em"

              >
                <path d="M480 20c133.333 0 246.667 46.667 340 140s140 206.667 140 340c0 132-46.667 245-140 339S613.333 980 480 980c-132 0-245-47-339-141S0 632 0 500c0-133.333 47-246.667 141-340S348 20 480 20M362 698V386h-96v312h96m-48-352c34.667 0 52-16 52-48s-17.333-48-52-48c-14.667 0-27 4.667-37 14s-15 20.667-15 34c0 32 17.333 48 52 48m404 352V514c0-44-10.333-77.667-31-101s-47.667-35-81-35c-44 0-76 16.667-96 50h-2l-6-42h-84c1.333 18.667 2 52 2 100v212h98V518c0-12 1.333-20 4-24 8-25.333 24.667-38 50-38 32 0 48 22.667 48 68v174h98" />
              </svg>
            </a>

            <a href="https://www.youtube.com/@MATHMYSTIC12345">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="2em"
              width="2em"

            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z" />
            </svg>
            </a>
            
          </div>
          <div>
            <p>
              MATHMYSTIC

            </p>
            <p style={{ display: 'flex', alignItems: 'center' }}>
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="1em"
                width="1em"
                style={{ margin: 2 }}
              >
                <path d="M10.08 10.86c.05-.33.16-.62.3-.86.3-.56.81-.85 1.5-.86.45 0 .86.2 1.15.49.28.31.47.74.47 1.17h1.8c-.02-.47-.11-.9-.3-1.3-.15-.38-.38-.72-.68-1-1.45-1.34-4.14-1.15-5.37.37-1.29 1.67-1.32 4.59-.01 6.26 1.21 1.49 3.86 1.7 5.3.37.31-.25.56-.56.76-.92.16-.36.27-.74.28-1.15H13.5c0 .21-.07.4-.16.57-.09.19-.21.34-.34.47-.33.26-.72.4-1.14.4-.36-.01-.66-.08-.89-.23a1.41 1.41 0 01-.59-.64c-.5-.9-.42-2.15-.3-3.14M12 2C6.5 2 2 6.5 2 12c.53 13.27 19.5 13.26 20 0 0-5.5-4.5-10-10-10m0 18c-4.41 0-8-3.59-8-8 .44-10.61 15.56-10.61 16 0 0 4.41-3.59 8-8 8z" />
              </svg>
              Providing math solutions since 2023
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer
