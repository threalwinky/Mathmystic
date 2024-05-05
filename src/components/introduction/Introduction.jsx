/*Module before File after */
import { useState, useEffect, React } from 'react'
import { Trans, withTranslation, useTranslation } from 'react-i18next';
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, updateDoc } from 'firebase/firestore'
import { useMediaQuery } from 'react-responsive'
import { ToastContainer, toast } from 'react-toastify';
import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import CountUp from 'react-countup/';

import db from '../../../firebase'
import './Introduction.css'
import MathmysticPet from '../../assets/img/MathmysticPet.png';
import MathmysticLogo from '../../assets/img/MathmysticLogo.png'
import Introduction1 from '../../assets/img/Introduction1.png'
import Introduction2 from '../../assets/img/Introduction2.jpeg'
import Introduction3 from '../../assets/img/Introduction3.webp'
import Learning from '../../assets/img/Learning.png'
const Introduction = () => {
    /* Necessary function */
    const [t, i18n] = useTranslation()
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1050px)'
    })

    const [selected, setSelected] = useState(Introduction1)
    const [selectedIndex, setSelectedIndex] = useState(1)



    return (

        <div id="introduction" className='bg-gradient-to-br
        from-rose-300 from-20%
         via-red-300 via-50%
         
         to-rose-400 to-100%
             w-screen h-fit flex items-center justify-center
               flex-col
               py-10 px-36
            
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
                from-red-400 from-2%
                via-rose-300 via-50%
                to-rose-400 to-100%
                shadow-zinc-300 
                rounded-3xl shadow-lg text-4xl font-rbt font-bold
                text-white
                [text-shadow:_-3px_3px_4px_var(--lr)]
                '
            // viewport={{ once: true }}
            >
                Introduction
            </motion.h1>
            {/* First */}
            <div className='flex max-xl:flex-col justify-center items-center gap-12'>
                <div className='flex flex-col w-full '>
                    <div className='flex gap-3 '>
                        <p className='text-white font-semibold font-rbt  text-7xl [text-shadow:_-3px_3px_4px_var(--lr)]'> {">"} </p> 
                        <p className='text-white font-semibold font-rbt text-7xl [text-shadow:_-3px_3px_4px_var(--lr)]'>
                        <CountUp  end={23000000} enableScrollSpy={true} duration={5} />
                        </p>
                        
                    </div>

                    <p className='mt-5 text-white font-rbt font-medium text-xl [text-shadow:_-1px_1px_1px_red]'>
                        học sinh, sinh viên Việt Nam đang học hình học, và với mong muốn lan tỏa lợi ích giáo dục đối với tất cả học sinh nói chung và học sinh khiếm thị nói riêng

                    </p>
                    <p className='text-white font-semibold font-rbt  text-2xl [text-shadow:_-3px_3px_4px_red]'> {"Mô hình toán học ra đời!"} </p> 
                </div>
                <div className='w-full'>
                    <img className='' src={Learning} alt="" />
                </div>
            </div>


        </div>
    )
}

export default Introduction
