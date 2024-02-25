import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Trans } from 'react-i18next';

import VietnamLanguage from '../../assets/img/VietnamLanguage3.jpeg'
import EnglishLanguage from '../../assets/img/EnglishLanguage.webp'
import MathmysticLogo from '../../assets/img/MathmysticLogo.png'
import './Test.css'
const Test = () => {
  const [modalCount, setModalCount] = useState(0)
  const [modalLeft, setModalLeft] = useState(0)
  const [modalRight, setModalRight] = useState(0)
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1024px)'
  })

  const HomeMenu = () => {
    return (
      <>
        <a href='/#home'><p><Trans>Home</Trans></p></a>
        <a href='/#introduction'><p><Trans>Introduction</Trans></p></a>
        <a href='/#store'><p><Trans>Store</Trans></p></a>
        <a href='/#about'><p><Trans>Mathematical model</Trans></p></a>
        <a href='/#document'><p><Trans>Document</Trans></p></a>
        <a href='/#contact'><p><Trans>Contact</Trans></p></a>
      </>
    )
  }

  const UserMenu = () => {
    return (
      <>
        <a href='#document'><p><Trans>Profile</Trans></p></a>
        <a href='#home'><p><Trans>Cart</Trans></p></a>
        <a href='#introduction'><p><Trans>Bill</Trans></p></a>
        <a href='#introduction'><p><Trans>Chat</Trans></p></a>
        <a href='#store'><p><Trans>Setting</Trans></p></a>
        <a href='#contact'><p><Trans>Log Out</Trans></p></a>
      </>
    )
  }

  return (
    <div>

      <>
        <div className={'modal-left' + ((modalLeft) ? ' slide-right' : ' slide-left')}>
          <div id='modal-left-content' className={'modal-left-content'}>
            <div className='modal-left-content-header'>
              <img width={45} src={MathmysticLogo} alt="" />
              <div className='close-icon' onClick={() => setModalLeft(!modalLeft)}>
                <svg fill="none" viewBox="0 0 24 24" height="1em" width="1em" >
                  <path
                    fill="currentColor"
                    d="M6.225 4.811a1 1 0 00-1.414 1.414L10.586 12 4.81 17.775a1 1 0 101.414 1.414L12 13.414l5.775 5.775a1 1 0 001.414-1.414L13.414 12l5.775-5.775a1 1 0 00-1.414-1.414L12 10.586 6.225 4.81z"
                  />
                </svg>
              </div>

            </div>
            <div className='modal-left-content-topic'>
              <HomeMenu />
            </div>
            <div className='modal-left-content-footer'>

              <h6>Providing math solutions since 2023</h6>
            </div>
          </div>
          <div style={{ width: (modalLeft ? '1000rem' : '0') }} className={'modal-left-expand'} onClick={() => {
            if (modalLeft == 1)
              setModalLeft(!modalLeft)
          }
          } >

          </div>
        </div>

        <div className={'modal-right' + ((modalRight) ? ' slide-left' : ' slide-right')}>
          <div className={'modal-right-content'}>
            <div className='modal-right-content-header'>
              <div className='modal-right-content-header-info'>
                <img width={45} src={MathmysticLogo} alt="" />
                <div className='modal-right-content-header-info-text'>
                  <h1>Vu</h1>
                  <p>voquangvu09112006@gmail.com</p>
                </div>
              </div>

              <div className='close-icon' onClick={() => setModalRight(!modalRight)}>
                <svg fill="none" viewBox="0 0 24 24" height="1em" width="1em" >
                  <path
                    fill="currentColor"
                    d="M6.225 4.811a1 1 0 00-1.414 1.414L10.586 12 4.81 17.775a1 1 0 101.414 1.414L12 13.414l5.775 5.775a1 1 0 001.414-1.414L13.414 12l5.775-5.775a1 1 0 00-1.414-1.414L12 10.586 6.225 4.81z"
                  />
                </svg>
              </div>

            </div>
            <div className='modal-right-content-topic'>
              <UserMenu />
            </div>
            <div className='modal-right-content-footer'>

              <h6>Providing math solutions since 2023</h6>
            </div>
          </div>
          <div style={{ width: (modalRight ? '1000rem' : '0') }} className={'modal-right-expand'} onClick={() => {
            if (modalRight == 1)
              setModalRight(!modalRight)
          }
          } >

          </div>
        </div>

      </>

      <div className='navbar' >

      <div className='navbar-left'>
        {!isDesktopOrLaptop ?

          <div className='home-icon' onClick={() => setModalLeft(!modalLeft)}>
            <svg
              viewBox="0 0 16 16"
              fill="currentColor"
              height="1em"
              width="1em"
            >
              <path
                fillRule="evenodd"
                d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z"
              />
            </svg>
          </div>

          : ""}
        

          <div className='navbar-links'>
            <a href='/' className='mmt__navbar-links_logo' style={{ cursor: 'pointer' }}>
              <img src={MathmysticLogo} alt='logo' />
              <h1>MATHMYSTIC</h1>
            </a>
            <div className='navbar-container_links'>
              {/* <Menu /> */}
            </div>
          </div>
        </div>



        <div className='navbar-right'>

          <a href="">
            <div className='flag-icon'>
              <img src={VietnamLanguage} alt="" width={35} />
            </div>
          </a>

          <a href="">
            <div className='home-icon'>
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="1em"
                width="1em"

              >
                <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 00-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 100 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 00-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 00-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6z" />
              </svg>
            </div>
          </a>


          <a href="">
            <div className='home-icon'>
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"

              >
                <path d="M5 8a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2z" />
                <path d="M2.165 15.803l.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 008 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 01-.524 2.318l-.003.011a10.722 10.722 0 01-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 00.693-.125zm.8-3.108a1 1 0 00-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 01-2.088-.272 1 1 0 00-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 00.398-2z" />
              </svg>
            </div>
          </a>

          <div className='home-icon' onClick={() => setModalRight(!modalRight)}>
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="1em"
              width="1em"

            >
              <path d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z" />
            </svg>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Test
