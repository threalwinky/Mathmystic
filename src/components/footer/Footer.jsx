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

                <Trans> Location : 18, Le Thuc Hoach Street, Phu Tho Hoa Ward, Tan Phu District, Ho Minh City</Trans>

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
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                  style={{marginRight: 5}}
                >
                  <path d="M12 22c5.421 0 10-4.579 10-10S17.421 2 12 2 2 6.579 2 12s4.579 10 10 10zm0-18c4.337 0 8 3.663 8 8s-3.663 8-8 8-8-3.663-8-8 3.663-8 8-8z" />
                  <path d="M12 17c.901 0 2.581-.168 3.707-1.292l-1.414-1.416C13.85 14.735 12.992 15 12 15c-1.626 0-3-1.374-3-3s1.374-3 3-3c.993 0 1.851.265 2.293.707l1.414-1.414C14.582 7.168 12.901 7 12 7c-2.757 0-5 2.243-5 5s2.243 5 5 5z" />
                </svg>
                Providing math solutions since 2023

              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  )
}

export default Footer
