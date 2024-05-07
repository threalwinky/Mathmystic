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


const Test = () => {
    /* Necessary function */
    const [t, i18n] = useTranslation()
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1050px)'
    })

    const download = () => {
        const url = "https://d3jy31tj1gt845.cloudfront.net/reactdigitalgarden/json/menu.json"
        fetch(url)
            .then((response) => response.blob())
            .then((blob) => {
                const url = window.URL.createObjectURL(new Blob([blob]));
                const link = document.createElement("a");
                link.href = url;
                link.download = "menu.json" || "downloaded-file";
                document.body.appendChild(link);

                link.click();

                document.body.removeChild(link);
                window.URL.revokeObjectURL(url);
            })
            .catch((error) => {
                console.error("Error fetching the file:", error);
            });
    }

    // const txt = "text-slate-300 font-rbt text-xl font-semibold tracking-wide"
    // const { scrollYProgress } = useScroll();
    // const scaleX = useSpring(scrollYProgress, {
    //     stiffness: 100,
    //     damping: 30,
    //     restDelta: 0.001
    // });
    // const [isOpen, toggleOpen] = useCycle(false, true);
    // const containerRef = useRef(null);
    // const { height } = useDimensions(containerRef);
    // const sidebar = {
    //     open: (height = 1000) => ({
    //         clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    //         transition: {
    //             type: "spring",
    //             stiffness: 20,
    //             restDelta: 2,
    //         },
    //     }),
    //     closed: {
    //         clipPath: "circle(30px at 240px 40px)",
    //         transition: {
    //             delay: 0.5,
    //             type: "spring",
    //             stiffness: 400,
    //             damping: 40,
    //         },
    //     },
    // };
    return (
        <div>
            {/* <motion.div
                
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{  opacity: 0, transition: { duration: 0.2 } }}
                transition={{ delay: 0, duration: 0.5 }}
            >
                <div className='flex'>
                    <p>123</p>
                    <button>123</button>
                </div>
            </motion.div> */}
            {/* <motion.nav
                initial={false}
                animate={isOpen ? "open" : "closed"}
                custom={height}
                ref={containerRef}
                className='absolute top-0 right-0 bottom-0 w-[18rem] pl-2'
            >
                <motion.div className="top-0 right-0 bottom-0 bg-sky-500 w-[17.4rem] absolute" variants={sidebar}  />
                <Navigation />
                <MenuToggle toggle={() => toggleOpen()} />
            </motion.nav> */}

            {/* <motion.div className="progress-bar fixed top-0 left-0 right-0 h-1 bg-sky-300 opacity-30 origin-left rounded-full" style={{ scaleX }} />

            <div className='flex justify-center items-center bg-slate-800 h-screen w-full'>


            </div>
            <div className='flex justify-center items-center bg-sky-800 h-screen w-full'>
                <motion.div
                    className='w-36 h-36 bg-white'
                    animate={{
                        animationDuration: 3
                    }}
                    initial={{
                        opacity: 0,
                        scale: 0.5
                    }}
                    whileInView={{
                        // scale: [1, 2, 2, 1, 1],
                        // rotate: [0, 0, 270, 270, 0],
                        // borderRadius: ["20%", "20%", "50%", "50%", "20%"], 
                        // translateX: 0,
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{ duration: 0.5}}
                // viewport={{ once: true }}
                />


            </div> */}

            {/* <button
                onClick={() => download()}
                className='bg-red-300 p-2 px-4 rounded-lg m-3 hover:bg-red-200'>Download</button> */}

        </div>

    )
}

export default Test
