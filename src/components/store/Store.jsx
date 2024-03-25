/*Module before File after */
import { useState, useEffect, React } from 'react'
import { Trans, withTranslation, useTranslation } from 'react-i18next';
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, updateDoc } from 'firebase/firestore'
import { useMediaQuery } from 'react-responsive'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';



import db from '../../../firebase'
import './Store.css'
import MathmysticPet from '../../assets/img/MathmysticPet.png';
import MathmysticLogo from '../../assets/img/MathmysticLogo.png'
import Store1_1 from '../../assets/img/Store/Store1/Store1_1.jpeg';
import Store2_1 from '../../assets/img/Store/Store2/Store2_1.png';
const Store = () => {
    /* Necessary function */
    const [t, i18n] = useTranslation()
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1050px)'
    })

    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1200 },
        items: 3
      },
      laptop: {
        breakpoint: { max: 1200, min: 1024 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 1024, min: 0 },
        items: 1
      }
    };
  
    const Stars = () => {
      return (
        <div>
          <div className='stars'>
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="1em"
              width="1em"
  
            >
              <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
            </svg>
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="1em"
              width="1em"
  
            >
              <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
            </svg>
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="1em"
              width="1em"
  
            >
              <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
            </svg>
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="1em"
              width="1em"
  
            >
              <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
            </svg>
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="1em"
              width="1em"
  
            >
              <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
            </svg>
  
          </div>
        </div>
      )
    }
  
    const changeMoney = (money) => {
      var m = ((money).toLocaleString(
        undefined,
  
        { minimumFractionDigits: 2 }
      ))
      return m.substring(0, m.length - 3)
    }
    return (
      <div className='store' id='store'>
      <h1 ><Trans>Store</Trans></h1>
      <div>
        <Carousel
          responsive={responsive}
          className='owl-carousel owl-theme store-skill-slider'
        >
          <Link to={'/product/bo-dung-cu-hoc-tap-hinh-hoc-cho-hoc-sinh-khiem-thi'}>
            <div className="item">
              <img src={Store1_1} alt="Image" />
              <h5><Trans>Geometry learning kit for visually impaired students</Trans></h5>
              <h3><Trans>249,000đ</Trans></h3>
              <div className='info'>
                <Stars></Stars>
                <div className='sold'>
                  <p>Da ban 1,2k</p>
                </div>
              </div>

            </div>
          </Link>

          <Link to={'/product/bo-dung-cu-hinh-hoc'}>
            <div className="item">
              <img src={Store2_1} alt="Image" />
              <h5><Trans>Geometry learning kit</Trans></h5>
              <h3><Trans>249,000₫</Trans></h3>

              <div className='info'>
                <Stars></Stars>
                <div className='sold'>
                  <p>Da ban 1,2k</p>
                </div>
              </div>


            </div>
          </Link>

          {/* <Link to={'/product/bo-dung-cu-hinh-hoc'}>
            <div className="item">
              <img src={Store2_1} alt="Image" />
              <h5><Trans>Geometry learning kit</Trans></h5>
              <h3><Trans>249,000₫</Trans></h3>
            </div>
          </Link>

          <Link to={'/product/bo-dung-cu-hinh-hoc'}>
            <div className="item">
              <img src={Store2_1} alt="Image" />
              <h5><Trans>Geometry learning kit</Trans></h5>
              <h3><Trans>249,000₫</Trans></h3>
            </div>
          </Link> */}

        </Carousel>
      </div>
    </div>
    )
}

export default Store
