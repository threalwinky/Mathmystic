/*Module before File after */
import { useState, useEffect, React } from 'react'
import { Trans, withTranslation, useTranslation } from 'react-i18next';
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, updateDoc } from 'firebase/firestore'
import { useMediaQuery } from 'react-responsive'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { AnimatePresence, motion } from 'framer-motion';


import db from '../../../firebase'
import './Fight.css'
import MathmysticPet from '../../assets/img/MathmysticPet.png';
import MathmysticLogo from '../../assets/img/MathmysticLogo.png'
import Navbar from '../../components/navbar/Navbar';
import { Footer } from '../../components';

const Fight = () => {
    /* Necessary function */
    const [t, i18n] = useTranslation()
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1050px)'
    })


    return (
        <div>
            <div className='header-background-color2 h-screen max-xl:h-fit '>
                <Navbar show={"1"} />
                <div className='pt-20 overflow-y-scroll h-screen'>
                    <div className='flex flex-col'>
                        <div className='mb-20'>
                            123
                        </div>
                        <div className='mb-20'>
                            123
                        </div>
                        <div className='mb-20'>
                            123
                        </div>
                        <div className='mb-20'>
                            123
                        </div>
                        <div className='mb-20'>
                            123
                        </div>
                        <div className='mb-20'>
                            123
                        </div>
                        <div className='mb-20'>
                            123
                        </div>
                        <div className='mb-20'>
                            123
                        </div>
                        <div className='mb-20'>
                            123
                        </div>
                        <div className='mb-20'>
                            123
                        </div>
                        <div className='mb-20'>
                            123
                        </div>
                        <div className='mb-20'>
                            123
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>

    )
}

export default Fight
