import React, { useTransition } from 'react'
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import ContactImage from "../../assets/img/ContactImage.webp";
import './Contact.css'
import { Trans, useTranslation } from 'react-i18next';
const Contact = () => {
  const [t, i18n]= useTranslation();
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:3000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ success: true, message: 'Message sent successfully' });
    } else {
      setStatus({ success: false, message: 'Something went wrong, please try again later.' });
    }
  };

  return (
    <div className='mmt__contact' id='contact'>
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img src={ContactImage} alt="Contact Us" className='mmt__contact-image' />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div>
                  <h2><Trans>Contact</Trans></h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
              
                        <input type="text" value={formDetails.firstName} placeholder={t('Last Name')}  onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.lasttName} placeholder={t('First Name')} onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" value={formDetails.email} placeholder={t('Email address')} onChange={(e) => onFormUpdate('email', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" value={formDetails.phone} placeholder={t('Phone number')}  onChange={(e) => onFormUpdate('phone', e.target.value)} />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" value={formDetails.message} placeholder={t('Message')} onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                        <button type="submit" disabled={true}><span><Trans>{buttonText}</Trans></span></button>
                      </Col>
                      {
                        status.message &&
                        <Col>
                          <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                        </Col>
                      }
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contact
