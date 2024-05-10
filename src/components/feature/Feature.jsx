/*Module before File after */
import { useState, useEffect, React } from 'react'
import { Trans, withTranslation, useTranslation } from 'react-i18next';
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, updateDoc } from 'firebase/firestore'
import { useMediaQuery } from 'react-responsive'
import { ToastContainer, toast } from 'react-toastify';
import { motion } from 'framer-motion';

import db from '../../../firebase'
import './Feature.css'
import MathmysticPet from '../../assets/img/MathmysticPet.png';
import MathmysticLogo from '../../assets/img/MathmysticLogo.png'
import Introduction1 from '../../assets/img/Introduction1.png'
import Introduction2 from '../../assets/img/Introduction2.jpeg'
import Introduction3 from '../../assets/img/Introduction3.webp'
const Feature = () => {
    /* Necessary function */
    const [t, i18n] = useTranslation()
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1050px)'
    })

    const [selected, setSelected] = useState(Introduction1)
    const [selectedIndex, setSelectedIndex] = useState(1)
    const imgs = [
        {
            src: Introduction1
        },
        {
            src: Introduction2
        },
        {
            src: Introduction3
        }
    ]

    useEffect(() => {
        const setImg = setInterval(() => {

            setSelectedIndex(selectedIndex + 1)
            if (selectedIndex == 2) setSelectedIndex(0)
            setSelected(imgs[selectedIndex].src)
            // console.log(123)
            
        }, 3000)
        return () => clearInterval(setImg);
    })

    return (

        <div id="feature" className='bg-gradient-to-br
            from-[#ED9455] from-20%
             via-[#b6650e] via-50%
             to-[#ff8b38] to-80%
             w-screen h-fit flex items-center justify-center
               flex-col
               py-10 px-24 
            
               max-xl:p-24 max-xl:px-10 z-18
             '>
            
            <motion.h1

                style={{ scale: 0, opacity: 0 }}
                // animate={{ scale: 1, opacity: 1 }}
                exit={{ x: 0, transition: { duration: 0.2 } }}
                transition={{ delay: 0, duration: 0.1 }}
                whileInView={{ scale: 1, opacity: 1 }}
                className='mb-20 mt-4 p-8 px-10 
                
                bg-gradient-to-br

             from-[#FFBB70] from-0%
             via-[#ED9455] via-40%
             to-[#FFBB70] to-100%
                
      rounded-3xl shadow-lg text-4xl font-rbt font-bold
                
                
                shadow-zinc-300 
                text-white
                [text-shadow:_-3px_3px_4px_var(--ly)]
                '
                // viewport={{ once: true }}
            >
                <Trans>Feature</Trans>
            </motion.h1>
            {/* First */}
            <div className='flex flex-row max-xl:flex-col-reverse justify-center items-center gap-12 mb-16'>
                <div className='flex w-full items-center justify-center'>
                    <motion.img style={{ x: 300 }}
                        // animate={{ scale: 1, opacity: 1 }}
                        exit={{ x: 0, transition: { duration: 0.7 } }}
                        transition={{ delay: 0, duration: 0.7 }}
                        whileInView={{ x: 0 }}
                        // viewport={{ once: true }}
                        src={Introduction1} alt="" className='rounded-3xl w-10/12 aspect-[16/13]' />
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <motion.h2
                        className='text-3xl font-semibold font-rbt text-center text-[#FFFBDA] [:_-3px_3px_4px_var(--ly)]'
                        style={{ scale: 0, opacity: 0 }}
                        // animate={{ scale: 1, opacity: 1 }}
                        exit={{ x: 0, transition: { duration: 0.2 } }}
                        transition={{ delay: 0, duration: 0.2 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                    >
                        <Trans>FEATURES OF THE WEBSITE</Trans>
                    </motion.h2>
                    <motion.ul
                    // style={{ scale: 0, opacity: 0 }}
                    // animate={{ scale: 1, opacity: 1 }}
                    // exit={{ x: 0, transition: { duration: 0.2 } }}
                    // transition={{ delay: 0, duration: 0.5 }}
                    // whileInView={{ scale:1, opacity:1}}
                    >
                        <motion.li className='text-white [:_-3px_3px_4px_var(--ly)] list-disc list-inside my-3  font-rbt  text-xl'
                            style={{ x:-300 }}
                            initial={false}
                            // animate={{ scale: 1, opacity: 1 }}
                            exit={{ x: 0, transition: { duration: 0.2 } }}
                            transition={{ delay: 0, duration: 0.3 }}
                            whileInView={{ x: 0 }}
                            // viewport={{ once: true }}
                        >
                            <Trans>Instructions from A to Z: Our website provides step-by-step instructions for creating spatial geometric models from basic to complex.</Trans>
                        </motion.li>
                        <motion.li className='text-white [:_-3px_3px_4px_var(--ly)] list-disc list-inside my-3  font-rbt  text-xl'
                            style={{ x:-300 }}
                            // animate={{ scale: 1, opacity: 1 }}
                            exit={{ x: 0, transition: { duration: 0.2 } }}
                            transition={{ delay: 0, duration: 0.5 }}
                            whileInView={{ x: 0 }}
                            // viewport={{ once: true }}
                        >
                            <Trans>Interactive lectures: You will practice moving, rotating, and creating spatial geometry according to instructions. This gives you a deeper understanding and more confidence when working with models.</Trans>
                        </motion.li>

                        <motion.li className='text-white [:_-3px_3px_4px_var(--ly)] list-disc list-inside my-3  font-rbt  text-xl'
                            style={{ x:-300 }}
                            // animate={{ x:-300 }}
                            exit={{ x: 0, transition: { duration: 0.2 } }}
                            transition={{ delay: 0, duration: 0.7 }}
                            whileInView={{ x: 0 }}
                            // viewport={{ once: true }}
                        >
                            <Trans>Documentation and examples: In addition to instructions, the site also provides a rich documentation and examples. You can refer to them to enhance your knowledge and create unique models. </Trans>
                        </motion.li>


                    </motion.ul>
                </div>
            </div>
            {/* Second */}
            <div className='flex flex-row max-xl:flex-col justify-center items-center gap-12 mb-16'>

                <div className='flex flex-col items-center gap-2'>
                    <motion.h2
                        className='text-3xl font-semibold font-rbt text-center  text-white [:_-3px_3px_4px_var(--ly)]'
                        style={{ scale: 0, opacity: 0 }}
                        // animate={{ scale: 1, opacity: 1 }}
                        exit={{ x: 0, transition: { duration: 0.2 } }}
                        transition={{ delay: 0, duration: 0.2 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                    >
                        <Trans>SOLID GEOMETRIC MODEL</Trans>
                    </motion.h2>
                    <motion.ul
                    // style={{ scale: 0, opacity: 0 }}
                    // animate={{ x:-300 }}
                    // exit={{ x: 0, transition: { duration: 0.2 } }}
                    // transition={{ delay: 0, duration: 0.5 }}
                    // whileInView={{ scale:1, opacity:1}}
                    >
                        <motion.li className='text-white [:_-3px_3px_4px_var(--ly)] list-disc list-inside my-3  font-rbt  text-xl'
                            style={{ x: 300 }}
                            // animate={{ x:300 }}
                            exit={{ x: 0, transition: { duration: 0.2 } }}
                            transition={{ delay: 0, duration: 0.3 }}
                            whileInView={{ x: 0 }}
                            // viewport={{ once: true }}
                        >
                            <Trans>We have developed a complete geometric modeling kit with a simple, easy-to-use, environmentally friendly design that includes a perforated wooden base, antennas, rubber bands and necessary accessories. other.</Trans>
                        </motion.li>
                        <motion.li className='text-white [:_-3px_3px_4px_var(--ly)] list-disc list-inside my-3  font-rbt  text-xl'
                            style={{ x: 300 }}
                            exit={{ x: 0, transition: { duration: 0.2 } }}
                            transition={{ delay: 0, duration: 0.5 }}
                            whileInView={{ x: 0 }}
                        >
                            <Trans>Through that structure, users can interact and create many different spatial models, helping the spatial learning model become more familiar.</Trans>
                        </motion.li>

                        {/* <motion.li className='text-white [:_-3px_3px_4px_var(--ly)] list-disc list-inside my-3  font-rbt  text-xl'
                            style={{ x: 300 }}
                            exit={{ x: 0, transition: { duration: 0.2 } }}
                            transition={{ delay: 0, duration: 0.7 }}
                            whileInView={{ x: 0 }}
                        >
                            Hướng dẫn từ A đến Z: Trang web của chúng tôi cung cấp hướng dẫn từng bước để tạo ra các mô hình hình học không gian từ cơ bản đến phức tạp.
                        </motion.li> */}


                    </motion.ul>
                </div>
                <div className='flex w-full items-center justify-center '>
                    <motion.img style={{ x:-300 }}
                        // animate={{ scale: 1, opacity: 1 }}
                        exit={{ x: 0, transition: { duration: 0.7 } }}
                        transition={{ delay: 0, duration: 0.7 }}
                        whileInView={{ x: 0 }}
                        // viewport={{ once: true }}
                        src={Introduction2} alt="" className='rounded-3xl w-10/12 aspect-[16/13]' />
                </div>
            </div>
            <div className='flex flex-row max-xl:flex-col-reverse justify-center items-center gap-12 mb-16'>
                <div className='flex w-full items-center justify-center'>
                    <motion.img
                        src={selected} alt=""
                        className='rounded-3xl w-10/12 aspect-[16/13] test ' />
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <motion.h2
                        className='text-3xl font-semibold font-rbt text-center  text-white [:_-3px_3px_4px_var(--ly)]'
                        style={{ scale: 0, opacity: 0 }}
                        // animate={{ scale: 1, opacity: 1 }}
                        exit={{ x: 0, transition: { duration: 0.2 } }}
                        transition={{ delay: 0, duration: 0.2 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                    >
                        <Trans>CULTIVATE THINKING, CONNECT KNOWLEDGE,</Trans><Trans>

LIGHT FOR EVERY HEART</Trans>
                    </motion.h2>
                    <motion.ul
                    // style={{ scale: 0, opacity: 0 }}
                    // animate={{ scale: 1, opacity: 1 }}
                    // exit={{ x: 0, transition: { duration: 0.2 } }}
                    // transition={{ delay: 0, duration: 0.5 }}
                    // whileInView={{ scale:1, opacity:1}}
                    >
                        <motion.li className='text-white [:_-3px_3px_4px_var(--ly)] list-disc list-inside my-3  font-rbt  text-xl'
                            style={{ x:-300 }}
                            // animate={{ scale: 1, opacity: 1 }}
                            exit={{ x: 0, transition: { duration: 0.2 } }}
                            transition={{ delay: 0, duration: 0.3 }}
                            whileInView={{ x: 0 }}
                            // viewport={{ once: true }}
                        >
                            <Trans>The special feature of this project is that it is a finished product completely new to the market, helping to create a teaching medium accessible geometry.</Trans>
                        </motion.li>
                        <motion.li className='text-white [:_-3px_3px_4px_var(--ly)] list-disc list-inside my-3  font-rbt  text-xl'
                            style={{ x:-300 }}
                            exit={{ x: 0, transition: { duration: 0.2 } }}
                            transition={{ delay: 0, duration: 0.5 }}
                            whileInView={{ x: 0 }}
                        >
                            <Trans>Part of the profits from this project will be Dedicated to the Model Creation Fund, to support visually impaired people access to geometry education and promote creativity each person.</Trans>
                        </motion.li>

                        <motion.li className='text-white [text-shadow:_-3px_3px_4px_var(--ly)] list-disc list-inside my-3  font-rbt  text-xl'
                            style={{ x:-300 }}
                            exit={{ x: 0, transition: { duration: 0.2 } }}
                            transition={{ delay: 0, duration: 0.7 }}
                            whileInView={{ x: 0 }}
                        >
                            <Trans>We are committed to contributing to the community and society and educational work.</Trans>
                        </motion.li>


                    </motion.ul>
                </div>
            </div>

        </div>
    )
}

export default Feature
