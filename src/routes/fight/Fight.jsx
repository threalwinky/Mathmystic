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

    const [pfights, setPfights] = useState([])
    const [foundUser, setFoundUser] = useState([])
    const addPfight = () => {
        addDoc(collection(db, "pfight"), {
            count: 1,
            createdBy: foundUser.id,
            createdByName: foundUser.name,
            createdByAvatar: foundUser.avatar,
            join: [foundUser.id],
            start: 0,
            done: 0,
            score: []
        })
    }

    const deletePfight = (id) => {
        deleteDoc(doc(db, "pfight", id));
    }

    const directPfight = (id) => {
        window.location.href = "fight/" + id
    }

    useEffect(() => {
        const unsub = onSnapshot(query(collection(db, "pfight")), (doc) => {
            getDocs(collection(db, "pfight")).then((querySnapshot) => {
                const newData = querySnapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }));
                setPfights(
                    newData
                );
                // console.log(newData.sort(function (b, a) { return b.createdAt - a.createdAt }))
                // setLoading(1);
            });
        });
        getDocs(collection(db, "pfight")).then((querySnapshot) => {
            const newData = querySnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));

            setPfights(newData);
            // setLoading(1)
        });
        getDocs(collection(db, "account")).then((querySnapshot) => {
            const newData = querySnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            const foundUser2 = newData.find(
                (x) => x.email == localStorage.getItem("user")
            );
            setFoundUser(foundUser2);
            // setLoading(1)
        });
    }, [])

    return (
        <div>
            <div className='header-background-color2 h-screen max-xl:h-fit font-rbt'>
                <Navbar show={"1"} />
                <div className='pt-28 overflow-y-scroll h-screen px-10'>

                    <div className='flex flex-col bg-sky-300 h-full p-10 rounded-2xl'>
                        <h1 className='self-center text-2xl font-semibold
                    
                    bg-sky-500 rounded-lg p-2 px-5
                            p-1 px-5 rounded-lg font-rbt 
                             capitalize
                             text-white
                            [text-shadow:_-3px_3px_30px_#000]
                             border-solid  
                    '>Danh sách các phòng</h1>
                        <div className='mt-10 p-5 flex flex-col gap-4'>
                            {pfights?.map((pfight, id) => (
                                <div key={id} className={`gap-10 bg-white p-3 rounded-xl ${pfight.done == 0 ? "flex" : "hidden"} justify-between`}>
                                    <div className='flex items-center justify-center gap-4'>
                                        <img className='w-10 rounded-full ' src={pfight.createdByAvatar} alt="" />
                                        Phòng của {pfight.createdByName}
                                    </div>

                                    <button onClick={() => { directPfight(pfight.id) }} className='self-center text-base font-semibold
                    
                    bg-green-500 rounded-lg p-2 px-5
                            p-1 px-5 rounded-lg font-rbt 
                             capitalize
                             text-white
                            [text-shadow:_-3px_3px_30px_#000]
                             border-solid flex items-center gap-2'>Tham gia
                               <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="2em"
      width="2em"
 
    >
      <path d="M11.293 17.293l1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z" />
    </svg>
                             
                             </button>
                                    {/* <button onClick={() => { deletePfight(pfight.id) }}>Delete</button> */}
                                </div>
                            ))}
                        </div>

                        <button onClick={addPfight} className='self-center text-base font-semibold
                    
                    bg-green-500 rounded-lg p-2 px-5
                            p-1 px-5 rounded-lg font-rbt 
                             capitalize
                             text-white
                            [text-shadow:_-3px_3px_30px_#000]
                             border-solid  '>Tạo phòng</button>
                    </div>
                </div>

            </div>
            <Footer />
        </div>

    )
}

export default Fight
