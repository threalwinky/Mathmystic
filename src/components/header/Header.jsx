/*Module before File after */
import { useState, useEffect, React } from 'react'
import { Trans, withTranslation, useTranslation } from 'react-i18next';
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, updateDoc } from 'firebase/firestore'
import { useMediaQuery } from 'react-responsive'
import { ToastContainer, toast } from 'react-toastify';
import { motion } from 'framer-motion';

import db from '../../../firebase'
import './Header.css'
import MathmysticPet from '../../assets/img/MathmysticPet.png';
import MathmysticLogo from '../../assets/img/MathmysticLogo.png'
import Popup from 'reactjs-popup';
import { Android, Linux, Windows } from '../../routes/home/HomeIcon';

const Header = () => {
    /* Necessary function */
    const [t, i18n] = useTranslation()
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1050px)'
    })

    const [time, setTime] = useState(0)
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(0);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(100);
    const [index, setIndex] = useState(1);
    const toRotate = ["WINGS OF THOUGHT", "CONNECTING KNOWLEDGE", "LIGHT FOR EVERY HEART"];
    const toRotate2 = ["CHẮP CÁNH TƯ DUY", "KẾT NỐI TRI THỨC", "ÁNH SÁNG CHO MỌI TRÁI TIM"];

    const period = 1000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])
    const [done, setDone] = useState(0)
    useEffect(() => {
        setTimeout(() => { setDone(0) }, 500)
    }, [])

    const tick = () => {
        const l = localStorage.getItem('lang') == 'en' ? toRotate : toRotate2
        let i = loopNum % l.length;
        let fullText = l[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(100);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }


    return (
        <div
            className='w-screen h-fit max-xl:h-fit '
            id='home'
        >
            <div className='header-background-image absolute  w-full '>

            </div>
            <div className='header-background-color absolute '>

            </div>
            <div className='w-screen h-fit max-xl:h-fit '>

                <div className="bubbles w-screen h-screen -z-[10]">

                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                </div>

                <div className='w-auto flex flex-row items-center justify-center max-xl:flex-col p-40 px-72 
                max-xl:p-24 max-xl:px-10'>


                    <div className='w-full font-rbt'>
                        <div className='font-bold 
                        tracking-wider bg-red-100 
                        w-fit px-5 py-2 mb-8 my-4 text-white 
                        bg-gradient-to-r from-rose-800
                        to-red-950
                        border
                        border-red-900
                        text-lg
                        [text-shadow:_-1px_1px_1px_var(--lr)]
                    '>
                            <Trans>Welcome to Mathmystic</Trans>
                        </div>
                        <h1 className='my-5'>
                            <span className="txt-rotate" dataperiod="100">
                                <span className="wrap text-6xl font-semibold [text-shadow:_-3px_3px_4px_var(--lo)]">
                                    <Trans>{text}</Trans>
                                </span>
                            </span>
                        </h1>
                        <ul>

                            <motion.li className='list-disc list-inside my-3 text-[#F8F6E3] text-xl [text-shadow:_3px_3px_3px_var(--lb)]'
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                                transition={{ delay: 0, duration: 0.3 }}
                            >
                                Chúng tôi sẽ giới thiệu một sản phẩm toán học độc đáo cho tất cả các bạn học sinh và giáo viên. Hơn cả
                                một sản phẩm, đây còn là một cách thức mới, sáng tạo và thú vị để tìm hiểu và trải nghiệm hình học.
                            </motion.li>
                            <motion.li className='list-disc list-inside my-3 text-[#F8F6E3] text-xl [text-shadow:_3px_3px_3px_var(--lb)]'
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                                transition={{ delay: 0, duration: 0.5 }}
                            >
                                Điểm khác biệt của dự án là việc kết hợp bộ dụng cụ mô hình và trang web hướng dẫn
                                học tập để tạo ra một trải nghiệm học tập toàn diện.
                            </motion.li>
                            <motion.li className='list-disc list-inside my-3 text-[#F8F6E3] text-xl [text-shadow:_3px_3px_3px_var(--lb)]'
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                                transition={{ delay: 0, duration: 0.7 }}
                            >
                                Các bài giảng được nhóm dự án thiết kế đơn giản nhưng đầy đủ các tài nguyên phục vụ cho việc
                                học tập hình học, từ đó khuyến khích làm việc nhóm song song với hình thành thói quen tự học.
                            </motion.li>


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
                                            Tải xuống ngay
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
                        </ul>
                    </div>
                    <div className=' w-full  items-center justify-center flex h-full'>
                        <motion.img
                            src={MathmysticPet}
                            alt=""

                            // className='animate-[updown_3s_linear_infinite] duration-1000 w-[24rem] aspect-auto'
                            className={`${done == 0 ? "animate-[updown_2s_linear_infinite] duration-500 w-[24rem] aspect-auto" : ""}`}
                        // initial={{ scale: 0, opacity: 0 }}
                        // animate={{ scale: 1, opacity: 1 }}
                        // exit={{ opacity: 0, transition: { duration: 0.2 } }}

                        // transition={{ delay: 0, duration: 0.6 }}
                        >

                        </motion.img>

                    </div>

                </div>
            </div>


        </div>
    )
}

export default Header
