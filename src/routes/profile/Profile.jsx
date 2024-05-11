/*Module before File after */
import { useState, useEffect, React } from 'react'
import { Trans, withTranslation, useTranslation } from 'react-i18next';
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, updateDoc } from 'firebase/firestore'
import { useMediaQuery } from 'react-responsive'
import { Tabs, TabPanel, TabList, Tab } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import db from '../../../firebase'
import './Profile.css'
import MathmysticPet from '../../assets/img/MathmysticPet.png';
import MathmysticLogo from '../../assets/img/MathmysticLogo.png'
import Headpage from '../../containers/headpage/Headpage';
import Navbar from '../../components/navbar/Navbar';
import PopupPaid from '../../containers/modal/PopupPaid';
import single from '../../assets/img/single.png'
import group from '../../assets/img/group.png'


import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Profile = () => {
    /* Necessary function */
    const [t, i18n] = useTranslation()
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1050px)'
    })
    const [username, setUsername] = useState((''))

    const [password, setPassword] = useState('')

    const [loading, setLoading] = useState(0)

    const [isOpenPopupPaid, setIsOpenPopupPaid] = useState(0)

    const [foundUser, setFoundUser] = useState([])

    const [name, setName] = useState('')

    const [email, setEmail] = useState('')

    const [addr, setAddr] = useState('')

    const [pn, setPn] = useState('')

    const [code, setCode] = useState('')

    const [codes, setCodes] = useState([])
    // const [c, setC] = useState(0)
    // const test = () => {
    //     const ad = new Audio(b)
    //     // ad.muted = true
    //     ad.play()
    //     console.log(1234)
    // }

    // const handle = () => {
    //     console.log(username)
    //     const d = new Date()
    //     // console.log(d.getFullYear())
    //     setPassword(d.getHours() + "" + d.getMinutes() + "" + "")
    // }

    const paidUpdate = (i) => {
        // updateDoc(collection())
        if (i.use == 1) {
            toast.error('Mã code đã được sử dụng')
            return 0
        }
        updateDoc(doc(db, 'code', i.id), {
            use: 1
        })
        updateDoc(doc(db, 'account', foundUser.id), {
            paid: "pro"
        })
        toast.success('Tài khoản đã được kích hoạt pro!');
        setTimeout(() => { window.location.reload() }, 3000)
    }

    const paidHandle = () => {
        // console.log(code.toLowerCase())
        // setIsOpenPopupPaid.bind(this, false)
        // setIsOpenPopupPaid(false)
        for (var i of codes) {
            if (code == '') return 0
            // console.log(i)
            if (i.src.toLowerCase() == code.toLowerCase()) {
                // console.log("Yes")
                paidUpdate(i)
                return 0
            }
        }
        toast.error('Mã code không đúng')
    }

    const [history, setHistory] = useState([])

    useEffect(() => {
        getDocs(collection(db, "account"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                const foundUser2 = (newData.find(x => x.email == localStorage.getItem('user')))
                setFoundUser(foundUser2)
                setName(foundUser2.name)
                setEmail(foundUser2.realEmail)
                setAddr(foundUser2.addr)
                setPn(foundUser2.pn)
                // setLoading(1)
            })
        const unsub = onSnapshot(query(collection(db, "account")), (doc) => {
            getDocs(collection(db, "account"))
                .then((querySnapshot) => {
                    const newData = querySnapshot.docs
                        .map((doc) => ({ ...doc.data(), id: doc.id }));
                    const foundUser2 = (newData.find(x => x.email == localStorage.getItem('user')))
                    setFoundUser(foundUser2)
                    setName(foundUser2.name)
                    setEmail(foundUser2.realEmail)
                    setAddr(foundUser2.addr)
                    setPn(foundUser2.pn)
                })
        });
        getDocs(collection(db, "code"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                // const foundUser2 = (newData.find(x => x.email == localStorage.getItem('user')))
                setCodes(newData)
                console.log(newData)
                // console.log(newData)
                // setName(foundUser2.name)
                // setLoading(1)
            })
        getDocs(collection(db, "history"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                // const foundUser2 = (newData.find(x => x.email == localStorage.getItem('user')))
                setHistory(newData)
                console.log(newData)
                var tmp = []
                getDocs(collection(db, "account"))
                    .then((querySnapshot) => {
                        const newData2 = querySnapshot.docs
                            .map((doc) => ({ ...doc.data(), id: doc.id }));
                        const foundUser2 = (newData2.find(x => x.email == localStorage.getItem('user')))
                        for (var i of newData) {
                            console.log(i.createdBy.id, foundUser2.id)
                            if (i.createdBy.id == foundUser2.id) {
                                console.log(1234)
                                tmp.push(i)
                            }
                            // console.log(1234)
                        }
                        setHistory(tmp)
                    })
                
                // console.log(newData)
                // setName(foundUser2.name)
                // setLoading(1)
            })
        setTimeout(() => { setLoading(1) }, 1000)

    }, [])

    const saveHandle = () => {
        console.log(name, email, addr, pn)
        if (addr != undefined)
            updateDoc(doc(db, 'account', foundUser.id), {
                addr,

            })
        if (name != undefined)
            updateDoc(doc(db, 'account', foundUser.id), {
                name,

            })
        if (pn != undefined)
            updateDoc(doc(db, 'account', foundUser.id), {
                pn,

            })
        toast.success('Cập nhật thông tin thành công')
    }

    return (
        <>
            {!loading ? <Headpage /> :

                <div className='setting font-rbt text-base font-normal'>
                    {/* {foundUser.paid} */}
                    <Navbar show={"1"} />
                    <div className="setting-container">
                        <div className='left'>
                            <div className='img-content'>
                                <div className='img'>
                                    <img src={foundUser.avatar} alt="" width={200} />
                                    <span className="caption ">
                                        {/* <input type="file"  value={''}/> */}

                                        {/* <label htmlFor="image_uploads">
                                            <div className='flex items-center justify-center gap-2'>
                                                <svg
                                                    viewBox="0 0 1024 1024"
                                                    fill="currentColor"
                                                    height="1em"
                                                    width="1em"
                                                >
                                                    <path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z" />
                                                </svg>
                                                <Trans>Edit</Trans>
                                            </div>


                                        </label> */}
                                        <input
                                            type="file"
                                            id="image_uploads"
                                            name="image_uploads"
                                            accept=".jpg, .jpeg, .png"
                                            multiple />


                                    </span>
                                </div>

                                {/* <input type="file" > */}

                                {/* <label htmlFor="">123</label> */}
                                {/* </input> */}
                            </div>
                            <div className={`
                                self-center mt-5 ${foundUser.paid == 'pro' ? " bg-purple-500" : " bg-green-500"}
                                 p-1 px-5 rounded-lg font-rbt text-base
                                 capitalize
                                 text-white
                                [text-shadow:_-3px_3px_10px_green]
                                 border-solid  shadow-[2px_2px_10px_2px_rgba(255,255,255,0.8)]
                             `}>
                                <p>
                                    <Trans>{foundUser.paid}</Trans>
                                </p>
                            </div>

                        </div>
                        <div className='right'>
                            {/* <div className='box'>
                                <p>Email</p>
                                <input type="text"
                                    value={email}
                                    onChange={evt => { setEmail(evt.target.value) }}
                                    disabled={1}
                                />
                            </div>
                            <div className='box'>
                                <p>Ten</p>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={evt => { setName(evt.target.value) }}
                                />
                            </div>

                            <div className='box'>
                                <p>Dia chi</p>
                                <input type="text"
                                    value={addr}
                                    onChange={evt => { setAddr(evt.target.value) }}
                                />
                            </div>
                            <div className='box'>
                                <p>So dien thoai</p>
                                <input type="text"
                                    value={pn}
                                    onChange={evt => { setPn(evt.target.value) }}

                                />
                            </div>
                            <div className='box'>
                                <p>Password</p>
                                <button className='bg-white' onClick={() => { setIsOpenPopupPaid(1) }}>Doi mat khau</button>
                            </div>
                            <div className='box'>
                                <p>Paid</p>
                                <button className='bg-white' onClick={() => { setIsOpenPopupPaid(1) }}>{foundUser.paid}</button>
                            </div>
                            <div>

                            </div>
                            <button className='save-button' onClick={saveHandle}>
                                Save
                            </button>
                            <button className='del-button'>
                                Delete
                            </button> */}


                            <Tabs>
                                <TabList>
                                    <Tab><Trans>Thông tin</Trans></Tab>
                                    <Tab><Trans>History</Trans></Tab>

                                    {/* <Tab><Trans>Password</Trans></Tab> */}
                                    {/* <Tab><Trans>Notification</Trans></Tab> */}

                                </TabList>
                                <div>

                                </div>
                                <TabPanel>
                                    <div className='w-full flex flex-col gap-5 font-rbt text-xl'>



                                        <div className='flex flex-row max-xl:flex-row mt-10'>
                                            <div className="content flex flex-col w-full gap-5">


                                                <p className='w-full bg-white p-5 rounded-xl flex justify-between'><Trans>Name</Trans> : <p>{foundUser.name}</p></p>
                                                <p className='w-full bg-white p-5 rounded-xl flex justify-between'><Trans>Email</Trans> : <p>{foundUser.realEmail}</p></p>
                                                <p className='w-full bg-white p-5 rounded-xl flex justify-between'><Trans>Address</Trans> : <p>{foundUser.addr}</p></p>
                                                <p className='w-full bg-white p-5 rounded-xl flex justify-between'><Trans>Phone number</Trans> : <p>{foundUser.pn}</p></p>
                                                {/* <p className='w-full bg-white'><Trans>Email</Trans> : {foundUser.email}</p> */}
                                                {/* <p><Trans>Address</Trans> : {foundUser.addr}</p> */}
                                                {/* <p><Trans>Phone number</Trans> : {foundUser.pn}</p> */}

                                            </div>


                                        </div>

                                    </div>

                                </TabPanel>
                                <TabPanel>
                                    <div className='flex flex-col gap-3'>
                                        {history?.map((item, id) => (
                                            <div key={id} className='w-full bg-white p-5 rounded-xl flex justify-between'>
                                                <p>Top 1</p>
                                                <p>Điểm số : {item.score}</p>
                                                
                                            </div>
                                        ))}
                                        {/* <div className='study-confirm'>
                                    <div className='study-confirm-top'>
                                        <h1>Free</h1>
                                        <h2>0$/month</h2>
                                        <div>
                                            <div></div>
                                            <h3>
                                                duoc su dung cac cong cu hoc tap mien phi
                                            </h3>
                                        </div>
                                        <div>
                                            <div></div>
                                            <h3>
                                                xem cac video bai giang va tai lieu co ban
                                            </h3>
                                        </div>
                                        
                                    </div>

                                    <button onClick={() => { setMode('free') }}>Let's go</button>
                                </div> */}
                                        

                                    </div>
                                </TabPanel>
                                <TabPanel>

                                </TabPanel>
                                <TabPanel>

                                </TabPanel>

                            </Tabs>


                        </div>
                    </div>
                    {isOpenPopupPaid ? <PopupPaid setIsOpenPopupPaid={setIsOpenPopupPaid} /> : ""}
                </div>

            }
        </>
    )
}

export default Profile
