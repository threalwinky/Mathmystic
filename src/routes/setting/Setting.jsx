/*Module before File after */
import { useState, useEffect, React } from 'react'
import { Trans, withTranslation, useTranslation } from 'react-i18next';
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, updateDoc } from 'firebase/firestore'
import { useMediaQuery } from 'react-responsive'
import b from '../../assets/audio/hdtr7.mp3'


import db from '../../../firebase'
import './Setting.css'
import MathmysticPet from '../../assets/img/MathmysticPet.png';
import MathmysticLogo from '../../assets/img/MathmysticLogo.png'

const Setting = () => {
    /* Necessary function */
    const [t, i18n] = useTranslation()
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1050px)'
    })

    const test = () => {
        const ad = new Audio(b)
        // ad.muted = true
        ad.play()
        console.log(1234)
    }

    return (
        <div onDoubleClick={test} className='setting'>
            <button onDoubleClick={test}>

            </button>
        </div>
    )
}

export default Setting
