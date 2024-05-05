/*Module before File after */
import { useState, useEffect, React, useRef } from 'react'
import { Trans, withTranslation, useTranslation } from 'react-i18next';
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, updateDoc } from 'firebase/firestore'
import { useMediaQuery } from 'react-responsive'
import { ToastContainer, toast } from 'react-toastify';


import db from '../../../firebase'
import './Test.css'
import MathmysticPet from '../../assets/img/MathmysticPet.png';
import MathmysticLogo from '../../assets/img/MathmysticLogo.png'
import { motion, useCycle, useScroll, useSpring, sync } from "framer-motion"
import { useDimensions } from './use-dimensions';


import { MenuToggle } from "./MenuToggle.jsx";
import { Navigation } from "./Navigation";
import Carousel from './Carousel.jsx';
// import Demo from './demo.html'

const Test = () => {
    /* Necessary function */
    const [t, i18n] = useTranslation()
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1050px)'
    })

    const imgs = [
        MathmysticLogo,
        MathmysticLogo,
        MathmysticPet,
        MathmysticLogo,
        MathmysticLogo,
        MathmysticPet, MathmysticLogo,
        MathmysticLogo,
        MathmysticPet,
    ]

    function iframe() {
        return {
            __html: '<iframe src="./demo.html" width="540" height="450"></iframe>'
        }
    }
    return (
        <div>
            {/* <Carousel slides={imgs}></Carousel> */}
            {/* <iframe
             allowFullScreen="true" 
             class="fp-iframe" 
             src={Demo}
            //  style="border: 1px solid lightgray; width: 100%; height: 400px;"
             className='w-full h-[400px] '
             >

            </iframe> */}
            {/* <iframe src='./data/hdsd.html' allowFullScreen={true} className='fp-iframe w-full h-56 ' >

            </iframe>
            <div>
            </div> */}

            <button onClick={() => localStorage.setItem("w", 213)}>123</button>
            <button onClick={() => sessionStorage.clear()}>Clear session</button>
            <button onClick={() => localStorage.clear()}>Clear local</button>
            {}
        </div>

    )
}

export default Test
