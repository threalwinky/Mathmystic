import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Trans } from 'react-i18next';

import db from '../../firebase'
import { getDocs, collection } from 'firebase/firestore';

import i18n from '../../i18n'
import VietnamLanguage from '../../assets/img/VietnamLanguage3.jpeg'
import EnglishLanguage from '../../assets/img/EnglishLanguage3.png'
import MathmysticLogo from '../../assets/img/MathmysticLogo.png'
import './NavBar.css'
import PopupSuccessSignOut1 from '../../containers/modal/PopupSuccessSignOut1';
import PopupSuccessSignUp1 from '../../containers/modal/PopupSuccessSignUp1';
import { Link } from 'react-router-dom';
import { MdOutlineArrowCircleLeft } from 'react-icons/md';


const NavBarWoutMenuLogo = () => {

  const l = localStorage.getItem('lang') == 'en'
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }
  if (localStorage.getItem('lang') === null) localStorage.setItem('lang', 'vn')
  const [language, setLanguage] = useState(localStorage.getItem('lang') == 'vn' ? 0 : 1)
  const [modalCount, setModalCount] = useState(0)
  const [modalLeft, setModalLeft] = useState(0)
  const [modalRight, setModalRight] = useState(0)
  const [scrolled, setScrolled] = useState(false);
  const [isOpenPopupSuccessSignOut1, setIsOpenPopupSuccessSignOut1] = useState(0)
  const [fe, setFe] = useState('')
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1200px)'
  })
  const isDesktop = useMediaQuery({
    query: '(min-width: 1200px)'
  })

  var LogOut = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('userAvatar')
    localStorage.removeItem('userName')
    // window.location.href = '/'
    localStorage.setItem('loggedin', '3')
    setIsOpenPopupSuccessSignOut1(1)
  }

  const cl = () => {
    const l = localStorage.getItem('lang')
    // console.log(localStorage.getItem('i18lng'))
    if (l == 'en') {
      localStorage.setItem('lang', 'vn')
      changeLanguage('vn')
      setLanguage(!language)
    }
    else {
      localStorage.setItem('lang', 'en')
      changeLanguage('en')
      setLanguage(!language)
    }
  }
  if (localStorage.getItem('lang') === null) localStorage.setItem('lang', 'vn')

  const [foundUser, setFoundUser] = useState('')

  const fetchUser = async () => {

    await getDocs(collection(db, "account"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        const foundUser2 = (newData.find(x => x.email == localStorage.getItem('user')))
        if (foundUser2 == undefined) {
          setFoundUser(
            {
              'name': 'Guest',
              'email': 'Please sign in to use our service',
              'avatar': 'https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg'
            }
          )
          setFe('Please sign in to use our service')
        }
        else {
          setFoundUser(foundUser2)
          // console.log((foundUser2.email).includes('0'))
          // if (localStorage.getItem('user') == undefined) setFe()
          setFe(String(foundUser2.email.endsWith('2')) ? String(foundUser2.email.substr(0, foundUser2.email.length - 1)) : String(foundUser2.email))
        }
        // console.log(foundUser2)
        // setLoading(1)
      })


  }

  useEffect(() => {
    if (localStorage.getItem('lang') === 'en') changeLanguage('en')
    fetchUser()
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
  const [choose, setChoose] = useState('home')
  const HomeMenu = () => {
    return (
      <>
        <a
          href='/#home'
          className={`${choose == 'home' ? ' choose' : ''}`}
          onClick={() => setChoose('home')}
        >
          <p>
            <Trans>Home</Trans>
          </p>
        </a>
        <a
          href='/#introduction'
          className={`${choose == 'introduction' ? ' choose' : ''}`}
          onClick={() => setChoose('introduction')}
        >
          <p>
            <Trans>Introduction</Trans>
          </p>
        </a>
        <a
          href='/#store'
          className={`${choose == 'store' ? ' choose' : ''}`}
          onClick={() => setChoose('store')}
        >
          <p>
            <Trans>Store</Trans>
          </p>
        </a>
        <a
          href='/#about'
          className={`${choose == 'about' ? ' choose' : ''}`}
          onClick={() => setChoose('about')} >
          <p><Trans>Mathematical model</Trans>
          </p>
        </a>
        <a
          href='/#document'
          className={`${choose == 'document' ? ' choose' : ''}`}
          onClick={() => setChoose('document')} >
          <p><Trans>Document</Trans>
          </p>
        </a>
        <a
          href='/#contact'
          className={`${choose == 'contact' ? ' choose' : ''}`}
          onClick={() => setChoose('contact')}
        ><p>
            <Trans>Contact</Trans>
          </p>
        </a>
      </>
    )
  }

  const HomeMenuPhone = () => {
    return (
      <>
        <a
          href='/#home'
          className={`${choose == 'home' ? ' choose' : ''}`}
          onClick={() => setChoose('home')}
        >
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="1em"
            width="1em"
            fontSize={30}
          >
            <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z" />
          </svg>
          <p>
            <Trans>Home</Trans>
          </p>
        </a>
        <a
          href='/#introduction'
          className={`${choose == 'introduction' ? ' choose' : ''}`}
          onClick={() => setChoose('introduction')}
        >

          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1em"
            width="1em"
            fontSize={30}
          >
            <path d="M5.68 19.74A9.981 9.981 0 0011 21.95v-2.02a7.941 7.941 0 01-3.9-1.62m5.9 1.62v2.02c2-.2 3.84-1 5.32-2.21l-1.43-1.43c-1.1.86-2.43 1.44-3.89 1.62m5.31-3.03l1.43 1.43c1.21-1.48 2.01-3.33 2.21-5.33h-2.02a7.941 7.941 0 01-1.62 3.9M15 12a3 3 0 00-3-3 3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3M4.07 13H2.05c.2 2 1 3.84 2.21 5.32l1.43-1.43A7.868 7.868 0 014.07 13m1.62-5.9L4.26 5.68A9.981 9.981 0 002.05 11h2.02c.18-1.46.76-2.79 1.62-3.9M19.93 11h2.02c-.2-2-1-3.84-2.21-5.32L18.31 7.1a7.941 7.941 0 011.62 3.9m-1.61-6.74A9.981 9.981 0 0013 2.05v2.02c1.46.18 2.79.76 3.9 1.62M11 4.07V2.05c-2 .2-3.84 1-5.32 2.21L7.1 5.69A7.941 7.941 0 0111 4.07z" />
          </svg>


          <p>
            <Trans>Introduction</Trans>
          </p>
        </a>
        <a
          href='/#store'
          className={`${choose == 'store' ? ' choose' : ''}`}
          onClick={() => setChoose('store')}
        >
          <svg
            viewBox="0 0 512 512"
            fill="currentColor"
            height="1em"
            width="1em"
            fontSize={30}
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={32}
              d="M448 448V240M64 240v208M382.47 48H129.53c-21.79 0-41.47 12-49.93 30.46L36.3 173c-14.58 31.81 9.63 67.85 47.19 69h2c31.4 0 56.85-25.18 56.85-52.23 0 27 25.46 52.23 56.86 52.23s56.8-23.38 56.8-52.23c0 27 25.45 52.23 56.85 52.23s56.86-23.38 56.86-52.23c0 28.85 25.45 52.23 56.85 52.23h1.95c37.56-1.17 61.77-37.21 47.19-69l-43.3-94.54C423.94 60 404.26 48 382.47 48zM32 464h448M136 288h80a24 24 0 0124 24v88h0-128 0v-88a24 24 0 0124-24zM288 464V312a24 24 0 0124-24h64a24 24 0 0124 24v152"
            />
          </svg>
          <p>
            <Trans>Store</Trans>
          </p>
        </a>
        <a
          href='/#about'
          className={`${choose == 'about' ? ' choose' : ''}`}
          onClick={() => setChoose('about')} >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1em"
            width="1em"
            fontSize={30}
          >
            <path d="M11.445 21.832a1 1 0 001.11 0l9-6A.998.998 0 0021.8 14.4l-9-12c-.377-.504-1.223-.504-1.6 0l-9 12a1 1 0 00.245 1.432l9 6zM13 19.131V6l6.565 8.754L13 19.131zM11 6v13.131l-6.565-4.377L11 6z" />
          </svg>
          <p><Trans>Mathematical model</Trans>
          </p>
        </a>
        <a
          href='/#document'
          className={`${choose == 'document' ? ' choose' : ''}`}
          onClick={() => setChoose('document')} >
          <svg fill="none" viewBox="0 0 24 24" height="1em" width="1em" fontSize={30}>
            <path
              fill="currentColor"
              d="M7 18h10v-2H7v2zM17 14H7v-2h10v2zM7 10h4V8H7v2z"
            />
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M6 2a3 3 0 00-3 3v14a3 3 0 003 3h12a3 3 0 003-3V9a7 7 0 00-7-7H6zm0 2h7v5h6v10a1 1 0 01-1 1H6a1 1 0 01-1-1V5a1 1 0 011-1zm9 .1A5.009 5.009 0 0118.584 7H15V4.1z"
              clipRule="evenodd"
            />
          </svg>
          <p><Trans>Document</Trans>
          </p>
        </a>
        <a
          href='/#contact'
          className={`${choose == 'contact' ? ' choose' : ''}`}
          onClick={() => setChoose('contact')}
        >
          <svg fill="none" viewBox="0 0 15 15" height="1em" width="1em" fontSize={30}>
            <path
              fill="currentColor"
              d="M2 12.5v.5h1v-.5H2zm5 0v.5h1v-.5H7zm-4 0V12H2v.5h1zm4-.5v.5h1V12H7zm-2-2a2 2 0 012 2h1a3 3 0 00-3-3v1zm-2 2a2 2 0 012-2V9a3 3 0 00-3 3h1zm2-8a2 2 0 00-2 2h1a1 1 0 011-1V4zm2 2a2 2 0 00-2-2v1a1 1 0 011 1h1zM5 8a2 2 0 002-2H6a1 1 0 01-1 1v1zm0-1a1 1 0 01-1-1H3a2 2 0 002 2V7zM1.5 3h12V2h-12v1zm12.5.5v8h1v-8h-1zm-.5 8.5h-12v1h12v-1zM1 11.5v-8H0v8h1zm.5.5a.5.5 0 01-.5-.5H0A1.5 1.5 0 001.5 13v-1zm12.5-.5a.5.5 0 01-.5.5v1a1.5 1.5 0 001.5-1.5h-1zM13.5 3a.5.5 0 01.5.5h1A1.5 1.5 0 0013.5 2v1zm-12-1A1.5 1.5 0 000 3.5h1a.5.5 0 01.5-.5V2zM9 6h3V5H9v1zm0 3h3V8H9v1zm-9 6h15v-1H0v1zM3 0v2.5h1V0H3zm8 0v2.5h1V0h-1z"
            />
          </svg>
          <p>
            <Trans>Contact</Trans>
          </p>
        </a>
      </>
    )
  }

  const UserMenuSignIn = () => {
    return (
      <>
        <a href='/signin' className=''>
          <svg
            viewBox="0 0 900 1000"
            fill="currentColor"
            height="1em"
            width="1em"
            fontSize={30}
          >
            <path d="M800 50c28 0 51.667 9.667 71 29s29 43 29 71v700c0 26.667-9.667 50-29 70s-43 30-71 30H350c-26.667 0-49.667-10-69-30s-29-43.333-29-70V750h98v100h450V150H350v150h-98V150c0-28 9.667-51.667 29-71s42.333-29 69-29h450M450 720V600H0V450h450V330l200 194-200 196" />
          </svg>
          <p>
            <Trans>Sign In</Trans>
          </p>
        </a>
        <a href='/cart'>
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="1em"
            width="1em"
            fontSize={30}
          >
            <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 00-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 100 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 00-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 00-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6z" />
          </svg>
          <p>
            <Trans>Cart</Trans>
          </p>
        </a>
        <a href='/purchase'>
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1em"
            width="1em"
            fontSize={30}
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M20 22H4a1 1 0 01-1-1V3a1 1 0 011-1h16a1 1 0 011 1v18a1 1 0 01-1 1zm-1-2V4H5v16h14zM8 9h8v2H8V9zm0 4h8v2H8v-2z" />
          </svg>
          <p>
            <Trans>Purchase</Trans>
          </p>
        </a>
        <a href='/forum'>
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1em"
            width="1em"
            fontSize={30}
          >
            <path d="M15 4v7H5.17L4 12.17V4h11m1-2H3a1 1 0 00-1 1v14l4-4h10a1 1 0 001-1V3a1 1 0 00-1-1m5 4h-2v9H6v2a1 1 0 001 1h11l4 4V7a1 1 0 00-1-1z" />
          </svg>
          <p>
            <Trans>Forum</Trans>
          </p>
        </a>
        <a href='#store'>
          <svg
            viewBox="0 0 512 512"
            fill="currentColor"
            height="1em"
            width="1em"
            fontSize={30}
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={32}
              d="M262.29 192.31a64 64 0 1057.4 57.4 64.13 64.13 0 00-57.4-57.4zM416.39 256a154.34 154.34 0 01-1.53 20.79l45.21 35.46a10.81 10.81 0 012.45 13.75l-42.77 74a10.81 10.81 0 01-13.14 4.59l-44.9-18.08a16.11 16.11 0 00-15.17 1.75A164.48 164.48 0 01325 400.8a15.94 15.94 0 00-8.82 12.14l-6.73 47.89a11.08 11.08 0 01-10.68 9.17h-85.54a11.11 11.11 0 01-10.69-8.87l-6.72-47.82a16.07 16.07 0 00-9-12.22 155.3 155.3 0 01-21.46-12.57 16 16 0 00-15.11-1.71l-44.89 18.07a10.81 10.81 0 01-13.14-4.58l-42.77-74a10.8 10.8 0 012.45-13.75l38.21-30a16.05 16.05 0 006-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 00-6.07-13.94l-38.19-30A10.81 10.81 0 0149.48 186l42.77-74a10.81 10.81 0 0113.14-4.59l44.9 18.08a16.11 16.11 0 0015.17-1.75A164.48 164.48 0 01187 111.2a15.94 15.94 0 008.82-12.14l6.73-47.89A11.08 11.08 0 01213.23 42h85.54a11.11 11.11 0 0110.69 8.87l6.72 47.82a16.07 16.07 0 009 12.22 155.3 155.3 0 0121.46 12.57 16 16 0 0015.11 1.71l44.89-18.07a10.81 10.81 0 0113.14 4.58l42.77 74a10.8 10.8 0 01-2.45 13.75l-38.21 30a16.05 16.05 0 00-6.05 14.08c.33 4.14.55 8.3.55 12.47z"
            />
          </svg>
          <p >
            <Trans>Setting</Trans>
          </p>
        </a>
        <a onClick={LogOut}>
          <svg
            viewBox="0 0 21 21"
            fill="currentColor"
            height="1em"
            width="1em"
            fontSize={30}
          >
            <g
              fill="none"
              fillRule="evenodd"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14.595 13.5l2.905-3-2.905-3M17.5 10.5h-9M14.5 3.5l-8 .002c-1.104.001-2 .896-2 2v9.995a2 2 0 002 2h8.095" />
            </g>
          </svg>
          <p ><Trans>Sign out</Trans>
          </p>
        </a>
      </>
    )
  }

  const UserMenu = () => {
    return (
      <>
       <a href='/profile' className=''>
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1em"
            width="1em"
            fontSize={30}
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M2 3.993A1 1 0 012.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 01-.992.993H2.992A.993.993 0 012 20.007V3.993zM4 5v14h16V5H4zm2 2h6v6H6V7zm2 2v2h2V9H8zm-2 6h12v2H6v-2zm8-8h4v2h-4V7zm0 4h4v2h-4v-2z" />
          </svg>
          <p>
            <Trans>Profile</Trans>
          </p>
        </a>
        <a href='/study' className=''>
          <svg
            fill="currentColor"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            fontSize={30}
          >
            <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 000 2.5v11a.5.5 0 00.707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 00.78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0016 13.5v-11a.5.5 0 00-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
          </svg>
          <p>
            <Trans>Study space</Trans>
          </p>
        </a>
        <a href='/cart'>
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="1em"
            width="1em"
            fontSize={30}
          >
            <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 00-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 100 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 00-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 00-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6z" />
          </svg>
          <p>
            <Trans>Cart</Trans>
          </p>
        </a>
        <a href='/purchase'>
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1em"
            width="1em"
            fontSize={30}
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M20 22H4a1 1 0 01-1-1V3a1 1 0 011-1h16a1 1 0 011 1v18a1 1 0 01-1 1zm-1-2V4H5v16h14zM8 9h8v2H8V9zm0 4h8v2H8v-2z" />
          </svg>
          <p>
            <Trans>Purchase</Trans>
          </p>
        </a>
        <a href='/forum'>
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1em"
            width="1em"
            fontSize={30}
          >
            <path d="M15 4v7H5.17L4 12.17V4h11m1-2H3a1 1 0 00-1 1v14l4-4h10a1 1 0 001-1V3a1 1 0 00-1-1m5 4h-2v9H6v2a1 1 0 001 1h11l4 4V7a1 1 0 00-1-1z" />
          </svg>
          <p>
            <Trans>Forum</Trans>
          </p>
        </a>
        <a href='#store'>
          <svg
            viewBox="0 0 512 512"
            fill="currentColor"
            height="1em"
            width="1em"
            fontSize={30}
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={32}
              d="M262.29 192.31a64 64 0 1057.4 57.4 64.13 64.13 0 00-57.4-57.4zM416.39 256a154.34 154.34 0 01-1.53 20.79l45.21 35.46a10.81 10.81 0 012.45 13.75l-42.77 74a10.81 10.81 0 01-13.14 4.59l-44.9-18.08a16.11 16.11 0 00-15.17 1.75A164.48 164.48 0 01325 400.8a15.94 15.94 0 00-8.82 12.14l-6.73 47.89a11.08 11.08 0 01-10.68 9.17h-85.54a11.11 11.11 0 01-10.69-8.87l-6.72-47.82a16.07 16.07 0 00-9-12.22 155.3 155.3 0 01-21.46-12.57 16 16 0 00-15.11-1.71l-44.89 18.07a10.81 10.81 0 01-13.14-4.58l-42.77-74a10.8 10.8 0 012.45-13.75l38.21-30a16.05 16.05 0 006-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 00-6.07-13.94l-38.19-30A10.81 10.81 0 0149.48 186l42.77-74a10.81 10.81 0 0113.14-4.59l44.9 18.08a16.11 16.11 0 0015.17-1.75A164.48 164.48 0 01187 111.2a15.94 15.94 0 008.82-12.14l6.73-47.89A11.08 11.08 0 01213.23 42h85.54a11.11 11.11 0 0110.69 8.87l6.72 47.82a16.07 16.07 0 009 12.22 155.3 155.3 0 0121.46 12.57 16 16 0 0015.11 1.71l44.89-18.07a10.81 10.81 0 0113.14 4.58l42.77 74a10.8 10.8 0 01-2.45 13.75l-38.21 30a16.05 16.05 0 00-6.05 14.08c.33 4.14.55 8.3.55 12.47z"
            />
          </svg>
          <p>
            <Trans>Setting</Trans>
          </p>
        </a>
        <a onClick={LogOut}>
          <svg
            viewBox="0 0 21 21"
            fill="currentColor"
            height="1em"
            width="1em"
            fontSize={30}
          >
            <g
              fill="none"
              fillRule="evenodd"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14.595 13.5l2.905-3-2.905-3M17.5 10.5h-9M14.5 3.5l-8 .002c-1.104.001-2 .896-2 2v9.995a2 2 0 002 2h8.095" />
            </g>
          </svg>
          <p><Trans>Sign out</Trans>
          </p>
        </a>
      </>
    )
  }

  return (
    <div>

      <>
        <div className={'modal-left' + ((modalLeft) ? ' slide-right' : ' slide-left')} onClick={() => { setModalLeft(!modalLeft) }}>
          <div
            onClick={(e) => e.stopPropagation()}
            id='modal-left-content'
            className={'modal-left-content'} >
            <div className='modal-left-content-header'>
              <img width={45} src={MathmysticLogo} alt="" />
              <a>

                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  onClick={() => setModalLeft(!modalLeft)}
                  className='close-icon'
                  fontSize={40}
                >
                  <path
                    fill="currentColor"
                    d="M6.225 4.811a1 1 0 00-1.414 1.414L10.586 12 4.81 17.775a1 1 0 101.414 1.414L12 13.414l5.775 5.775a1 1 0 001.414-1.414L13.414 12l5.775-5.775a1 1 0 00-1.414-1.414L12 10.586 6.225 4.81z"
                  />
                </svg>

              </a>


            </div>
            <div className='modal-left-content-topic'>
              <HomeMenuPhone />
            </div>
            <div className='modal-left-content-footer'>

              <h4>
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="1em"
                  width="1em"

                >
                  <path d="M12 22c5.421 0 10-4.579 10-10S17.421 2 12 2 2 6.579 2 12s4.579 10 10 10zm0-18c4.337 0 8 3.663 8 8s-3.663 8-8 8-8-3.663-8-8 3.663-8 8-8z" />
                  <path d="M12 17c.901 0 2.581-.168 3.707-1.292l-1.414-1.416C13.85 14.735 12.992 15 12 15c-1.626 0-3-1.374-3-3s1.374-3 3-3c.993 0 1.851.265 2.293.707l1.414-1.414C14.582 7.168 12.901 7 12 7c-2.757 0-5 2.243-5 5s2.243 5 5 5z" />
                </svg>
                Providing math solutions since 2023
              </h4>
            </div>
          </div>
          {/* <div style={{ width: (modalLeft ? '1000rem' : '0') }} className={'modal-left-expand'} onClick={() => {
            if (modalLeft == 1)
              setModalLeft(!modalLeft)
          }
          } >

          </div> */}
        </div>

        <div className={'modal-right' + ((modalRight) ? ' slide-left' : ' slide-right')}
          onClick={() => { setModalRight(!modalRight) }}
        >
          <div className={'modal-right-content'}
            onClick={(e) => e.stopPropagation()}
          >
            <div className='modal-right-content-header'>
              <div className='modal-right-content-header-info'>
                <img width={45} height={45} src={foundUser.avatar} alt="" style={{ borderRadius: '50%' }} />
                <div className='modal-right-content-header-info-text'>
                  <h1>{foundUser.name}</h1>
                  <p>{fe}</p>
                </div>
              </div>


              <svg
                fill="none"
                viewBox="0 0 24 24"
                height="1em" width="1em"
                className='close-icon'
                fontSize={40} onClick={() => setModalRight(!modalRight)}>
                <path
                  fill="currentColor"
                  d="M6.225 4.811a1 1 0 00-1.414 1.414L10.586 12 4.81 17.775a1 1 0 101.414 1.414L12 13.414l5.775 5.775a1 1 0 001.414-1.414L13.414 12l5.775-5.775a1 1 0 00-1.414-1.414L12 10.586 6.225 4.81z"
                />
              </svg>

            </div>
            <div className='modal-right-content-topic'>
              {localStorage.getItem('user') == undefined ? <UserMenuSignIn /> : <UserMenu />}

            </div>
            <div className='modal-right-content-footer'>

              <h4>
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="1em"
                  width="1em"

                >
                  <path d="M12 22c5.421 0 10-4.579 10-10S17.421 2 12 2 2 6.579 2 12s4.579 10 10 10zm0-18c4.337 0 8 3.663 8 8s-3.663 8-8 8-8-3.663-8-8 3.663-8 8-8z" />
                  <path d="M12 17c.901 0 2.581-.168 3.707-1.292l-1.414-1.416C13.85 14.735 12.992 15 12 15c-1.626 0-3-1.374-3-3s1.374-3 3-3c.993 0 1.851.265 2.293.707l1.414-1.414C14.582 7.168 12.901 7 12 7c-2.757 0-5 2.243-5 5s2.243 5 5 5z" />
                </svg>
                Providing math solutions since 2023
              </h4>
            </div>
          </div>
          {/* <div style={{ width: (modalRight ? '1000rem' : '0') }} className={'modal-right-expand'} onClick={() => {
            if (modalRight == 1)
              setModalRight(!modalRight)
          }
          } >

          </div> */}
        </div>

      </>

      <div className={`navbar ${scrolled ? "scrolled" : ""}`} >

        <div className='navbar-left'>
        <Link to={'/forum'} style={{ zIndex: 1, Cursor: 'pointer' }}><MdOutlineArrowCircleLeft size={40} color="black" /></Link>

          {!0 ?
          
            <a>

              <svg
                className='icons'
                viewBox="0 0 16 16"
                fill="currentColor"
                height="1em"
                width="1em"
                fontSize={40}
                onClick={() => setModalLeft(!modalLeft)}

              >
                <path
                  fillRule="evenodd"
                  d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z"
                />
              </svg>


            </a>

            : ""}


          <div className='navbar-links'>
            <a href='/' className='navbar-links-logo' style={{ cursor: 'pointer' }}>
              <img src={MathmysticLogo} alt='logo' />
              <h1>MATHMYSTIC</h1>
            </a>
            {!isDesktop ? "" :
              <div className='navbar-container-links'>
                {/* <HomeMenu /> */}
              </div>
            }

          </div>
        </div>



        <div className='navbar-right'>

          <p>
            <img onClick={() => cl()} className='flag-icon' src={language ? EnglishLanguage : VietnamLanguage} alt="" width={35} height={35} />
          </p>

          <a href="/cart">
            <svg

              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="1em"
              width="1em"
              className='icons'
              fontSize={40}
            >
              <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 00-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 100 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 00-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 00-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6z" />
            </svg>
          </a>





          <a href="/forum">
            <svg
              fill="currentColor"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              className='icons'
              fontSize={40}
            >
              <path d="M5 8a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2z" />
              <path d="M2.165 15.803l.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 008 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 01-.524 2.318l-.003.011a10.722 10.722 0 01-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 00.693-.125zm.8-3.108a1 1 0 00-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 01-2.088-.272 1 1 0 00-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 00.398-2z" />
            </svg>
          </a>



          <svg
            viewBox="0 0 448 512"
            fill="currentColor"
            height="1em"
            width="1em"
            onClick={() => setModalRight(!modalRight)}
            className='icons'
            fontSize={40}
          >

            <path d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32 0-97.2-78.8-176-176-176zM48.99 464c7.9-63.1 61.81-112 127.01-112h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128S294.69 0 224 0 96 57.31 96 128c0 70.7 57.3 128 128 128zm0-208c44.11 0 80 35.89 80 80s-35.89 80-80 80-80-35.9-80-80c0-44.11 35.9-80 80-80z" />
          </svg>

        </div>

      </div>
      {isOpenPopupSuccessSignOut1 ? <PopupSuccessSignUp1 setIsOpenPopupSuccessSignUp1={setIsOpenPopupSuccessSignOut1} /> : ""}
    </div>

  )
}

export default NavBarWoutMenuLogo