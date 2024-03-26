/*Module before File after */
import { useState, useEffect, React } from 'react'
import { Trans, withTranslation, useTranslation } from 'react-i18next';
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, updateDoc } from 'firebase/firestore'
import { useMediaQuery } from 'react-responsive'


import db from '../../../../firebase'
// import './Model.css'
import MathmysticPet from '../../../assets/img/MathmysticPet.png';
import MathmysticLogo from '../../../assets/img/MathmysticLogo.png'

const Model = () => {
    /* Necessary function */
    const [t, i18n] = useTranslation()
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1050px)'
    })

    
    return (
        <div style={{width: "90%", height: "60vh"}}>
            <iframe src="https://www.geogebra.org/classic/nf6e6pad?embed" name="report" height="100%" width="100%" 
                allowFullScreen style={{border: "1px solid #e4e4e4", borderRadius: 4}}
                 frameBorder="0">

                </iframe>     
        </div>
    )
}

export default Model
