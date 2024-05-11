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
import { Footer, NavBar } from '../../components';

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
                ["Hình tứ diện", 0],
                ["Hình cầu", 1],
                ["Hình vuông", 0],
                ["Hình trụ", 0],
            ]
        },
        {
            src: HinhBatDien,
            ans: [
                ["Hình bát diện", 1],
                ["Hình tứ diện", 0],
                ["Hình chữ nhật", 0],
                ["Hình cầu", 0],
            ]
        },
        {
            src: HinhChopTamGiac,
            ans: [
                ["Hình bát diện", 0],
                ["Hình tứ diện", 0],
                ["Hình chóp tam giác", 1],
                ["Hình cầu", 0],
            ]
        },
        {
            src: HinhBatDien,
            ans: [
                ["Hình bát diện", 1],
                ["Hình tứ diện", 0],
                ["Hình chữ nhật", 0],
                ["Hình cầu", 0],
            ]
        },
        {
            src: HinhHop,
            ans: [
                ["Hình lập phương", 1],
                ["Hình tứ diện", 0],
                ["Hình chữ nhật", 0],
                ["Hình cầu", 0],
            ]
        },
        {
            src: HinhLangTru,
            ans: [
                ["Hình lập phương", 0],
                ["Hình tứ diện", 0],
                ["Hình chữ nhật", 0],
                ["Hình lăng trụ", 1],
            ]
        },
        {
            src: HinhNon,
            ans: [
                ["Hình lập phương", 0],
                ["Hình nón", 1],
                ["Hình chữ nhật", 0],
                ["Hình lăng trụ", 0],
            ]
        },
        {
            src: HinhTamGiac,
            ans: [
                ["Hình lập phương", 0],
                ["Hình nón", 0],
                ["Hình tam giác", 1],
                ["Hình lăng trụ", 0],
            ]
        },
        {
            src: HinhChopTuGiac,
            ans: [
                ["Hình lập phương", 0],
                ["Hình chóp tứ giác", 1],
                ["Hình tam giác", 0],
                ["Hình lăng trụ", 0],
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
            setScore(score + i)
        setChoose(Math.floor(Math.random() * (8 - 0 + 1)))
    }

    const format = (i) => {
        if (i < 10) return "0" + i
        return i
    }

    return (
        <div>
            {!loading ? <Headpage /> :
                <div className='h-screen overflow-y-scroll header-background-color2 font-rbt'>
                    <NavBar show={"1"}></NavBar>
                    {!check ? <div className=''>
                        {pfight.done == 1 ?
                            <div className='mt-24 '>
                                <div className='m-10 p-6 bg-white  h-screen rounded-xl flex flex-col'>
                                    <h1 className='self-center text-2xl font-semibold
                    
                    bg-sky-500 rounded-lg p-2 px-5
                            p-1 px-5 rounded-lg font-rbt 
                             capitalize
                             text-white
                            
                            [text-shadow:_-3px_3px_30px_#000]
                             border-solid  
                    '>Bảng xếp hạng</h1>
                                    <div className='flex flex-col justify-between h-full'>
                                        <div className=' p-3 gap-3 flex flex-col mt-10'>
                                            {history?.map((item, id) => (

                                                <div key={id} className='flex bg-sky-300 p-5 rounded-xl gap-10 justify-between'>
                                                    <p>Tên : {item[0].name}</p>
                                                    <p>Điểm số : {item[1]}</p>

                                                </div>

                                            ))}
                                        </div>
                                        <div className='flex items-center justify-center gap-3'>
                                            <a href="/" className='self-center 
                                            bg-green-500 rounded-lg p-2 px-5
                            p-1 px-5 rounded-lg font-rbt 
                             capitalize
                             text-white
                            [text-shadow:_-3px_3px_30px_#000]
                             border-solid flex items-center gap-2
                             cursor-pointer'><button>Quay về trang chủ</button></a>
                                            <a href="/fight" className='self-center 
                                            bg-green-500 rounded-lg p-2 px-5
                            p-1 px-5 rounded-lg font-rbt 
                             capitalize
                             text-white
                            [text-shadow:_-3px_3px_30px_#000]
                             border-solid flex items-center gap-2
                             cursor-pointer'><button>Quay về trang trò chơi</button></a>

                                        </div>

                                    </div>

                                </div></div> : <div className='pt-24 px-20 '>
                                <div className='bg-sky'>
                                    <div className='flex gap-4 flex mb-6 justify-end'>
                                        <p className='self-center 
                                            bg-orange-500 rounded-lg p-2 px-5
                            p-1 px-5 rounded-lg font-rbt 
                             capitalize
                             text-white
                            [text-shadow:_-3px_3px_30px_#000]
                             border-solid flex items-center gap-2
                             cursor-pointer'>Điểm số : {score}</p>

                                        <p className='self-center 
                                            bg-blue-500 rounded-lg p-2 px-5
                            p-1 px-5 rounded-lg font-rbt 
                             capitalize
                             text-white
                            [text-shadow:_-3px_3px_30px_#000]
                             border-solid flex items-center gap-2
                             cursor-pointer'>Thời gian : 00:{format(time)}</p>




                                    </div>

                                    <div>
                                        {pfight.start == 1 ? <div className='bg-white rounded-xl my-10 py-5 flex flex-col items-center'>
                                            <img className='w-60 aspect-square mb-3' src={ques[choose].src} alt="" />
                                            <div className='grid grid-cols-2 gap-3'>
                                                {ques[choose].ans?.map((a, id2) => (
                                                    <div key={id2}>

                                                        <button

                                                            className='self-center 
                                                    bg-green-500 rounded-lg p-2 px-5
                                    p-1 px-5 rounded-lg font-rbt 
                                     capitalize
                                     w-full
                                     text-white
                                    [text-shadow:_-3px_3px_30px_#000]
                                     border-solid flex items-center gap-2
                                     cursor-pointer'

                                                            onClick={() => { changeQues(a[1]) }}>{a[0]}</button>

                                                    </div>
                                                ))}
                                            </div>


                                        </div> : ""}

                                        <div className='flex flex-col gap-3 bg-sky-300 p-3'>
                                            <h1 className='self-center text-xl font-semibold
                    
                    bg-sky-500 rounded-lg p-2 px-5
                            p-1 px-5 rounded-lg font-rbt 
                             capitalize
                             text-white
                            [text-shadow:_-3px_3px_30px_#000]
                             border-solid  
                    '>Danh sách người tham gia</h1>
                                            {join?.map((mem, id) => (
                                                <div key={id} className='flex bg-white items-center p-2 m-1 mx-3 rounded-xl gap-3'>
                                                    <img className='w-10  rounded-full' src={mem.avatar} alt="" />
                                                    <p>{mem.name}</p>
                                                </div>
                                            ))}
                                            {pfight.createdBy == foundUser.id ?
                                                <div className='self-center 
                                            bg-green-500 rounded-lg p-2 px-5
                            p-1 px-5 rounded-lg font-rbt 
                             capitalize
                             text-white
                            [text-shadow:_-3px_3px_30px_#000]
                             border-solid flex items-center gap-2
                             cursor-pointer
                                            '
                                                    onClick={start}>Bắt đầu</div>
                                                : ""}
                                        </div>


                                        {/* <button onClick={test}>Add</button> */}

                                    </div>
                                </div>
                            </div>}



                    </div>

                        : <NotFound />}

                </div>

            }
            <Footer />
        </div>


    )
}

export default MainFight
