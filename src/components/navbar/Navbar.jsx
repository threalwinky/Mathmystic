/*Module before File after */
import { useState, useEffect, React, useRef } from 'react'
import { Trans, withTranslation, useTranslation } from 'react-i18next';
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, updateDoc } from 'firebase/firestore'
import { useMediaQuery } from 'react-responsive'
import { ToastContainer, toast } from 'react-toastify';
import { motion, useCycle } from 'framer-motion';
import { Link } from 'react-router-dom';


import db from '../../../firebase'
import './Navbar.css'
import MathmysticPet from '../../assets/img/MathmysticPet.png';
import MathmysticLogo from '../../assets/img/MathmysticLogo.png'
import { useDimensions } from './components/use-dimensions.js';
import { Reorder } from './NavbarIcon.jsx'
import { MenuToggle } from './components/MenuToggle.jsx';
import { Navigation } from './components/Navigation.jsx';
import EnglishLanguage from '../../assets/img/EnglishLanguage3.png'
import VietnamLanguage from '../../assets/img/VietnamLanguage3.jpeg'
const Navbar = ({ show }) => {
    /* Necessary function */
    const [t, i18n] = useTranslation()
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1050px)'
    })
    const [scrolled, setScrolled] = useState(0)
    const [choose, setChoose] = useState(1)
    const l = localStorage.getItem('lang') == 'en'
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    }
    if (localStorage.getItem('lang') === null) localStorage.setItem('lang', 'vn')
    const [language, setLanguage] = useState(localStorage.getItem('lang') == 'vn' ? 0 : 1)
    const cl = () => {
        const l = localStorage.getItem('lang')
        // console.log(localStorage.getItem('i18lng'))
        if (l == 'en') {
            localStorage.setItem('lang', 'vn')
            changeLanguage('vn')
            setLanguage(!language)
        }
        else {
            localStorage.setItem('lang', 'en')
            changeLanguage('en')
            setLanguage(!language)
        }
    }
    var isGuest = (localStorage.getItem("user") == "guest")
    if (localStorage.getItem('lang') === null) localStorage.setItem('lang', 'vn')


    useEffect(() => {
        isGuest = (localStorage.getItem("user") == "guest")
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(1);
            } else {
                setScrolled(0);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);

    }, [])
    const [open, setOpen] = useCycle(false, true)

    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);
    const sidebar = {
        open: (height = 1000) => ({
            clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
            transition: {
                type: "spring",
                stiffness: 20,
                restDelta: 2,
            },
        }),
        closed: {
            clipPath: "circle(30px at 240px 40px)",
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40,
            },
        },
    };
    return (
        <div>

            <div onClick={() => setOpen()} className={` fixed ${open == true ? " bg-slate-600 opacity-70 z-[20]" : " bg-transparent z-[-1] "} w-screen h-screen`}>

            </div>
            <div className={
                `${scrolled == 0 ? "bg-none p-[2rem_2.5rem]" : "bg-sky-400 p-[0.8rem_2.5rem] shadow-lg shadow-slate-700"} 
            bg-none fixed top-0 w-full h-fit z-10
            transition-[0.5s_ease-in-out]
            `}>

                <div className='flex flex-row w-full justify-between z-10'>
                    <div className='w-full max-sm:w-full z-10  '>
                        <div className='flex items-center z-10 w-full gap-3 '>
                            <a className={`${show == "1" ? "" : "hidden"}`} href="#" onClick={() => {javascript:history.back()}}>

                                <svg
                                    viewBox="0 0 1024 1024"
                                    fill="currentColor"
                                    height="1em"
                                    width="1em"
                                    className='icons'
                                    fontSize={40}
                                >
                                    <path d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" />
                                </svg>
                            </a>
                            <a href="/test"><motion.img src={MathmysticLogo} alt="" className='w-10 z-0' /></a>


                            <Link to={'/test'}
                                className='navbar-left-link text-2xl tracking-wide font-rbt font-normal
                            max-xl:hidden
                            '
                            >
                                MATHMYSTIC
                            </Link>
                            <div className={`flex gap-5 ml-2 max-xl:hidden ${show == "1" ? "hidden" : ""}`}>

                                <a href='/#home'>
                                    <p

                                        className={`font-rbt font-semibold text-xl cursor-pointer ${choose == 1 ? " border-b-2 border-solid border-black" : ""}
                                
                                hover:text-[1.4rem]
                                max-xl:hidden
                                
                                `}
                                        onClick={() => setChoose(1)}
                                    >
                                        Trang chủ</p>
                                </a>
                                <a href='/#introduction'>
                                    <p

                                        className={`font-rbt font-semibold text-xl cursor-pointer ${choose == 2 ? " border-b-2 border-solid border-black" : ""}
                                
                                hover:text-[1.4rem]
                                max-xl:hidden
                                `}
                                        onClick={() => setChoose(2)}
                                    >Giới thiệu</p>
                                </a>
                                <a href='/#feature'>
                                    <p
                                        className={`font-rbt font-semibold text-xl cursor-pointer ${choose == 3 ? " border-b-2 border-solid border-black" : ""}
                                
                                hover:text-[1.4rem]
                                max-xl:hidden
                                
                                `}
                                        onClick={() => setChoose(3)}

                                    >Tính năng</p>
                                </a>
                                <a href='/#about'>
                                    <p
                                        className={`font-rbt font-semibold text-xl cursor-pointer ${choose == 4 ? " border-b-2 border-solid border-black" : ""}
                                
                                hover:text-[1.4rem]
                                max-xl:hidden
                                
                                `}
                                        onClick={() => setChoose(4)}
                                    >Mô hình toán học</p>
                                </a>
                                <a href='/#document'>
                                    <p
                                        className={`font-rbt font-semibold text-xl cursor-pointer ${choose == 5 ? " border-b-2 border-solid border-black" : ""}
                                
                                hover:text-[1.4rem]
                                max-xl:hidden
                                
                                `}
                                        onClick={() => setChoose(5)}
                                    >Tài liệu</p>
                                </a>
                                <a href='/#contact'>
                                    <p
                                        className={`font-rbt font-semibold text-xl cursor-pointer ${choose == 6 ? " border-b-2 border-solid border-black" : ""}
                                
                                hover:text-[1.4rem]
                                max-xl:hidden
                                
                                `}
                                        onClick={() => setChoose(6)}
                                    >Liên hệ</p>
                                </a>

                            </div>
                        </div>
                    </div>

                    <div className='w-[20%] max-xl:w-[40rem] flex flex-row justify-end items-center '>

                        {/* <Reorder /> */}
                        <div className='navbar-right'>
                            <div className='flex w-fit gap-3'>
                                <p>
                                    <img onClick={() => cl()} className='flag-icon' src={language ? EnglishLanguage : VietnamLanguage} alt="" width={35} height={35}

                                    />
                                </p>

                                <a href="/store">
                                    <svg

                                        viewBox="0 0 1024 1024"
                                        fill="currentColor"
                                        height="1em"
                                        width="1em"
                                        className='icons'
                                        fontSize={40}
                                    >
                                        <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 00-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 100 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 00-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 00-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6z" />
                                    </svg>
                                </a>




                                <a href="/forum">
                                    <svg
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                        height="1em"
                                        width="1em"
                                        className='icons'
                                        fontSize={40}
                                    >
                                        <path d="M5 8a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2z" />
                                        <path d="M2.165 15.803l.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 008 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 01-.524 2.318l-.003.011a10.722 10.722 0 01-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 00.693-.125zm.8-3.108a1 1 0 00-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 01-2.088-.272 1 1 0 00-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 00.398-2z" />
                                    </svg>
                                </a>

                                <a onClick={() => { setOpen() }} className='z-50'>
                                    {/* <svg
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                        height="1em"
                                        width="1em"
                                        className='icons'
                                        fontSize={40}
                                    >
                                        <path d="M5 8a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2z" />
                                        <path d="M2.165 15.803l.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 008 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 01-.524 2.318l-.003.011a10.722 10.722 0 01-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 00.693-.125zm.8-3.108a1 1 0 00-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 01-2.088-.272 1 1 0 00-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 00.398-2z" />
                                    </svg> */}
                                    <svg
                                        viewBox="0 0 448 512"
                                        fill="currentColor"
                                        height="1em"
                                        width="1em"
                                        className='icons'
                                        fontSize={40}
                                    >
                                        <path d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32 0-97.2-78.8-176-176-176zM48.99 464c7.9-63.1 61.81-112 127.01-112h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128S294.69 0 224 0 96 57.31 96 128c0 70.7 57.3 128 128 128zm0-208c44.11 0 80 35.89 80 80s-35.89 80-80 80-80-35.9-80-80c0-44.11 35.9-80 80-80z" />
                                    </svg>
                                </a>
                                {/* <MenuToggle scrolled={scrolled} toggle={() => { setTimeout(() => setOpen(), 0) }} /> */}
                            </div>


                        </div>
                    </div>

                </div>

            </div>
            <motion.nav
                initial={false}
                animate={open ? "open" : "closed"}
                custom={height}
                ref={containerRef}
                className={`fixed top-0 right-0 bottom-0 w-[18rem] pl-2 ${open == true ? "z-20" : "-z-20"}`}
            >
                <motion.div
                    className={`top-0 right-0 bottom-0 ${open == true ? "bg-sky-300" : "bg-none"} w-[17.4rem] fixed`}
                    variants={sidebar} />
                {open == true ? <Navigation scrolled={scrolled} setOpen={setOpen} isGuest={isGuest} /> : ""}


            </motion.nav>

        </div>

    )
}

export default Navbar
