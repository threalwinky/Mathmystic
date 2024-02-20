import React, { useEffect, useState, useContext } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import { CiUser } from "react-icons/ci";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import { Trans } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { MenuContext } from "react-flexible-sliding-menu";
import { useMediaQuery } from 'react-responsive'

import MathmysticLogo from '../../assets/img/MathmysticLogo.png'
import VietnamLanguage from '../../assets/img/VietnamLanguage.png'
import EnglishLanguage from '../../assets/img/EnglishLanguage.webp'
import i18n from '../../i18n'
import './NavBar.css'

const NavBarWoutMenu = () => {
  const l = localStorage.getItem('lang') == 'en'
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1050px)'
  })
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }
  const [scrolled, setScrolled] = useState(false);
  if (localStorage.getItem('lang') === null) localStorage.setItem('lang','vn')

  useEffect(() => {
    if (localStorage.getItem('lang') === 'en') changeLanguage('en')

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

  const [isMenuShow, setIsMenuShow] = useState(false)
  const Menu = () => {
    return (
      <>
        
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

  const UserPhoneMenu = () => {
    return (
      <>
        <p>
          <a href='#document' onClick={() => setIsMenuShow(!isMenuShow)}>
            {isMenuShow ? <GoTriangleUp /> : <GoTriangleDown />} User
          </a>
        </p>
      </>
    )
  }

  const MixedMenu = () => {
    return (
      <>
        <Menu />
        <UserPhoneMenu />
        {isMenuShow ? <UserMenu /> : ""}
      </>
    )
  }
  const { toggleMenu } = useContext(MenuContext);
  const [userToggleMenu, setUserToggleMenu] = useState(false)
  const [userPhoneToggleMenu, setUserPhoneToggleMenu] = useState(false)
  const [language, setLanguage] = useState(localStorage.getItem('lang') == 'vn' ? 0 : 1)

  const cl = () =>{
    const l = localStorage.getItem('lang')
    console.log(localStorage.getItem('i18lng'))
    if (l == 'en'){
      localStorage.setItem('lang', 'vn')
      changeLanguage('vn')
      setLanguage(!language)
    }
    else{
      localStorage.setItem('lang', 'en')
      changeLanguage('en')
      setLanguage(!language)
    }
  }

  return (
    <div>
      <div className={`mmt__navbar ${scrolled ? "scrolled" : ""}`}>
        <div className='mmt__navbar-links'>
          <a href='/'  className='mmt__navbar-links_logo' style={{cursor: 'pointer'}}>
            <img src={MathmysticLogo} alt='logo' />
            <h1>MATHMYSTIC</h1>
          </a>
          <div className='mmt__navbar-container_links'>
            <Menu />
          </div>
        </div>
        <div className='mmt__navbar-sign'>
        {!isDesktopOrLaptop ? "" :

<div style={{display: 'flex'}}>
  <a href="/cart">
    <div className='buy mmt__navbar-sign_cart' >
      {/* <div className='count'>
  <p>
    3
  </p>
</div> */}
      <svg
        fontSize={25}
        viewBox="0 0 1024 1024"
        fill="currentColor"
        height="1em"
        width="1em"
      >
        <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 00-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 100 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 00-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 00-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6z" />
      </svg>
    </div>
  </a>

  <a href="/forum">
    <div className='buy mmt__navbar-sign_chat'>
      {/* <div className='count'>
  <p>
    3
  </p>
</div> */}
      <svg
        fontSize={20}
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
</div>

}
          <img onClick={() => {cl()}}  src={language ? EnglishLanguage : VietnamLanguage}/>
          <img src={localStorage.getItem('userAvatar') == undefined ? "https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg" : localStorage.getItem('userAvatar')} alt="" onClick={() => { localStorage.setItem('open', '1'); toggleMenu(); }} style={{ fontSize: 35 }} />
          {((!isDesktopOrLaptop) || 1) ? <RiMenu3Line onClick={() => { localStorage.setItem('open', '2'); toggleMenu(); }} style={{ fontSize: 35 }} className='mmt__navbar-sign_user'></RiMenu3Line> : ""}
        </div>

      </div>
    </div>
  )
}

export default NavBarWoutMenu
