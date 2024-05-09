/*Module before File after */
import { useState, useEffect, React } from "react";
import { Trans, withTranslation, useTranslation } from "react-i18next";
import {
    Timestamp,
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    onSnapshot,
    query,
    updateDoc,
} from "firebase/firestore";
import { useMediaQuery } from "react-responsive";
import "./Forum.css";
import { Chatbot } from "../../containers";
import { Headpage, Loading } from "../../containers";
import { Link, useParams } from "react-router-dom";
import Chat from "./Chat";
import { IoSearch } from "react-icons/io5";
import { CiMenuKebab } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Footer, NavBar } from "../../components";
import { FaComment } from "react-icons/fa";
import { TiTickOutline } from "react-icons/ti";
import { TbTriangleFilled } from "react-icons/tb";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import { IoEyeSharp } from "react-icons/io5";

import db from "../../../firebase";
import "./Forum.css";
import MathmysticPet from "../../assets/img/MathmysticPet.png";
import MathmysticLogo from "../../assets/img/MathmysticLogo.png";

const Forum = () => {
    /* Necessary function */
    const [t, i18n] = useTranslation();
    const isDesktopOrLaptop = useMediaQuery({
        query: "(min-width: 1050px)",
    });

    const [chats, setChats] = useState([]);
    const [loading, setLoading] = useState(0);
    const [chatName, setChatName] = useState("");
    const [chatDescription, setChatDescription] = useState("");
    const [showNewPost, setShowNewPost] = useState(0);
    const [foundUser, setFoundUser] = useState([]);
    const params = useParams();

    const fetchPost = async () => {
        await getDocs(collection(db, "chat")).then((querySnapshot) => {
            const newData = querySnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            setChats(newData);
            setLoading(1);
            const foundChat = newData.find((x) => x.id == params);
            // console.log(foundChat)
        });
    };

    useEffect(() => {
        const unsub = onSnapshot(query(collection(db, "chat")), (doc) => {
            getDocs(collection(db, "chat")).then((querySnapshot) => {
                const newData = querySnapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }));
                setChats(
                    newData.sort(function (a, b) {
                        return b.createdAt - a.createdAt;
                    })
                );
                // console.log(newData.sort(function (b, a) { return b.createdAt - a.createdAt }))
                setLoading(1);
            });
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

        fetchPost();

        fetchPost();
    }, []);

    const paramCheck = !(params.id == undefined);

    const addChat = () => {
        if (chatName == "" || chatDescription == "") return;
        addDoc(collection(db, "chat"), {
            name: chatName,
            description: chatDescription.replace(/\n/g, "<br/>"),
            content: "hello",
            createdAt: Timestamp.now().seconds,
            createdUser: foundUser,
            vote: 0,
            seen: 0,
            comment: 0,
            solved: 0,
        });
    };

    const deleteChat = (idDeleteChat) => {
        deleteDoc(doc(db, "chat", idDeleteChat));
    };

    const updateChat = (idUpdateChat) => {
        getDocs(collection(db, "chat")).then((querySnapshot) => {
            const newData = querySnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            // setChats(newData);
            const newData2 = [];
            newData.forEach((element) => {
                if (element.name.includes(idUpdateChat)) newData2.push(element);
            });
            setChats(
                newData2.sort(function (a, b) {
                    return b.createdAt - a.createdAt;
                })
            );
            setLoading(1);
            // const foundChat = (newData.find(x => x.id == params))
            // console.log(foundChat)
        });
    };

    function changeDate(dateStr) {
        if (dateStr == 0) {
            return "Vua xong";
        }
        const l = localStorage.getItem("lang");
        const day = 0;
        const hour = 0;
        const minute = 0;
        var t = dateStr / (24 * 60 * 60);
        if (t > 1)
            return l == "en"
                ? `Posted ${parseInt(t)} days ago`
                : `Đã đăng ${parseInt(t)} ngày trước`;
        t = dateStr / (60 * 60);
        if (t > 1)
            return l == "en"
                ? `Posted ${parseInt(t)} hours ago`
                : `Đã đăng ${parseInt(t)} giờ trước`;
        t = dateStr / 60;
        if (t > 1)
            return l == "en"
                ? `Posted ${parseInt(t)} minutes ago`
                : `Đã đăng ${parseInt(t)} phút trước`;
        t = dateStr;
        if (t > 1)
            return l == "en"
                ? `Posted ${parseInt(t)} seconds ago`
                : `Đã đăng ${parseInt(t)} giây trước`;
    }

    return (
        <div >
            {paramCheck < 1 ? (
                <div>
                    {!loading ? (
                        <Headpage />
                    ) : (
                        <div className="w-screen h-fit max-xl:h-fit header-background-color2">


                            <NavBar show="1" />

                            <div className=" w-full   z-0  h-full  p-5 ">
                                <div className="flex flex-col w-full items-center mt-24 justify-center ">
                                    <div className="mmt__forum-list-seach_box">
                                        <IoSearch
                                            size={20}
                                            className="mmt__forum-list-seach_box-icon"
                                            title="search"
                                        />
                                        <input
                                            className="mmt__forum-list-seach_box-input"
                                            onChange={(evt) => {
                                                updateChat(evt.target.value);
                                            }}
                                            type="text"
                                            placeholder={t("Search a post")}
                                        />
                                        <button
                                            onClick={() => {
                                                setShowNewPost(!showNewPost);
                                            }}
                                            className="mmt__forum-list-seach_box-new_post_button"
                                        >
                                            <Trans>New Post</Trans>
                                        </button>
                                    </div>

                                    {!showNewPost ? (
                                        ""
                                    ) : (
                                        <div className="mmt__forum-list-new_post_box w-full">
                                            <textarea
                                                rows={6}
                                                onChange={(evt) => {
                                                    setChatDescription(evt.target.value);
                                                }}
                                                placeholder={t("Post description")}
                                                className="mmt__forum-list-new_post_box-top"
                                            />
                                            <div className="mmt__forum-list-new_post_box-bottom">
                                                <input
                                                    onChange={(evt) => {
                                                        setChatName(evt.target.value);
                                                    }}
                                                    placeholder={t("Post title")}
                                                />
                                                <button onClick={addChat}>
                                                    <Trans>Add</Trans>
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="flex flex-row max-xl:flex-col mt-3 gap-5">
                                    <div className="w-full overflow-y-scroll 
                                        h-[80vh] overflow-x-hidden px-5 py-6 border-solid
                                        shadow-[-0px_0px_60px_10px_rgba(0,0,0,0.3)]
                                        bg-transparent opacity-95
                            
                                            rounded-l-3xl
                                            "
                                    >
                                        <div className="mmt__forum-list-list_box-container m-0 font-rbt text-normal font-normal">
                                            {chats?.map((chat, id) => (
                                                <div>
                                                    <div
                                                        className="mmt__forum-list-list_box-box"
                                                        key={id}
                                                    >
                                                        <div className="mmt__forum-list-list_box-box-left">
                                                            <div className="mmt__forum-list-list_box-box-left_content">
                                                                <div className="mmt__forum-list-list_box-box-left-triangle">
                                                                    <TbTriangleFilled
                                                                        size={10}
                                                                        style={{ marginRight: 5 }}
                                                                    />
                                                                    <TbTriangleInvertedFilled size={10} />
                                                                </div>

                                                                <p>{chat.vote}</p>
                                                            </div>

                                                            <div className="mmt__forum-list-list_box-box-left_content">
                                                                <IoEyeSharp />
                                                                <p>{chat.seen}</p>
                                                            </div>

                                                            <div className="mmt__forum-list-list_box-box-left_content">
                                                                <FaComment />
                                                                <p>{chat.comment}</p>
                                                            </div>

                                                            <div className="mmt__forum-list-list_box-box-left_content">
                                                                <TiTickOutline size={20} />
                                                                <p>{chat.solved}</p>
                                                            </div>
                                                        </div>

                                                        <div className="mmt__forum-list-list_box-box-right">
                                                            <div className="mmt__forum-list-list_box-box-right-askedby">
                                                                <img src={chat.createdUser.avatar} />

                                                                <p>{chat.createdUser.name}</p>
                                                            </div>

                                                            <Link to={chat.id}>
                                                                <div className="mmt__forum-list-list_box-box-right-content">
                                                                    <h1>{chat.name}</h1>

                                                                    <h3>
                                                                        <div
                                                                            dangerouslySetInnerHTML={{
                                                                                __html: chat.description,
                                                                            }}
                                                                        />
                                                                    </h3>

                                                                    <h5 className="text-xs">
                                                                        {changeDate(
                                                                            Timestamp.now().seconds - chat.createdAt
                                                                        )}
                                                                    </h5>
                                                                </div>
                                                            </Link>

                                                            {/* <BsThreeDotsVertical className="mmt__forum-list-list_box-box-right-menu_button" /> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="w-[30%] flex flex-col h-[80vh] gap-5 max-xl:w-full">

                                        <div className="h-full 
                                        w-full overflow-y-scroll 
                                         overflow-x-hidden  py-6 px-6 border-solid 
                                        shadow-[-0px_0px_60px_10px_rgba(0,0,0,0.3)]
                                       bg-transparent opacity-95
                                        rounded-2xl
                                        flex-col
                                        ">
                                            <div className="flex flex-col justify-between h-full w-full">
                                                <div className="flex flex-col w-full">
                                                    <h1
                                                        className="self-center justify-self-center
                                                    font-rbt
                                                    font-bold
                                                    text-xl
                                                    ">
                                                         Bài viết nổi bật
                                                    </h1>
                                                    <div className="">
                                                        <div className="w-full overflow-y-scroll 
                                                        h-[14rem] overflow-x-hidden px-5 py-6 border-solid
                                                        shadow-[-0px_0px_60px_10px_rgba(0,0,0,0.3)]
                                                        bg-transparent opacity-95
                                                                mt-4
                                                            rounded-l-3xl
                                                            "
                                                        >
                                                            <div className="mmt__forum-list-list_box-container m-0">
                                                                {chats.reverse()?.map((chat, id) => (
                                                                    <div>
                                                                        <div
                                                                            className="mmt__forum-list-list_box-box"
                                                                            key={id}
                                                                        >


                                                                            <div className="mmt__forum-list-list_box-box-right">
                                                                                <Link to={chat.id}>
                                                                                    <div className="mmt__forum-list-list_box-box-right-askedby flex gap-3">
                                                                                        <img src={chat.createdUser.avatar} />
                                                                                        <h3 className="">
                                                                                            <div
                                                                                                className="w-[12rem] pr-5 font-rbt font-normal text-base whitespace-nowrap overflow-hidden text-ellipsis"
                                                                                                dangerouslySetInnerHTML={{
                                                                                                    __html: chat.description,
                                                                                                }}
                                                                                            />
                                                                                        </h3>
                                                                                    </div>

                                                                                </Link>

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="mt-3 font-rbt text-normal inline w-full   ">
                                                   <p className="  w-full  inline text-slate-100 ">
                                                    
                                                    <span className="ml-1 text-black font-semibold">Các từ khóa : </span>
                                                    <span className="ml-1 text-slate-100">bot</span>,
                                                    <span className="ml-1 text-slate-100">AR</span>,
                                                    <span className="ml-1 text-slate-100">dựng</span>,
                                                    <span className="ml-1 text-slate-100">pro</span>
                                                    
                                                    </p>
                                                    
                                                   
                                                </div>
                                            </div>


                                        </div>
                                        <div className="
                                        h-full 
                                        w-full overflow-y-scroll 
                                         overflow-x-hidden  py-6 px-6 border-solid 
                                        shadow-[-0px_0px_60px_10px_rgba(0,0,0,0.3)]
                                       bg-transparent opacity-95
                                       rounded-2xl
                                        ">
                                            <div className="flex flex-col justify-between h-full w-full">
                                                <div className="flex flex-col w-full">
                                                    <h1
                                                        className="self-center justify-self-center
                                                    font-rbt
                                                    font-bold
                                                    text-xl
                                                    ">
                                                        Thành viên nổi bật
                                                    </h1>
                                                    <div className="bg-white mt-3 rounded-xl flex justify-between ">
                                                        <input className="border-solid border-slate-400 border-2 rounded-l-xl  pl-2 w-full" type="text" placeholder="Tìm thành viên" />
                                                        <button className="border-solid border-slate-400 border-2 p-2 rounded-r-xl">Tìm</button>
                                                    </div>
                                                    <div className="">
                                                        <div className="w-full overflow-y-scroll 
                                                        h-[14rem] overflow-x-hidden px-5 py-6 border-solid
                                                        shadow-[-0px_0px_60px_10px_rgba(0,0,0,0.3)]
                                                        bg-transparent opacity-95
                                                                mt-4
                                                            rounded-l-3xl
                                                            "
                                                        >
                                                            <div className="mmt__forum-list-list_box-container m-0">
                                                                {chats?.map((chat, id) => (
                                                                    <div>
                                                                        <div
                                                                            className="mmt__forum-list-list_box-box"
                                                                            key={id}
                                                                        >


                                                                            <div className="mmt__forum-list-list_box-box-right">
                                                                                <Link to={chat.id}>
                                                                                    <div className="mmt__forum-list-list_box-box-right-askedby flex items-center gap-3">
                                                                                        <p className="font-rbt text-sm">{id + 1} </p>
                                                                                        <img src={chat.createdUser.avatar} />
                                                                                        <h3 className="">
                                                                                            <p
                                                                                                className="w-[12rem] pr-5 font-rbt font-normal text-base whitespace-nowrap overflow-hidden text-ellipsis"
                                                                                                
                                                                                            >
                                                                                                {chat.createdUser.name}
                                                                                            </p>
                                                                                        </h3>
                                                                                    </div>

                                                                                </Link>

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Chatbot/>
                            <Footer/>
                        </div>
                    )}
                </div>
            ) : (
                <div>
                    <Chat chatId={params.id}></Chat>
                </div>
            )}
        </div>
    );
};

export default Forum;
