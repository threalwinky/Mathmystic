/*Module before File after */
import { useState, useEffect, React } from 'react'
import { Trans, withTranslation, useTranslation } from 'react-i18next';
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, updateDoc } from 'firebase/firestore'
import { useMediaQuery } from 'react-responsive'
import { ToastContainer, toast } from 'react-toastify';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import db from '../../../firebase'
import './About.css'
import MathmysticPet from '../../assets/img/MathmysticPet.png';
import MathmysticLogo from '../../assets/img/MathmysticLogo.png'
import { motion } from 'framer-motion';

import HinhBinhHanh from '../../assets/img/About/HinhBinhHanh.jpg';
import HinhCau from '../../assets/img/About/HinhCau.jpg';
import HinhChopTamGiac from '../../assets/img/About/HinhChopTamGiac.jpg';
import HinhChopTamGiacCanhVuong from '../../assets/img/About/HinhChopTamGiacCanhVuong.jpg';
import HinhChopTuGiac from '../../assets/img/About/HinhChopTuGiac.jpg';
import HinhChuNhat from '../../assets/img/About/HinhChuNhat.jpg';
import HinhLangTru from '../../assets/img/About/HinhLangTru.jpg';
import HinhLangTruTuGiac from '../../assets/img/About/HinhLangTruTuGiac.jpg';
import HinhNon from '../../assets/img/About/HinhNon.jpg';
import HinhTamGiac from '../../assets/img/About/HinhTamGiac.jpg';
import HinhTamGiacDuongTronNoiTiep from '../../assets/img/About/HinhTamGiacDuongTronNoiTiep.jpg';
import HinhThang from '../../assets/img/About/HinhThang.jpg';
import HinhTron from '../../assets/img/About/HinhTron.jpg';
import HinhTru from '../../assets/img/About/HinhTru.jpg';
import HinhTuGiac from '../../assets/img/About/HinhTuGiac.jpg';
import HinhVuong from '../../assets/img/About/HinhVuong.jpg';

const About = () => {
    /* Necessary function */
    const [t, i18n] = useTranslation()
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1050px)'
    })

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const CustomDot = () => {
        return (
            <>
            <li onClick={() => onClick()}>
                123
            </li>
            </>
        )
    }

    return (
        <div className='bg-gradient-to-br
        from-rose-300 from-20%
        via-red-300 via-50%
        
        to-rose-400 to-100%
             w-screen h-fit flex items-center justify-center
               flex-col
             pb-10
            
               
             '
             id='about'>

            <motion.h1

                initial={{ scale: 0, opacity: 0 }}
                // animate={{ scale: 1, opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                transition={{ delay: 0, duration: 0.1 }}
                whileInView={{ scale: 1, opacity: 1 }}
                className='mb-8  p-8 px-10 
                bg-gradient-to-br
                from-red-400 from-2%
                via-rose-300 via-50%
                to-rose-400 to-100%
                shadow-zinc-300 
                rounded-3xl shadow-lg text-4xl font-rbt font-bold
                text-white
                [text-shadow:_-3px_3px_4px_var(--lr)]
                
                
                 mt-10'
                viewport={{ once: true }}
            >
                <Trans>About</Trans>
            </motion.h1>
            {/* First */}
            <div className='flex flex-col items-center justify-center mx-56 max-xl:w-full max-xl:px-8'>
                <motion.h2
                    className='font-semibold font-rbt 
                    text-white   text-3xl [text-shadow:_-3px_3px_4px_red]
                    '
                    initial={{ scale: 0, opacity: 0 }}
                    // animate={{ scale: 1, opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.2 } }}
                    transition={{ delay: 0, duration: 0.2 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                >
                    <Trans>How to use</Trans>
                </motion.h2>
                <motion.ul
                    className='px-5'
                >
                    <motion.li
                        className='list-disc list-inside my-3  text-white font-rbt font-medium text-xl [text-shadow:_-1px_1px_1px_red]'
                        initial={{ scale: 0, opacity: 0 }}
                        // animate={{ scale: 1, opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.2 } }}
                        transition={{ delay: 0, duration: 0.3 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                    >
                         <Trans>Step 1: We need to make the bottom of the shape arbitrarily fixed by selecting the wooden board holes and then attaching wooden buttons</Trans>
                        
                    </motion.li>
                    <motion.li
                        className='list-disc list-inside my-3  text-white font-rbt font-medium text-xl [text-shadow:_-1px_1px_1px_red]'
                        initial={{ scale: 0, opacity: 0 }}
                        // animate={{ scale: 1, opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.2 } }}
                        transition={{ delay: 0, duration: 0.5 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                    >
                       
                        <Trans>Step 2: Use recycled elastic band to wrap around to create shape for the bottom.</Trans>
                    </motion.li>
                    <motion.li
                        className='list-disc list-inside my-3  text-white font-rbt font-medium text-xl [text-shadow:_-1px_1px_1px_red]'
                        initial={{ scale: 0, opacity: 0 }}
                        // animate={{ scale: 1, opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.2 } }}
                        transition={{ delay: 0, duration: 0.7 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                    >
                        
                        <Trans>Step 3: Build the height of the model's base with the antenna adjusting the height accordingly.(if needed)</Trans>

                    </motion.li>
                    <motion.li
                        className='list-disc list-inside my-3  text-white font-rbt font-medium text-xl [text-shadow:_-1px_1px_1px_red]'
                        initial={{ scale: 0, opacity: 0 }}
                        // animate={{ scale: 1, opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.2 } }}
                        transition={{ delay: 0, duration: 0.9 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                    >
                      <Trans>Step 4: Connect the elastic bands from the top of the antenna to the wooden wicks to create the side edges of the model</Trans>
                    </motion.li>
                </motion.ul>

            </div>
            <motion.h2
                    className='font-semibold font-rbt 
                    text-white   text-3xl [text-shadow:_-3px_3px_4px_red]
                    '
                    initial={{ scale: 0, opacity: 0 }}
                    // animate={{ scale: 1, opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.2 } }}
                    transition={{ delay: 0, duration: 0.8 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                >
                    <Trans>Collection</Trans>
                </motion.h2>
            <div className='px-56 max-xl:px-14 w-screen'>
            <Carousel 
            showDots
            responsive={responsive}
            className='skill-slider py-10 h-full'
        autoPlay={true}
        
        // customDot={<CustomDot />}
        >
            <div className="item">
                <img src={HinhTamGiac} alt="Image" />
                <h5><Trans>Triangle</Trans></h5>
            </div>

            <div className="item">
                <img src={HinhTuGiac} alt="Image" />
                <h5><Trans>Quadrangle</Trans></h5>
            </div>

            <div className="item">
                <img src={HinhChuNhat} alt="Image" />
                <h5><Trans>Rectangle</Trans></h5>
            </div>

            <div className="item">
                <img src={HinhTron} alt="Image" />
                <h5><Trans>Circle</Trans></h5>
            </div>

            <div className="item">
                <img src={HinhTamGiacDuongTronNoiTiep} alt="Image" />
                <h5><Trans>Triangle with incircle</Trans></h5>
            </div>

            <div className="item">
                <img src={HinhBinhHanh} alt="Image" />
                <h5><Trans>Parallelogram</Trans></h5>
            </div>

            <div className="item">
                <img src={HinhThang} alt="Image" />
                <h5><Trans>Trapezoid</Trans></h5>
            </div>

            <div className="item">
                <img src={HinhVuong} alt="Image" />
                <h5><Trans>Square</Trans></h5>
            </div>

            <div className="item">
                <img src={HinhChopTamGiac} alt="Image" />
                <h5><Trans>Regular triangular pyramid</Trans></h5>
            </div>

            <div className="item">
                <img src={HinhChopTuGiac} alt="Image" />
                <h5><Trans>Regular quadrangular pyramid</Trans></h5>
            </div>

            <div className="item">
                <img src={HinhChopTamGiacCanhVuong} alt="Image" />
                <h5><Trans>Square triangular pyramid</Trans></h5>
            </div>

            <div className="item">
                <img src={HinhLangTru} alt="Image" />
                <h5><Trans>Regular triangular prism</Trans></h5>
            </div>

            <div className="item">
                <img src={HinhLangTruTuGiac} alt="Image" />
                <h5><Trans>Regular quadrangular prism</Trans></h5>
            </div>

            <div className="item">
                <img src={HinhNon} alt="Image" />
                <h5><Trans>Cone</Trans></h5>
            </div>

            <div className="item">
                <img src={HinhTru} alt="Image" />
                <h5><Trans>Cylinder</Trans></h5>
            </div>

            <div className="item">
                <img src={HinhCau} alt="Image" />
                <h5><Trans>Globular</Trans></h5>
            </div>

        </Carousel>
            </div>
            
            
            
        </div>
    )
}

export default About
