import React, { useContext } from "react";
import { MenuContext } from "react-flexible-sliding-menu";
import { IoCloseSharp } from "react-icons/io5";
import { useMediaQuery } from 'react-responsive'
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";
import { CiLogin } from "react-icons/ci";
import './NavBar.css'

var LogOut = () => {
  localStorage.removeItem('user')
  localStorage.removeItem('userAvatar')
  localStorage.removeItem('userName')
  window.location.href = '/'
  localStorage.setItem('loggedin', '3')

}

function Menu() {
  const l = localStorage.getItem('lang') == 'en'
  const { closeMenu } = useContext(MenuContext);
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1050px)'
  })
  const HomeMenu = () => {
    return (
      <>
        <a href='/#home'><p><Trans>{l ? 'Home' : 'Trang chủ'}</Trans></p></a>
        <a href='/#introduction'><p><Trans>{l ? 'Introduction' : 'Giới thiệu'}</Trans></p></a>
        <a href='/#about'><p><Trans>{l ? 'About' : 'Thông tin'}</Trans></p></a>
        <a href='/#document'><p><Trans>{l ? 'Document' : 'Tài liệu'}</Trans></p></a>
        <a href='/#store'><p><Trans>{l ? 'Store' : 'Cửa hàng'}</Trans></p></a>
        <a href='/#contact'><p><Trans>{l ? 'Contact' : 'Liên hệ'}</Trans></p></a>
        <a href='/cart'><p><Trans>Cart</Trans></p></a>
        <a href='/forum'><p><Trans>Forum</Trans></p></a>
      </>
    )
  }
  const UserMenu = () => {
    return (
      <>
        <a href='/profile'><p><Trans>{l ? 'Profile' : 'Hồ sơ'}</Trans></p></a>
        <a href='/playground'><p>{l ? 'Playground' : 'Sân chơi'}</p></a>
        <a href='/cart'><p>{l ? 'Cart' : 'Giỏ hàng'}</p></a>
        <a href='/forum'><p>{l ? 'Forum' : 'Diễn đàn'}</p></a>
        <a href='/setting'><p>{l ? 'Setting' : 'Cài đặt'}</p></a>
        <a href='/' onClick={LogOut}><p>{l ? 'Log Out' : 'Đăng xuất'}</p></a>
      </>
    )
  }

  const LogInMenu = () => {
    return (
      <>
        <a href='/login'><p>{l ? 'Log In' : 'Đăng nhập'}</p></a>
        <a href='/signup'><p>{l ? 'Sign Up' : 'Đăng ký'}</p></a>
        <a href='/playground'><p>{l ? 'PLayground' : 'Sân chơi'}</p></a>
        <a href='/cart'><p>{l ? 'Cart' : 'Giỏ hàng'}</p></a>
        <a href='/forum'><p>{l ? 'Forum' : 'Diễn đàn'}</p></a>
        <a href='/setting'><p>{l ? 'Setting' : 'Cài đặt'}</p></a>
      </>
    )
  }

  const CheckLogInMenu = () => {
    const user = localStorage.getItem('user')
    console.log(user)
    return (
      <>
        {user != null ? <UserMenu /> : <LogInMenu />}
      </>
    )
  }

  return (
    <div className="mmt__menu">
      
        <span className="mmt__menu-info">
          {(!(localStorage.getItem('user') == undefined) && localStorage.getItem('open') == '1') ?
            <>
              <img src={localStorage.getItem('userAvatar')} style={{ width: 50, height: 50, margin: 0, borderRadius: 50 }} />
              <h4>{localStorage.getItem('userName')}</h4>
            </>

            : <h3></h3>}

          <button onClick={closeMenu}>
            <IoCloseSharp size={35} className="mmt__menu-close-button" />
          </button>
        </span>

      
      {((!isDesktopOrLaptop) || !(localStorage.getItem('open2') == '1')) ?
        ((localStorage.getItem('open') == '1') ?
          <CheckLogInMenu /> : <HomeMenu />) : <CheckLogInMenu />}

    </div>
  );
}

export default Menu;
