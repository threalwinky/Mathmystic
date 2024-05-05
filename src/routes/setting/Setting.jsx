/*Module before File after */
import { useState, useEffect, React } from 'react'
import { Trans, withTranslation, useTranslation } from 'react-i18next';
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, updateDoc } from 'firebase/firestore'
import { useMediaQuery } from 'react-responsive'
import { Tabs, TabPanel, TabList, Tab } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import db from '../../../firebase'
import './Setting.css'
import MathmysticPet from '../../assets/img/MathmysticPet.png';
import MathmysticLogo from '../../assets/img/MathmysticLogo.png'
import Headpage from '../../containers/headpage/Headpage';
import Navbar from '../../components/navbar/Navbar';
import PopupPaid from '../../containers/modal/PopupPaid';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

    const [email, setEmail] = useState('')

    const [addr, setAddr] = useState('')

    const [pn, setPn] = useState('')

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

                                        <label htmlFor="image_uploads">
                                            <div className='flex items-center justify-center gap-2'>
                                                <svg
                                                    viewBox="0 0 1024 1024"
                                                    fill="currentColor"
                                                    height="1em"
                                                    width="1em"
                                                >
                                                    <path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z" />
                                                </svg>
                                                Edit
                                            </div>


                                        </label>
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
                            <div className="content flex max-xl:hidden">

                                <p>Ten : </p>
                                <p>Email : </p>
                                <p>Dia chi : </p>
                                <p>So dien thoai : </p>

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
                                    <Tab>Account</Tab>
                                    <Tab>Billing</Tab>
                                    <Tab>Password</Tab>
                                    <Tab>Notification</Tab>

                                </TabList>
                                <div>

                                </div>
                                <TabPanel>
                                    <div className='w-full flex flex-col gap-5'>
                                        <div className='w-full flex flex-col gap-2'>
                                            <p className='mx-5 font-semibold'>Email</p>
                                            <input type="text"
                                                value={email}
                                                onChange={evt => { setEmail(evt.target.value) }}
                                                disabled={1}
                                                className='w-full p-2 px-5 rounded-md bg-sky-200'
                                            />
                                        </div>
                                        <div className='w-full flex flex-col gap-2'>
                                            <p className='mx-5 font-semibold'>Ten</p>
                                            <input
                                                type="text"
                                                value={name}
                                                onChange={evt => { setName(evt.target.value) }}
                                                className='w-full p-2 px-5 rounded-md '
                                            />
                                        </div>

                                        <div className='w-full flex flex-col gap-2'>
                                            <p className='mx-5 font-semibold'>Dia chi</p>
                                            <input type="text"
                                                value={addr}
                                                onChange={evt => { setAddr(evt.target.value) }}
                                                className='w-full p-2 px-5 rounded-md'
                                            />
                                        </div>
                                        <div className='w-full flex flex-col gap-2'>
                                            <p className='mx-5 font-semibold'>So dien thoai</p>
                                            <input type="text"
                                                value={pn}
                                                onChange={evt => { setPn(evt.target.value) }}
                                                className='w-full p-2 px-5 rounded-md'
                                            />
                                        </div>
                                        <div className='flex flex-row max-xl:flex-row gap-3 self-end'>
                                        <button className='del-button rounded-lg p-2 px-5'>
                                            Delete
                                        </button>
                                        <button className='save-button rounded-lg p-2 px-5' onClick={saveHandle}>
                                            Save
                                        </button>
                                        
                                        </div>
                                        
                                    </div>

                                </TabPanel>
                                <TabPanel>
                                    <p>
                                        <b>Luigi</b> (<i>Japanese: ルイージ Hepburn: Ruīji, [ɾɯ.iː.dʑi̥]</i>) (<i>English: /luˈiːdʒi/;
                                            Italian: [luˈiːdʒi]</i>) is a fictional character featured in video games and related media
                                        released by Nintendo. Created by prominent game designer Shigeru Miyamoto, Luigi is portrayed
                                        as the slightly younger but taller fraternal twin brother of Nintendo's mascot Mario, and
                                        appears in many games throughout the Mario franchise, often as a sidekick to his brother.
                                    </p>
                                    <p>
                                        Source:{' '}
                                        <a href="https://en.wikipedia.org/wiki/Luigi" target="_blank">
                                            Wikipedia
                                        </a>
                                    </p>
                                </TabPanel>
                                <TabPanel>
                                    <p>
                                        <b>Princess Peach</b> (<i>Japanese: ピーチ姫 Hepburn: Pīchi-hime, [piː.tɕi̥ çi̥.me]</i>)
                                        is a character in Nintendo's Mario franchise. Originally created by Shigeru Miyamoto,
                                        Peach is the princess of the fictional Mushroom Kingdom, which is constantly under
                                        attack by Bowser. She often plays the damsel in distress role within the series and
                                        is the lead female. She is often portrayed as Mario's love interest and has appeared
                                        in Super Princess Peach, where she is the main playable character.
                                    </p>
                                    <p>
                                        Source:{' '}
                                        <a href="https://en.wikipedia.org/wiki/Princess_Peach" target="_blank">
                                            Wikipedia
                                        </a>
                                    </p>
                                </TabPanel>
                                <TabPanel>
                                    <p>
                                        <b>Yoshi</b> (<i>ヨッシー Yosshī, [joɕ.ɕiː]</i>) (<i>English: /ˈjoʊʃi/ or /ˈjɒʃi/</i>), once
                                        romanized as Yossy, is a fictional anthropomorphic dinosaur who appears in
                                        video games published by Nintendo. Yoshi debuted in Super Mario World (1990) on the
                                        Super Nintendo Entertainment System as Mario and Luigi's sidekick. Yoshi later starred
                                        in platform and puzzle games, including Super Mario World 2: Yoshi's Island, Yoshi's Story
                                        and Yoshi's Woolly World. Yoshi also appears in many of the Mario spin-off games, including
                                        Mario Party and Mario Kart, various Mario sports games, and Nintendo's crossover fighting
                                        game series Super Smash Bros. Yoshi belongs to the species of the same name, which is
                                        characterized by their variety of colors.
                                    </p>
                                    <p>
                                        Source:{' '}
                                        <a href="https://en.wikipedia.org/wiki/Yoshi" target="_blank">
                                            Wikipedia
                                        </a>
                                    </p>
                                </TabPanel>
                                <TabPanel>
                                    <p>
                                        <b>Toad</b> (<i>Japanese: キノピオ Hepburn: Kinopio</i>) is a fictional character who primarily
                                        appears in Nintendo's Mario franchise. Created by Japanese video game designer Shigeru Miyamoto,
                                        he is portrayed as a citizen of the Mushroom Kingdom and is one of Princess Peach's most loyal
                                        attendants; constantly working on her behalf. He is usually seen as a non-player character (NPC)
                                        who provides assistance to Mario and his friends in most games, but there are times when Toad(s)
                                        takes center stage and appears as a protagonist, as seen in Super Mario Bros. 2, Wario's Woods,
                                        Super Mario 3D World, and Captain Toad: Treasure Tracker.
                                    </p>
                                    <p>
                                        Source:{' '}
                                        <a href="https://en.wikipedia.org/wiki/Toad_(Nintendo)" target="_blank">
                                            Wikipedia
                                        </a>
                                    </p>
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

export default Setting
