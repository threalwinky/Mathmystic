/*Module before File after */
import { useState, useEffect, React, useRef } from 'react'
import { Trans, withTranslation, useTranslation } from 'react-i18next';
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, updateDoc } from 'firebase/firestore'
import { useMediaQuery } from 'react-responsive'
import emailjs from '@emailjs/browser';

import db from '../../../firebase'
import './Contact.css'
import MathmysticPet from '../../assets/img/MathmysticPet.png';
import MathmysticLogo from '../../assets/img/MathmysticLogo.png'
import ContactImage from "../../assets/img/ContactImage.webp";
import { LoadingSmall } from '../../containers';

const Contact = () => {
  /* Necessary function */
  const [t, i18n] = useTranslation()
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1050px)'
  })



  const [lastname, setLastname] = useState('')
  const [firstname, setFirstname] = useState('')
  const [email, setEmail] = useState('')
  const [phonenumber, setPhoneNumber] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(0)
  const form = useRef();
  const sendMessage = (e) => {
    
    e.preventDefault()
    if (lastname == ''
      || firstname == ''
      || email == ''
      || phonenumber == ''
      || message == ''
    ) return
    setLastname('')
    setFirstname('')
    setEmail('')
    setMessage('')
    setPhoneNumber('')
    setLoading(1)


    emailjs
      .sendForm(
        'service_iy2pnna',
        'template_5g23zwj',
        form.current, {
        publicKey: 'juRQ3AGP4z6m8siES',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    setTimeout(() => setLoading(0), 1000)


  }

  return (
    <div className='contact' id='contact'>
      <div className="contact-box">
        <div className="contact-box-img">
          <img src={ContactImage} alt="Contact Us" className='contact-image' />
        </div>
        <form ref={form} className="contact-box-form">

          <h2><Trans>Contact</Trans></h2>

          <div className="contact-box-form-row">
            <input
              type="text"
              placeholder={t('Last Name')}
              value={lastname}
              onChange={evt => setLastname(evt.target.value)}
              name='lastname'
            />
            <input
              type="text"
              placeholder={t('First Name')}
              value={firstname}
              onChange={evt => setFirstname(evt.target.value)}
              name='firstname'
            />
          </div>
          <div className="contact-box-form-row">
            <input
              type="text"
              placeholder={t('Email address')}
              value={email}
              onChange={evt => setEmail(evt.target.value)}
              name='email'
            />
            <input
              type="text"
              placeholder={t('Phone number')}
              value={phonenumber}
              onChange={evt => setPhoneNumber(evt.target.value)}
              name='phonenumber'
            />
          </div>
          <div className="contact-box-form-textarea">
            <textarea
              type="text"
              rows={6}
              placeholder={t('Message')}
              value={message}
              onChange={evt => setMessage(evt.target.value)}
              name='message'
            />

          </div>
          <div className='contact-box-form-button'>
            <button
              onClick={(e) => sendMessage(e)}
            >{loading ? <LoadingSmall/> : <Trans>Send</Trans>}
              </button>
          </div>


        </form>
      </div>
    </div>
  )
}

export default Contact
