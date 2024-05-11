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
            createdBy : foundUser.id,
            join : [foundUser.id]
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
            <div className='header-background-color2 h-screen max-xl:h-fit '>
                <Navbar show={"1"} />
                <div className='pt-28 overflow-y-scroll h-screen'>
                    <div className='flex flex-col bg-red-300 p-10'>
                        
                        {pfights?.map((pfight, id) => (
                            <div key={id} className='gap-10 flex'>
                                {pfight.id}
                                <button onClick={() => {directPfight(pfight.id)}}>Join</button>
                                <button onClick={() => {deletePfight(pfight.id)}}>Delete</button>
                            </div>
                        ))}
                        <button onClick={addPfight}>Tao phong</button>
                    </div>
                </div>

            </div>
            <Footer />
        </div>

    )
}

export default Fight
