/*Module before File after */
import { useState, useEffect, React } from 'react'
import { Trans, withTranslation, useTranslation } from 'react-i18next';
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, updateDoc } from 'firebase/firestore'
import { useMediaQuery } from 'react-responsive'
import b from '../../assets/audio/hdtr7.mp3'


import db from '../../../firebase'
import './Setting.css'
import MathmysticPet from '../../assets/img/MathmysticPet.png';
import MathmysticLogo from '../../assets/img/MathmysticLogo.png'
import Headpage from '../../containers/headpage/Headpage';
import NavBar from '../../components/navbar/NavBar';
import PopupPaid from '../../containers/modal/PopupPaid';
const Setting = () => {
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

    useEffect(() => {
        getDocs(collection(db, "account"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                const foundUser2 = (newData.find(x => x.email == localStorage.getItem('user')))
                setFoundUser(foundUser2)
                setName(foundUser2.name)
                // setLoading(1)
            })

        setTimeout(() => { setLoading(1) }, 1000)

    }, [])

    return (
        <>
            {!loading ? <Headpage /> :

                <div className='setting'>
                    {/* {foundUser.paid} */}
                    <NavBar />
                    <div className="setting-container">
                        <div className='left'>
                            <div className='img-content'>
                                <div className='img'>
                                    <img src={foundUser.avatar} alt="" width={200} />
                                    <span className="caption">
                                        {/* <input type="file"  value={''}/> */}

                                        <label htmlFor="image_uploads">

                                            <svg
                                                viewBox="0 0 1024 1024"
                                                fill="currentColor"
                                                height="1em"
                                                width="1em"
                                            >
                                                <path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z" />
                                            </svg> Edit</label>
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
                            <div className="content">

                                <p>Ten : </p>
                                <p>Email : </p>
                                <p>Dia chi : </p>
                                <p>So dien thoai : </p>

                            </div>
                        </div>
                        <div className='right'>
                            <div className='box'>
                                <p>Ten</p>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={evt => {setName(evt.target.value)}}
                                />
                            </div>
                            <div className='box'>
                                <p>Email</p>
                                <input type="text" />
                            </div>
                            <div className='box'>
                                <p>Dia chi</p>
                                <input type="text" />
                            </div>
                            <div className='box'>
                                <p>So dien thoai</p>
                                <input type="text" />
                            </div>
                            <div className='box'>
                                <p>Paid</p>
                                <button onClick={() => { setIsOpenPopupPaid(1) }}>{foundUser.paid}</button>
                            </div>
                            <div>

                            </div>
                            <button>
                                Save
                            </button>
                            <button>
                                Delete
                            </button>
                        </div>
                    </div>
                    {isOpenPopupPaid ? <PopupPaid setIsOpenPopupPaid={setIsOpenPopupPaid} /> : ""}
                </div>

            }
        </>
    )
}

export default Setting
