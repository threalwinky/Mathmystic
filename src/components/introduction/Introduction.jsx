/*Module before File after */
import { useState, useEffect, React } from 'react'
import { Trans, withTranslation, useTranslation } from 'react-i18next';
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, updateDoc } from 'firebase/firestore'
import { useMediaQuery } from 'react-responsive'


import db from '../../../firebase'
import './Introduction.css'
import MathmysticPet from '../../assets/img/MathmysticPet.png';
import MathmysticLogo from '../../assets/img/MathmysticLogo.png'
import Introduction1 from '../../assets/img/Introduction1.png'
import Introduction2 from '../../assets/img/Introduction2.png'
import Introduction3 from '../../assets/img/Introduction3.webp'
const Introduction = () => {
    /* Necessary function */
    const [t, i18n] = useTranslation()
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1050px)'
    })


    return (
        <div className='introduction' id='introduction'>
            <h1><Trans>Introduction</Trans></h1>
            <div className='introduction-container'>

                {/* <img src={Introduction1} className='introduction-container_thumbnail' /> */}
                {isDesktopOrLaptop ? <img src={Introduction1} className='introduction-container_thumbnail' /> : ""}
                <div className='introduction-container_content'>
                    <h2><Trans>FEATURES OF THE WEBSITE</Trans></h2>
                    <p>
                        <li>
                            <Trans>
                                Instructions from A to Z: Our website provides step-by-step instructions for creating spatial geometric models from basic to complex.
                            </Trans>

                        </li>
                        <li>
                            <Trans>


                                Interactive lectures: You will practice moving, rotating, and creating spatial geometry according to instructions. This gives you a deeper understanding and more confidence when working with models.
                            </Trans>
                        </li>
                        <li>
                            <Trans>


                                Documentation and examples: In addition to instructions, the site also provides a rich documentation and examples. You can refer to them to enhance your knowledge and create unique models. Documentation and examples: In addition to instructions, the website also provides a rich set of documents and illustrative examples. You can refer to them to enhance your knowledge and create unique models.


                            </Trans>
                        </li>
                    </p>
                </div>
                {!isDesktopOrLaptop ? <img src={Introduction1} className='introduction-container_thumbnail' /> : ""}
            </div>
            <div className='introduction-container'>
                {/* {isDesktopOrLaptop ? <img src={Introduction2} className='introduction-container_thumbnail' /> : ""} */}
                <div className='introduction-container_content'>
                    <h2><Trans>SOLID GEOMETRIC MODEL</Trans></h2>
                    <p><Trans>We have developed a complete geometric modeling kit with a simple, easy-to-use, environmentally friendly design that includes a perforated wooden base, antennas, rubber bands and necessary accessories. other. Through that structure, users can interact and create many different spatial models, helping the spatial learning model become more familiar.</Trans>
                    </p>
                </div>
                {1 ? <img src={Introduction2} className='introduction-container_thumbnail' /> : ""}


            </div>
            <div className='introduction-container'>
                
                {isDesktopOrLaptop ? <img src={Introduction3} className='introduction-container_thumbnail' /> : ""}
                <div className='introduction-container_content'>
                    <h2><Trans>CULTIVATE THINKING, CONNECT KNOWLEDGE,</Trans></h2> <br /><h2><Trans>LIGHT FOR EVERY HEART</Trans></h2>
                    <p>
                        <Trans>
                            The special feature of this project is that it is a finished product
                            completely new to the market, helping to create a teaching medium
                            accessible geometry. Part of the profits from this project will be
                            Dedicated to the Model Creation Fund, to support visually impaired people
                            access to geometry education and promote creativity
                            each person. We are committed to contributing to the community and society
                            and educational work.
                        </Trans>

                    </p>
                </div>
                {!isDesktopOrLaptop ? <img src={Introduction3} className='introduction-container_thumbnail' /> : ""}
            </div>
        </div>
    )
}

export default Introduction
