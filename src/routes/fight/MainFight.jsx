/*Module before File after */
import { useState, useEffect, React } from 'react'
import { Trans, withTranslation, useTranslation } from 'react-i18next';
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, updateDoc } from 'firebase/firestore'
import { useMediaQuery } from 'react-responsive'
import { BrowserRouter, Routes, Route, useLocation, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { AnimatePresence, motion } from 'framer-motion';


import db from '../../../firebase'
import './MainFight.css'
import MathmysticPet from '../../assets/img/MathmysticPet.png';
import MathmysticLogo from '../../assets/img/MathmysticLogo.png'
import { Headpage, NotFound } from '../../containers';

const MainFight = () => {
    /* Necessary function */
    const [t, i18n] = useTranslation()
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1050px)'
    })

    const [pfights, setPfights] = useState([])
    const [pfight, setPfight] = useState('')
    const [loading, setLoading] = useState(0)
    const [foundUser, setFoundUser]= useState([])
    const addPfight = () => {
        addDoc(collection(db, "pfight"), {
            count: 1,
        })
    }

    const deletePfight = (id) => {
        deleteDoc(doc(db, "pfight", id));
    }

    const directPfight = (id) => {
        window.location.href = "fight/" + id
    }

    const [check, setCheck] = useState(0)
    const params = useParams();
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
                for (var i of newData) {
                    if (i.id == params.id) {
                        setCheck(1)
                        setPfight(i)
                    }
                }
                // console.log(newData.sort(function (b, a) { return b.createdAt - a.createdAt }))
                // setLoading(1);
            });
        });
        getDocs(collection(db, "pfight")).then((querySnapshot) => {
            const newData = querySnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            for (var i of newData) {
                if (i.id == params.id) {
                    setCheck(1)
                    setPfight(i)
                }
            }
            setPfights(newData);
            setLoading(1)
            // x = setTimeout(() => {setLoading(1)}, 500)
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
        var tmp = []

        getDocs(collection(db, "pfight")).then((querySnapshot) => {
            const newData = querySnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            for (var i of newData) {
                if (i.id == params.id) {
                    tmp = i.join
                    // console.log(foundUser.id)
                    tmp.push(12345)
                    let unique = [...new Set(tmp)];

                    updateDoc(doc(db, "pfight", params.id), {
                        join : unique
                    })
                }
            }
            setPfights(newData);
            setLoading(1)
            // x = setTimeout(() => {setLoading(1)}, 500)
            // setLoading(1)
        });
    }, [])


    const addMem = () => {

        
 

        
    }
   

    return (
        <div>
            {!loading ? <Headpage /> :
                <div>
                    {check ? <div>
                    {typeof pfight.join}
                        123

                        <button onClick={addMem}>Click me</button>
                    </div>
                    : <NotFound />}
                </div>

            }
        </div>


    )
}

export default MainFight
