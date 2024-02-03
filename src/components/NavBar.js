import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/vn.png';
import navIcon2 from '../assets/img/en.webp';
import navIcon3 from '../assets/img/en.webp';
import { translate, Trans, withTranslation } from 'react-i18next';

import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";
import i18n from '../i18n'
export const NavBar = () => {
  // const { t, i18n } = this.props;

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  // const { t, i18n } = this.props;

  // const changeLanguage = (lng) => {
  //   i18n.changeLanguage(lng);
  // }
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

  return (
    
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <div className="header">
            <img src={logo} alt="Logo" style={{width: 50}}/>
            <h1 style={{marginTop : 10}}>MATHMYSTIC</h1>
            </div>
            
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}><Trans>Home</Trans></Nav.Link>
              <Nav.Link href="#intro" className={activeLink === 'intro' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('intro')}><Trans>Introduction</Trans></Nav.Link>
              <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}><Trans>About</Trans></Nav.Link>
              <Nav.Link href="#doc" className={activeLink === 'doc' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('doc')}><Trans>Documentation</Trans></Nav.Link>
              <Nav.Link href="#store" className={activeLink === 'store' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('store')}><Trans>Store</Trans></Nav.Link>
              <Nav.Link href="#chat" className={activeLink === 'chat' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('chat')}><Trans>Chat</Trans></Nav.Link>
              // <Nav.Link href="#connect" className={activeLink === 'connect' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('connect')}><Trans>Contact</Trans></Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a onClick={() => changeLanguage("vn")}><img src={navIcon1} style={{width : 25}} alt="Vietnamese" /></a>

                <a onClick={() => changeLanguage("en")}><img src={navIcon3} style={{width : 25}} alt="English" /></a>

              </div>
              <HashLink to='#connect'>
                {/* <button className="vvd"><span>Let’s Connect</span></button> */}
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
  )
}
