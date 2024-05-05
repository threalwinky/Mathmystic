/*Module before File after */
import { useState, useEffect, React } from 'react'
import { Trans, withTranslation, useTranslation } from 'react-i18next';
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, updateDoc } from 'firebase/firestore'
import { useMediaQuery } from 'react-responsive'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { AnimatePresence, motion } from 'framer-motion';


import db from '../../../firebase'
import './Store.css'
import MathmysticPet from '../../assets/img/MathmysticPet.png';
import MathmysticLogo from '../../assets/img/MathmysticLogo.png'
import { Headpage } from '../../containers';

const Store = () => {
    /* Necessary function */
    const [t, i18n] = useTranslation()
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1050px)'
    })

    const [loading, setLoading] = useState(0)

    useEffect(() => {
        setTimeout(() => { setLoading(1) }, 1000)
    },[])
    
    return (
        <div>
            {!loading ? <Headpage/> : 
            
            <div className='w-screen h-screen max-xl:h-screen header-background-color2'>

                    <div>
                        <div>
                            {/* <img src="https://mathmystic.vn/assets/Store1_1-D2ZoX1ZJ.jpeg" alt="" /> */}
                        </div>
                        <div>
                            <motion.div
                             className='w-12 bg-red-300'
                            initial={{height : 12}}
                            
                                whileHover={{height : 24}}
                            >
                            



                            </motion.div>
                        </div>
                    </div>
                    
            </div>
            
            }
        </div>
    )
}

export default Store
