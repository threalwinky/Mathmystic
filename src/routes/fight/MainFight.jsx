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

import HinhBatDien from '../../assets/img/Games/HinhBatDien.png'
import HinhCau from '../../assets/img/Games/HinhCau.png'
import HinhChopTamGiac from '../../assets/img/Games/HinhChopTamGiac.png'
import HinhChopTuGiac from '../../assets/img/Games/HinhChopTuGiac.png'
import HinhChuNhat from '../../assets/img/Games/HinhChuNhat.png'
import HinhHop from '../../assets/img/Games/HinhHop.png'
import HinhLangTru from '../../assets/img/Games/HinhLangTru.png'
import HinhNon from '../../assets/img/Games/HinhNon.png'
import HinhTamGiac from '../../assets/img/Games/HinhTamGiac.png'
import HinhTru from '../../assets/img/Games/HinhTru.png'

const MainFight = () => {
    /* Necessary function */
    const [t, i18n] = useTranslation()
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1050px)'
    })

    const ques = [
        {
            src: HinhCau,
            ans: [
                ["Hình tứ diện", -1],
                ["Hình cầu", 1],
                ["Hình vuông", -1],
                ["Hình trụ", -1],
            ]
        },
        {
            src: HinhBatDien,
            ans: [
                ["Hình bát diện", 1],
                ["Hình tứ diện", -1],
                ["Hình chữ nhật", -1],
                ["Hình cầu", -1],
            ]
        },
        {
            src: HinhChopTamGiac,
            ans: [
                ["Hình bát diện", -1],
                ["Hình tứ diện", -1],
                ["Hình chóp tam giác", 1],
                ["Hình cầu", -1],
            ]
        },
        {
            src: HinhBatDien,
            ans: [
                ["Hình bát diện", 1],
                ["Hình tứ diện", -1],
                ["Hình chữ nhật", -1],
                ["Hình cầu", -1],
            ]
        },
        {
            src: HinhHop,
            ans: [
                ["Hình lập phương", 1],
                ["Hình tứ diện", -1],
                ["Hình chữ nhật", -1],
                ["Hình cầu", -1],
            ]
        },
        {
            src: HinhLangTru,
            ans: [
                ["Hình lập phương", -1],
                ["Hình tứ diện", -1],
                ["Hình chữ nhật", -1],
                ["Hình lăng trụ", 1],
            ]
        },
        {
            src: HinhNon,
            ans: [
                ["Hình lập phương", -1],
                ["Hình nón", 1],
                ["Hình chữ nhật", -1],
                ["Hình lăng trụ", -1],
            ]
        },
        {
            src: HinhTamGiac,
            ans: [
                ["Hình lập phương", -1],
                ["Hình nón", -1],
                ["Hình tam giác", 1],
                ["Hình lăng trụ", -1],
            ]
        },
        {
            src: HinhChopTuGiac,
            ans: [
                ["Hình lập phương", -1],
                ["Hình chóp tứ giác", 1],
                ["Hình tam giác", -1],
                ["Hình lăng trụ", -1],
            ]
        },
    ]

    const [pfights, setPfights] = useState([])
    const [pfight, setPfight] = useState('')
    const [loading, setLoading] = useState(0)
    const [foundUser, setFoundUser] = useState([])
    const [foundUsers, setFoundUsers] = useState([])

    const [join, setJoin] = useState([
        { id: "1" }
    ])

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
    const [history, setHistory] = useState([])
    useEffect(() => {

        const unsub = onSnapshot(query(collection(db, "pfight")), (doc) => {
            getDocs(collection(db, "pfight")).then((querySnapshot) => {
                const newData = querySnapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }));
                setPfights(newData);
                setCheck((newData.find(item => item.id == params.id) == undefined))
                for (var pf of newData) {
                    if (pf.id == params.id) {
                        setPfight(pf)

                        getDocs(collection(db, "account")).then((querySnapshot) => {
                            const newData2 = querySnapshot.docs.map((doc) => ({
                                ...doc.data(),
                                id: doc.id,
                            }));

                            const t = newData2.find(item => item.email == localStorage.getItem('user')).id
                            var pf_join = pf.join
                            pf_join.push(t)
                            const tmp2 = [...new Set(pf_join)];

                            var tmp = []
                            for (var item of tmp2) {
                                tmp.push((newData2.find(it => it.id == item)))
                            }
                            setJoin(tmp)

                        });
                    }
                }

            });
        });

        const unsub2 = onSnapshot(query(collection(db, "history")), (doc) => {
            getDocs(collection(db, "history")).then((querySnapshot) => {
                const newData = querySnapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }));
                var tmp = []
                for (var i of newData) {

                    if (i.pid.id == params.id) tmp.push([i.createdBy, i.score])
                }

                setHistory(tmp)
            });
        });

        

        getDocs(collection(db, "pfight")).then((querySnapshot) => {
            const newData = querySnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            setPfights(newData);
            setCheck((newData.find(item => item.id == params.id) == undefined))
            for (var pf of newData) {
                if (pf.id == params.id) {
                    setPfight(pf)

                    getDocs(collection(db, "account")).then((querySnapshot) => {
                        const newData2 = querySnapshot.docs.map((doc) => ({
                            ...doc.data(),
                            id: doc.id,
                        }));

                        const t = newData2.find(item => item.email == localStorage.getItem('user')).id
                        setFoundUser(newData2.find(item => item.email == localStorage.getItem('user')))
                        var pf_join = pf.join
                        pf_join.push(t)
                        const tmp2 = [...new Set(pf_join)];

                        updateDoc(doc(db, "pfight", params.id), {
                            join: tmp2
                        })

                        var tmp = []
                        for (var item of tmp2) {
                            tmp.push((newData2.find(it => it.id == item)))
                        }
                        setJoin(tmp)


                    });
                }
            }
        });
        setLoading(1)
        // console.log(Math.floor(Math.random() * (8 - 0 + 1)) + 0)
    }, [])

    const start = () => {
        updateDoc(doc(db, "pfight", params.id), {
            start: 1
        })
    }

    const [time, setTime] = useState(10)
    const [score, setScore] = useState(0)
    useEffect(() => {
        if (pfight.start == 1) {
            var x = setInterval(() => {
                setTime(time - 1)
                if (time == 1) {


                    updateDoc(doc(db, "pfight", params.id), {
                        done: 1
                    })

                    addDoc(collection(db, "history"), {
                        score: score,
                        createdBy: foundUser,
                        pid: pfight
                    })

                }
            }, 1000)
        }
        else {

            clearInterval(x)
        }
        return () => clearInterval(x);
        // clearInterval(x)
    })

    const test = () => {
        setScore(score + 1)
    }
    const [choose, setChoose] = useState(0)

    const changeQues = (i) => {
        if (!(score == 0 && i == -1))
        setScore(score+i)
        setChoose(Math.floor(Math.random() * (8 - 0 + 1)) )
    }

    return (
        <div>
            {!loading ? <Headpage /> :
                <div>

                    {!check ? <div>
                        {pfight.done == 1 ?
                            <div>{history?.map((item, id) => (

                                <div key={id} className='flex gap-10'>
                                    <p>{item[0].name}</p>
                                    <p>{item[1]}</p>

                                </div>

                            ))}</div> : <div>

                                {pfight.start == 1 ? <div>

                                    {time}

                                </div> : ""}

                                <div>
                                    {pfight.start == 1 ?  <div>
                                        <img className='w-20 aspect-square'  src={ques[choose].src} alt="" />
                                        {ques[choose].ans?.map((a, id2) => (
                                            <div key={id2}>
                                                
                                                <button onClick={() => {changeQues(a[1])}}>{a[0]}</button>
                                                
                                                </div>
                                        ))}
                                    </div> : ""}
                                   

                                    {join?.map((mem, id) => (
                                        <div key={id}>
                                            <img className='w-20' src={mem.avatar} alt="" />
                                        </div>
                                    ))}
                                    {score}
                                    <button onClick={test}>Add</button>
                                    {pfight.createdBy == foundUser.id ? <div onClick={start}>Start</div> : ""}
                                </div>

                            </div>}



                    </div>
                        : <NotFound />}
                </div>

            }
        </div>


    )
}

export default MainFight
