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

const NavBar = () => {
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
        <a href='/#home'><p><Trans>Home</Trans></p></a>
        <a href='/#introduction'><p><Trans>Introduction</Trans></p></a>
        <a href='/#store'><p><Trans>Store</Trans></p></a>
        <a href='/#about'><p><Trans>Mathematical model</Trans></p></a>
        <a href='/#document'><p><Trans>Document</Trans></p></a>
        <a href='/#contact'><p><Trans>Contact</Trans></p></a>
        <a href='/cart'><p>{l ? 'Cart' : 'Giỏ hàng'}</p></a>
        <a href='/forum'><p>{l ? 'Forum' : 'Diễn đàn'}</p></a>
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
          <img onClick={() => {cl()}}  src={language ? EnglishLanguage : VietnamLanguage}/>
          <img src={localStorage.getItem('userAvatar') == undefined ? "https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg" : localStorage.getItem('userAvatar')} alt="" onClick={() => { localStorage.setItem('open', '1'); toggleMenu(); }} style={{ fontSize: 50 }} />
          {((!isDesktopOrLaptop) || !(localStorage.getItem('open2') == '1')) ? <RiMenu3Line onClick={() => { localStorage.setItem('open', '2'); toggleMenu(); }} style={{ fontSize: 35 }} className='mmt__navbar-sign_user'></RiMenu3Line> : ""}
        </div>

      </div>
    </div>
  )
}

export default NavBar
