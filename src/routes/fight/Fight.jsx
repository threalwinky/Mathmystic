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
                <div className='pt-28 overflow-y-scroll h-screen'>
                    <div className='flex flex-col bg-red-300 p-10'>
                        <div className='bg-green-300'>
                            <Popup

                                trigger={
                                    <motion.button
                                        className="button text-red-800
    bg-white 
    p-2 px-8 rounded-md m-2 cursor-pointer
    hover:border-red-800 border-solid border-2
    hover:scale-110 duration-150
    font-rbt text-lg flex items-center justify-center gap-2"
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        exit={{ opacity: 0, transition: { duration: 0.2 } }}
                                        transition={{ delay: 0, duration: 1 }}
                                    >
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            height="1.3em"
                                            width="1.3em"

                                        >
                                            <path d="M19 9h-4V3H9v6H5l7 8zM4 19h16v2H4z" />
                                        </svg>
                                        <p className='font-rbt font-medium'>
                                            <Trans>Download now</Trans>
                                        </p>
                                    </motion.button>
                                }
                                modal
                                nested
                            >
                                {close => (
                                    <div className="modal w-30 pt-1 px-5">
                                        <div className='p-2 px-4'>
                                            <h1 className='font-rbt text-xl font-bold'>
                                                Download
                                            </h1>
                                        </div>
                                        <div className='h-[0.005rem] w-full bg-gray-300'>

                                        </div>
                                        <div className='flex flex-col gap-5 justify-center items-center font-rbt p-2 text-sm'>
                                            <p>Choose correct version for downloading</p>
                                            <div className='flex gap-5'>
                                                <button className='bg-sky-100 hover:bg-sky-200 shadow-xl p-3 rounded-lg flex flex-col gap-1 justify-center items-center'>
                                                    <div className='flex items-center justify-center gap-2'>
                                                        <Windows />
                                                        <span>.exe</span>
                                                    </div>
                                                    <p>
                                                        Windows
                                                    </p>
                                                </button>
                                                <button className='bg-sky-100 hover:bg-sky-200 shadow-xl p-3 rounded-lg flex flex-col gap-1 justify-center items-center'>
                                                    <div className='flex items-center justify-center gap-2'>
                                                        <Linux />
                                                        <span>.deb</span>
                                                    </div>
                                                    <p>
                                                        Linux
                                                    </p>
                                                </button>
                                                <button className='bg-sky-100 hover:bg-sky-200 shadow-xl p-3 rounded-lg flex flex-col gap-1 justify-center items-center'>
                                                    <div className='flex items-center justify-center gap-2'>
                                                        <Android />
                                                        <span>.apk</span>
                                                    </div>

                                                    <p className=''>
                                                        Android
                                                    </p>
                                                </button>
                                            </div>

                                        </div>
                                        <div className='h-[0.005rem] w-full bg-gray-300 my-2'></div>
                                        <div className='flex justify-end p-2 font-rbt text-sm' >
                                            <button onClick={close}
                                                className=' hover:bg-red-400 text-white bg-red-500 p-1 px-3 rounded-md'>
                                                Close
                                            </button>
                                        </div>

                                    </div>
                                )}
                            </Popup>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>

    )
}

export default Fight
