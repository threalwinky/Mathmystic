/*Module before File after */
import { useState, useEffect, React } from 'react'
import { Trans, withTranslation, useTranslation } from 'react-i18next';
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, updateDoc } from 'firebase/firestore'
import { useMediaQuery } from 'react-responsive'
import { ToastContainer, toast } from 'react-toastify';
import Popup from 'reactjs-popup';

import db from '../../../firebase'
import './Home.css'
import MathmysticPet from '../../assets/img/MathmysticPet.png';
import MathmysticLogo from '../../assets/img/MathmysticLogo.png'
import 'reactjs-popup/dist/index.css';
import { Ellipsis } from './HomeIcon';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import { About, Introduction, NavBar, Chatbot, Document, Contact, Feature, Footer } from '../../components';
const Home = () => {
    /* Necessary function */
    const [t, i18n] = useTranslation()
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1050px)'
    })

    const PopupContent = () => {

        const liStyle = 'text-start hover:bg-sky-200 p-2 rounded-md cursor-pointer'

        return (
            <div className='flex flex-col p-1'>
                <ul >
                    <li className={liStyle}>Report</li>
                    <li className={liStyle}>PIn</li>
                    <li className={liStyle}>Change</li>
                    <li className={liStyle}>Delete</li>

                </ul>
            </div>
        )
    }

    useEffect(() => {
        if (localStorage.getItem("user") == null)
        localStorage.setItem("user", "guest")
        if (localStorage.getItem("lg") != null){
            toast.success(localStorage.getItem("lg"))
            
            localStorage.removeItem("lg")
        }
    }, [])

    // useEffect(() => {
    //     toast.success(123)
    // })

    return (
        <div className='absolute'>
            
            {/* <Navbar/> */}

            {/* <Popup
                trigger={
                    <button>
                        <Ellipsis />
                    </button>
                } 
                position="top center"
                
                >
                {close => (
                    <PopupContent />
                )}
            </Popup> */}
            
            
            <NavBar/>
            <Header/>
            <Introduction/>
            
            <Feature/>
            <About/>
            <Document/>
            <Contact/>
            <Footer/>
            <Chatbot/>
            
        </div>
    )
}

export default Home
