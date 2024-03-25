/*Module before File after */
import { useState, useEffect, React } from 'react'
import { Trans, withTranslation, useTranslation } from 'react-i18next';
import { Timestamp, addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, updateDoc } from 'firebase/firestore'
import { useMediaQuery } from 'react-responsive'
import { Headpage, Loading, NotFound } from '../../containers'
import { Link, useParams } from "react-router-dom";
import './Chat.css'
import { Footer, NavBarWoutMenuLogo } from "../../components";
import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb";
import { IoEyeSharp } from "react-icons/io5";
import { FaComment } from "react-icons/fa";
import { TiTickOutline } from "react-icons/ti";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineArrowCircleLeft } from "react-icons/md";
import PopupFailChat1 from "../../containers/modal/PopupFailChat1";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import db from '../../../firebase'
import './Chat.css'
import MathmysticPet from '../../assets/img/MathmysticPet.png';
import MathmysticLogo from '../../assets/img/MathmysticLogo.png'

const Chat = ({ chatId }) => {
    /* Necessary function */
    const [t, i18n] = useTranslation()
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1050px)'
    })


    const [loading, setLoading] = useState(0)
    const [messages, setMessages] = useState([])
    const [chats, setChats] = useState([])
    const [foundChat, setFoundChat] = useState([])
    const [messageContent, setMessageContent] = useState('')
    const [foundUser, setFoundUser] = useState([])
    const [isOpenPopupFailChat1, setIsOpenPopupFailChat1] = useState(0)
    const fetchPost = async () => {

        await getDocs(collection(db, "message"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                const newData2 = []
                newData.forEach(element => {
                    if (element.chatInclude == chatId) newData2.push(element)
                });
                // console.log(newData2)
                setMessages(newData2.sort(function (a, b) { return b.createdAt - a.createdAt }));
                setLoading(1)
            })


    }

    const upseen = async () => [
        await updateDoc(doc(db, 'chat', foundChat.id), {
            seen: foundChat.seen + 1
        })
    ]

    useEffect(() => {

        const unsub = onSnapshot(query(collection(db, "message")), (doc) => {
            getDocs(collection(db, "message"))
                .then((querySnapshot) => {
                    const newData = querySnapshot.docs
                        .map((doc) => ({ ...doc.data(), id: doc.id }));
                    const newData2 = []
                    newData.forEach(element => {
                        if (element.chatInclude == chatId) newData2.push(element)
                    });
                    setMessages(newData2.sort(function (a, b) { return b.createdAt - a.createdAt }))
                    // console.log(newData.sort(function (b, a) { return b.createdAt - a.createdAt }))
                    // setLoading(1)
                })
        });

        const unsub2 = onSnapshot(query(collection(db, "chat")), (doc) => {
            getDocs(collection(db, "chat"))
                .then((querySnapshot) => {
                    const newData = querySnapshot.docs
                        .map((doc) => ({ ...doc.data(), id: doc.id }));
                    setChats(newData);
                    setTimeout(() => {setLoading(1)}, 200)
                    
                    const foundChat2 = (newData.find(x => x.id == chatId))
                    setFoundChat(foundChat2)
                    // console.log(foundChat)

                })
        });

        getDocs(collection(db, "account"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                const foundUser2 = (newData.find(x => x.email == localStorage.getItem('user')))
                setFoundUser(foundUser2)
                // setLoading(1)
            })


        getDocs(collection(db, "chat"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setChats(newData);
                setTimeout(() => {setLoading(1)}, 200)
                const foundChat2 = (newData.find(x => x.id == chatId))
                setFoundChat(foundChat2)
                // console.log(foundChat)
                updateDoc(doc(db, 'chat', foundChat2.id), {
                    seen: foundChat2.seen + 1
                })
            })

        fetchPost()



    }, [])

    const addMessage = () => {
        if (localStorage.getItem('user') == undefined) {
            // PopUp('Vui long dang nhap de gui cau tra loi')
            setIsOpenPopupFailChat1(1)
        }
        else {
            setMessageContent('')
            addDoc(collection(db, 'message'), {
                content: messageContent.replace(/\n/g, "<br/>"),
                createdAt: Timestamp.now().seconds,
                createdBy: foundUser,
                chatInclude: chatId
            })
            updateDoc(doc(db, 'chat', foundChat.id), {
                comment: foundChat.comment + 1
            })
        }


    }

    const deleteMessage = (idDeleteMessage) => {
        deleteDoc(doc(db, 'message', idDeleteMessage))
        updateDoc(doc(db, 'chat', foundChat.id), {
            comment: foundChat.comment - 1
        })
    }

    const deleteChat = async (idDeleteMessage) => {

        await deleteDoc(doc(db, 'chat', idDeleteMessage)).then(() => {
            window.location.href = '/forum'
        })

    }

    const upvote = () => {
        updateDoc(doc(db, 'chat', foundChat.id), {
            vote: foundChat.vote + 1
        })
    }

    const downvote = () => {
        updateDoc(doc(db, 'chat', foundChat.id), {
            vote: foundChat.vote - 1
        })
    }

    function changeDate(dateStr) {
        if (dateStr == 0) return 'Vua xong'
        const l = localStorage.getItem('lang')
        const day = 0
        const hour = 0
        const minute = 0
        var t = dateStr / (24 * 60 * 60)
        if (t > 1) return (l == 'en') ? `Posted ${parseInt(t)} days ago` : `Đã đăng ${parseInt(t)} ngày trước`
        t = dateStr / (60 * 60)
        if (t > 1) return (l == 'en') ? `Posted ${parseInt(t)} hours ago` : `Đã đăng ${parseInt(t)} giờ trước`
        t = dateStr / (60)
        if (t > 1) return (l == 'en') ? `Posted ${parseInt(t)} minutes ago` : `Đã đăng ${parseInt(t)} phút trước`
        t = dateStr
        if (t > 1) return (l == 'en') ? `Posted ${parseInt(t)} seconds ago` : `Đã đăng ${parseInt(t)} giây trước`
    }

    return (
        <div>
            {foundChat == undefined ? <NotFound /> :

                <div>
                    {!loading ? <Headpage /> :
                        <div>
                            <NavBarWoutMenuLogo />


                            <div className="chat-body">


                                <div className="chat-container">
                                    {/* {messages.length}
                                {foundChat.description}
                                {foundChat.name}
                                {foundChat.createdUser.avatar}
                                {foundChat.createdUser.name} */}
                                    <div className="chat-info">
                                        <div className="chat-info_content">
                                            <IoEyeSharp className="chat-info_content-icon" /><p>{foundChat.seen}</p></div>
                                        <div className="chat-info_content">
                                            <FaComment className="chat-info_content-icon" /><p>{foundChat.comment}</p></div>
                                        <div className="chat-info_content">
                                            <TiTickOutline className="chat-info_content-icon2" size={24} /><p>{foundChat.solved}</p></div>
                                    </div>
                                    <div className="chat-box">
                                        <div className="chat-vote">
                                            <TbTriangleFilled size={10} style={{ cursor: "pointer" }} onClick={upvote} />
                                            {foundChat.vote}
                                            <TbTriangleInvertedFilled size={10} style={{ cursor: "pointer" }} onClick={downvote} />

                                        </div>
                                        <div className="chat-ask_all">
                                            <div className="chat-ask">
                                                <div className="chat-ask_info">
                                                    <img src={foundChat.createdUser.avatar} />
                                                    <p>{foundChat.createdUser.name}</p>

                                                </div>
                                                <h6>{changeDate(Timestamp.now().seconds - foundChat.createdAt)}</h6>
                                                <div className="chat-ask_content">
                                                    <h1><div dangerouslySetInnerHTML={{ __html: foundChat.name }} /></h1>
                                                    <h5><div dangerouslySetInnerHTML={{ __html: foundChat.description }} /></h5>
                                                </div>

                                            </div>
                                            {/* <button style={{ position: "absolute", right: 50, top: 100 }} className="abc" onClick={() => deleteChat(chatId)}> <Trans>Delete</Trans></button> */}

                                            {!(foundChat.createdUser.email == localStorage.getItem('user')) ?
                                                "" :
                                                <button className="abc" onClick={() => deleteChat(chatId)}> <Trans>Delete</Trans></button>
                                            }



                                        </div>

                                    </div>

                                    <div />
                                    <div className="chat-ans_count">
                                        <h2><span>{localStorage.getItem('lang') == 'en' ? `Include ${messages.length} answers` : `Co ${messages.length} cau tra loi`}</span></h2>
                                    </div>
                                    <div className="chat-ans-container">
                                        {
                                            messages?.map((message, id) => (
                                                <p key={id}>

                                                    <div className="chat-ans-box">
                                                        <div className="chat-vote">
                                                            <TbTriangleFilled size={10} />
                                                            0
                                                            <TbTriangleInvertedFilled size={10} />
                                                        </div>
                                                        <div className="chat-ans">
                                                            <div className="chat-ans_info">
                                                                <div className='chat-ask_info'>
                                                                    <img src={message.createdBy.avatar} />
                                                                    <p>{message.createdBy.name}</p>

                                                                </div>
                                                                <h6>{changeDate(Timestamp.now().seconds - message.createdAt)}</h6>
                                                            </div>

                                                            <div className="chat-ask_content2">
                                                                {/* <h1>{foundChat.name}</h1> */}
                                                                <h5>

                                                                    <div dangerouslySetInnerHTML={{ __html: message.content }}>

                                                                    </div>

                                                                </h5>
                                                                {/* <h5>11111111111111111111111111111111111111111</h5> */}
                                                            </div>
                                                            {/* 111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111 */}
                                                        </div>

                                                        <div className="chat-ask_menu">
                                                            {/* <button
                                                            onClick={() => { deleteMessage(message.id) }}
                                                            className="chat-ask_menu-button"
                                                        >Delete</button> */}

                                                            {/* <Popup
                                                            content={<button className="abc" onClick={() => deleteMessage(message.id)}> <Trans>Delete</Trans></button>}
                                                            on='click'
                                                            pinned
                                                            position="top right"
                                                            trigger={<BsThreeDotsVertical size={20} />}>
                                                        </Popup> */}

                                                            <Popup
                                                                trigger={open =>
                                                                (
                                                                    <button><BsThreeDotsVertical /></button>

                                                                )

                                                                }
                                                                position="top center" closeOnDocumentClick  >
                                                                <span><button className="abc"
                                                                    onClick={() => deleteMessage(message.id)}
                                                                >
                                                                    <Trans>Delete</Trans></button></span>

                                                            </Popup>

                                                        </div>




                                                    </div>
                                                    <div className="chat-ans_count2">
                                                        <h2></h2>
                                                    </div>
                                                </p>
                                            ))
                                        }
                                    </div>
                                    <div className="chat-input">
                                        <textarea rows={5} value={messageContent} placeholder={t("Message")} type="text" onChange={evt => { setMessageContent(evt.target.value); }} />
                                        <button style={{ borderStyle: "solid", borderColor: '#c5c7c5' }} onClick={addMessage}> <Trans>Send</Trans> </button>
                                    </div>


                                </div>

                            </div>
                        </div>

                    }
                    {isOpenPopupFailChat1 ? <PopupFailChat1 setIsOpenPopupFailChat1={setIsOpenPopupFailChat1} /> : ""}
                </div>

            }
            <Footer />
        </div>
    )
}

export default Chat
