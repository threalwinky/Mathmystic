import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { CiPhone } from "react-icons/ci";

import MathmysticLogo from "../../assets/img/MathmysticLogo.png";
import LinkedinIcon from "../../assets/img/LinkedinIcon.svg";
import FacebookIcon from "../../assets/img/FacebookIcon.svg";
import InstagramIcon from "../../assets/img/InstagramIcon.svg";
import Mail from '../mail/Mail'
import './Footer.css'
import { Trans } from 'react-i18next';
const Footer = () => {
  return (
    <div>
      <footer className="footer">
      <Container>
        <Row className="align-items-center">
        {/* <Mail /> */}
          <Col size={12} sm={6}>
            <div className='mmt__footer'>
            <h4><Trans>Get In Touch</Trans></h4>
            <br></br>
            <CiLocationOn></CiLocationOn> 
            
            <Trans>Location : 18, Le Thuc Hoach Street, Phu Tho Hoa Ward, Tan Phu District, Ho Minh City</Trans>
            
            <br></br>
            <MdOutlineEmail></MdOutlineEmail> Email : mathmystic12345@gmail.com
            <br></br>
            <CiPhone></CiPhone> <Trans>Phone number</Trans> : 0794746779

            <br></br>
            </div>
            
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              
              <a href="https://www.facebook.com/people/Mathmystic/61553045231824/"><img src={FacebookIcon} alt="Icon" /></a>
              <a href="https://www.linkedin.com/in/vu-vo-winky-682203260/"><img src={LinkedinIcon} alt="Icon" /></a>
            </div>
            <p>

            MATHMYSTIC
            <br></br>
            Providing math solutions since 2023 </p>
          </Col>
        </Row>
      </Container>
    </footer>
    </div>
  )
}

export default Footer
