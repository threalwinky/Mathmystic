/*Module before File after */
import { useState, useEffect, React, useRef } from 'react'
import { Trans, withTranslation, useTranslation } from 'react-i18next';
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, updateDoc } from 'firebase/firestore'
import { useMediaQuery } from 'react-responsive'
// import { AFrameRenderer, Marker } from 'react-web-ar'

import db from '../../../../firebase'
// import './AR.css'
import MathmysticPet from '../../../assets/img/MathmysticPet.png';
import MathmysticLogo from '../../../assets/img/MathmysticLogo.png'
// import {a} from './index.html'
const AR = () => {
    /* Necessary function */
    const [t, i18n] = useTranslation()
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1050px)'
    })

    // const a = "<iframe src='./index.html'/>"
    // var __html = require('./template.html');
    // var template = { __html: __html };
    
    return (
        <div>
              {/* <AFrameRenderer inherent={true}>
        <Marker parameters={{ preset: "hiro" }}>
          <a-box color="blue" position="0 0.09 0" scale="0.4 0.8 0.8">
            <a-animation
              attribute="rotation"
              to="360 0 0"
              dur="2000"
              easing="linear"
              repeat="indefinite"
            />
          </a-box>
        </AFrameRenderer> */}
        {/* </Marker> */}

        <div style={{height: '80vh', width: '80vw'}} >  
              <iframe allowFullScreen='yes' allow='camera' src={'https://coffee-alfy-27.tiiny.site/'} frameborder="0" scrolling='no' style={{height: '100%', width: '100%'}}></iframe>


        </div>
        {/* <div dangerouslySetInnerHTML={{__html : a}}> */}

        {/* </div> */}
        </div>
    )
}

export default AR
