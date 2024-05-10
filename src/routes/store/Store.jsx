/*Module before File after */
import { useState, useEffect, React } from "react";
import { Trans, withTranslation, useTranslation } from "react-i18next";
import {
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
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AnimatePresence, motion } from "framer-motion";

import db from "../../../firebase";
import "./Store.css";
import MathmysticPet from "../../assets/img/MathmysticPet.png";
import MathmysticLogo from "../../assets/img/MathmysticLogo.png";
import { Headpage } from "../../containers";
import { Footer } from "../../components";
import Navbar from "../../components/navbar/Navbar";
import { Stars } from "./Stars";
import { Link } from "react-router-dom";

const Store = () => {
    /* Necessary function */
    const [t, i18n] = useTranslation();
    const isDesktopOrLaptop = useMediaQuery({
        query: "(min-width: 1050px)",
    });

    const [loading, setLoading] = useState(0);
    const [selected, setSelected] = useState(1);

    const store1 = [];
    const [products, setProducts] = useState([]);
    const [products1, setProducts1] = useState([]);
    const [products2, setProducts2] = useState([]);
    const [products3, setProducts3] = useState([]);
    useEffect(() => {
        getDocs(collection(db, "product")).then((querySnapshot) => {
            const newData = querySnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));

            setProducts(newData);
            console.log(newData);
            var newData1 = []
            for (var i of newData){
                console.log(i)
                if (i.type == "bo-mo-hinh"){
                    newData1.push(i)
                }
            }
            console.log(newData1)
            setProducts1(newData1)
            var newData2 = []
            for (var i of newData){
                console.log(i)
                if (i.type == "phu-kien"){
                    newData2.push(i)
                }
            }
            setProducts2(newData2)
            var newData3 = []
            for (var i of newData){
                console.log(i)
                if (i.type == "khac"){
                    newData3.push(i)
                }
            }
            setProducts3(newData3)
            // setLoading(1)
        });
    }, []);
    const changeMoney = (money) => {
        var m = ((money).toLocaleString(
            undefined,

            { minimumFractionDigits: 2 }
        ))
        return m.substring(0, m.length - 3)
    }
    const Description = ({ des }) => {
        if (des == "Hot")
        return (
            <div className="font-rbt text-red-600">
                <p>
                    <Trans>{des}</Trans>
                </p>
            </div>
        )
        else if (des == "Special") 
        return (
            <div className="font-rbt text-green-600">
                <p>
                    <Trans>{des}</Trans>
                </p>
            </div>
        )
    }
    const Choose2 = () => {
        if (selected == 1) return "Bộ mô hình"
        if (selected == 2) return "Phụ kiện"
        if (selected == 3) return "Khác"
    }
    const Choose = () => {
        if (selected == 1)
            return (
                <div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-4 gap-10 3xl:gap-10 lg:gap-10">
                        {/* <div className="w-full flex  items-center justify-center flex-col">
                        <div className=" max-w-80 max-h-80 w-full flex flex-col  ">
                            <div className=" w-full h-full  overflow-y-hidden flex flex-col">
                                <img className="w-full h-full" src="https://placewaifu.com/image/200" alt="" />
                                
                               
                            </div>
                           
                        </div>
                        <p>1</p>
                    </div>

                    <div className="w-full flex  items-center justify-center">
                        <div className=" max-w-80 max-h-80 w-full flex flex-col  ">
                            <div className=" w-full  overflow-y-hidden ">
                                
                                <img className="w-full h-full" src="https://placewaifu.com/image/200" alt="" />
                                <p>1</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex  items-center justify-center">
                        <div className=" max-w-80 max-h-80 w-full flex flex-col  ">
                            <div className=" w-full  overflow-y-hidden ">
                                <img className="w-full h-full" src="https://placewaifu.com/image/200" alt="" />
                                <p>1</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex  items-center justify-center">
                        <div className=" max-w-80 max-h-80 w-full flex flex-col  ">
                            <div className=" w-full  overflow-y-hidden ">
                                <img className="w-full h-full" src="https://placewaifu.com/image/200" alt="" />
                                <p>1</p>
                            </div>
                        </div>
                    </div> */}
                        {products1?.map((product, id) => (
                            <div key={id}>
                                {product.type == "bo-mo-hinh" ? <div className="w-full  p-3 max-xl:p-10 max-xl:py-0 " key={id}>
                                <div className="bg-white rounded-xl flex flex-col justify-between  h-full p-4 cursor-pointer ">
                                    <div>
                                        <div className=" ">
                                            <div className=" flex justify-center">
                                                <img className=" self-center justify-self-center aspect-square" src={product.imgUrl} alt="" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-between ">
                                            <div className="font-rbt  p-2 py-8 max-xl:p-8 flex flex-col justify-around gap-10">
                                                <div>

                                                    <div>

                                                        <Description des={product.description} />
                                                        <p className="font-semibold text-xl">
                                                            {product.name}
                                                        </p>
                                                        <p>Bộ mô hình</p>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="mb-5 max-xl:ml-8">
                                            <div className="flex gap-2 text-lg ">
                                                <p className="text-red-600 ">{changeMoney(product.price)}đ</p>
                                                <p className="line-through text-slate-600">
                                                    {changeMoney(product.priceno)}đ
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Stars starscnt={5}></Stars>
                                                <p>Da ban {product.count}</p>
                                            </div>
                                        </div>
                                        <div className="self-end justify-self-end flex gap-2">

                                            <button
                                                className="bg-blue-500 rounded-lg p-2 px-5
                                p-1 px-5 rounded-lg font-rbt text-base
                                 capitalize
                                 text-white
                                [text-shadow:_-3px_3px_30px_#000]
                                 border-solid  "
                                            >
                                                Add to cart
                                            </button>
                                            <Link to={"/product/" + product.id}><button
                                                className="bg-green-500 rounded-lg p-2 px-5
                                p-1 px-5 rounded-lg font-rbt text-base
                                 capitalize
                                 text-white
                                [text-shadow:_-3px_3px_30px_#000]
                                 border-solid  "
                                            >
                                                View details
                                            </button></Link>
                                            
                                        </div>
                                    </div>

                                </div>
                            </div> : ""}
                            </div>
                            
                        ))}
                    </div>
                </div>
            );
        if (selected == 2)
            return (
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-4 gap-10 3xl:gap-10 lg:gap-10">
                    {products2?.map((product, id) => (
                            <div className="w-full  p-3 max-xl:p-10 max-xl:py-0 " key={id}>
                                <div className="bg-white rounded-xl flex flex-col justify-between  h-full p-4 cursor-pointer ">
                                    <div>
                                        <div className=" ">
                                        <div className=" flex justify-center">
                                                <img className=" self-center justify-self-center aspect-square" src={product.imgUrl} alt="" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-between ">
                                            <div className="font-rbt  p-2 py-8 max-xl:p-8 flex flex-col justify-around gap-10">
                                                <div>

                                                    <div>

                                                        <Description des={product.description} />
                                                        <p className="font-semibold text-xl">
                                                            {product.name}
                                                        </p>
                                                        <p>Phụ kiện</p>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="mb-5 max-xl:ml-8">
                                            <div className="flex gap-2 text-lg ">
                                                <p className="text-red-600 ">{changeMoney(product.price)}đ</p>
                                                <p className="line-through text-slate-600">
                                                    {changeMoney(product.priceno)}đ
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Stars starscnt={5}></Stars>
                                                <p>Da ban {product.count}</p>
                                            </div>
                                        </div>
                                        <div className="self-end justify-self-end flex gap-2">

                                            <button
                                                className="bg-blue-500 rounded-lg p-2 px-5
                                p-1 px-5 rounded-lg font-rbt text-base
                                 capitalize
                                 text-white
                                [text-shadow:_-3px_3px_30px_#000]
                                 border-solid  "
                                            >
                                                Add to cart
                                            </button>
                                            <Link to={"/product/" + product.id}><button
                                                className="bg-green-500 rounded-lg p-2 px-5
                                p-1 px-5 rounded-lg font-rbt text-base
                                 capitalize
                                 text-white
                                [text-shadow:_-3px_3px_30px_#000]
                                 border-solid  "
                                            >
                                                View details
                                            </button></Link>
                                            
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                </div>
            );
        if (selected == 3)
            return (
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-4 gap-10 3xl:gap-10 lg:gap-10">
                {products3?.map((product, id) => (
                        <div className="w-full  p-3 max-xl:p-10 max-xl:py-0 " key={id}>
                            <div className="bg-white rounded-xl flex flex-col justify-between  h-full p-4 cursor-pointer ">
                                <div>
                                    <div className=" ">
                                        <div className="">
                                            <img className="" src={product.imgUrl} alt="" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-between ">
                                        <div className="font-rbt  p-2 py-8 max-xl:p-8 flex flex-col justify-around gap-10">
                                            <div>

                                                <div>

                                                    <Description des={product.description} />
                                                    <p className="font-semibold text-xl">
                                                        {product.name}
                                                    </p>
                                                    <p>Bộ mô hình</p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="mb-5 max-xl:ml-8">
                                        <div className="flex gap-2 text-lg ">
                                            <p className="text-red-600 ">{changeMoney(product.price)}đ</p>
                                            <p className="line-through text-slate-600">
                                                {changeMoney(product.priceno)}đ
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Stars starscnt={5}></Stars>
                                            <p>Da ban {product.count}</p>
                                        </div>
                                    </div>
                                    <div className="self-end justify-self-end flex gap-2">

                                        <button
                                            className="bg-blue-500 rounded-lg p-2 px-5
                            p-1 px-5 rounded-lg font-rbt text-base
                             capitalize
                             text-white
                            [text-shadow:_-3px_3px_30px_#000]
                             border-solid  "
                                        >
                                            Add to cart
                                        </button>
                                        <Link to={"/product/" + product.id}><button
                                            className="bg-green-500 rounded-lg p-2 px-5
                            p-1 px-5 rounded-lg font-rbt text-base
                             capitalize
                             text-white
                            [text-shadow:_-3px_3px_30px_#000]
                             border-solid  "
                                        >
                                            View details
                                        </button></Link>
                                        
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
            </div>
            );
    };
    useEffect(() => {
        setTimeout(() => {
            setLoading(1);
        }, 1000);
    }, []);
    const [isHover, toggleHover] = useState(false);
    const toggleHoverMenu = () => {
        toggleHover(!isHover);
    };
    const [isMouse, toggleMouse] = useState(false);
    const toggleMouseMenu = () => {
        toggleMouse(!isMouse);
    };
    const subMenuAnimate = {
        enter: {
            opacity: 1,
            rotateX: 0,
            transition: {
                duration: 0.5,
            },
            display: "block",
        },
        exit: {
            opacity: 0,
            rotateX: -15,
            transition: {
                duration: 0.5,
                delay: 0.3,
            },
            transitionEnd: {
                display: "none",
            },
        },
    };
    return (
        <div>
            {!loading ? (
                <Headpage />
            ) : (
                <div className="w-screen h-screen max-xl:h-screen header-background-color2 ">
                    <Navbar show="1" />
                    <div className="  w-full h-full pt-24">
                        <div className="w-full h-full  flex gap-10 max-xl:flex-col">
                            <div className="hidden max-xl:flex p-3">
                                <div className="flex-item">
                                    <motion.div
                                        className="menu-item absolute text-white [text-shadow:_-3px_3px_15px_#fff] font-rbt text-xl"
                                        onClick={toggleHoverMenu}

                                    >
                                        <div className=" border-solid border-2 flex items-center px-8 rounded-xl cursor-pointer justify-between">
                                            <p className="p-2 rounded-xl "><Choose2/></p>
                                            <svg
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                height="1em"
                                                width="1em"

                                            >
                                                <path d="M11.178 19.569a.998.998 0 001.644 0l9-13A.999.999 0 0021 5H3a1.002 1.002 0 00-.822 1.569l9 13z" />
                                            </svg>

                                        </div>

                                        <motion.div
                                            className="sub-menu"
                                            initial="exit"
                                            animate={isHover ? "enter" : "exit"}
                                            variants={subMenuAnimate}
                                        >
                                            <div className="" />
                                            <div className="bg-gradient-to-tr
        from-[#30bfd8] from-40%
        via-[#7facf5] via-100%
        
        to-[white] to-100% p-3 rounded-xl 
        border-solid border-2 border-slate-600">
                                                <div className="">
                                                    <p
                                                        onClick={() => {
                                                            setSelected(1);
                                                        }}
                                                        className="ml-5 mr-10 hover:scale-105 hover:border-solid hover:border-b-2 hover:border-black cursor-pointer "
                                                    >
                                                        Bộ mô hình
                                                    </p>
                                                </div>
                                                <div>
                                                    <p
                                                        onClick={() => {
                                                            setSelected(2);
                                                        }}
                                                        className="ml-5 mr-10 hover:scale-105 hover:border-solid hover:border-b-2 hover:border-black cursor-pointer"
                                                    >
                                                        Phụ kiện
                                                    </p>
                                                </div>
                                                <div>
                                                    <p
                                                        onClick={() => {
                                                            setSelected(3);
                                                        }}
                                                        className="ml-5 mr-10 hover:scale-105 hover:border-solid hover:border-b-2 hover:border-black cursor-pointer"
                                                    >
                                                        Khác
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                </div>
                            </div>
                            <div
                                className="
                            w-[20%] lgl:w-[25%] inline-flex max-xl:hidden h-full rounded-3xl header-background-color2
                            bg-gradient-to-tr
        from-[#30bfd8] from-40%
        via-[#7facf5] via-100%
        
        to-[white] to-100%
                            
                            border-solid border-r-2 border-slate-400 flex-col
                            font-rbt text-lg p-5 text-white [text-shadow:_-3px_3px_15px_#fff]
                            "
                            >
                                <div className="font-semibold text-2xl mb-8">
                                    <p><Choose2/></p>
                                </div>
                                <div className="">
                                    <p
                                        onClick={() => {
                                            setSelected(1);
                                        }}
                                        className="ml-5 mr-10 hover:scale-105 hover:border-solid hover:border-b-2 hover:border-white cursor-pointer mb-3 "
                                    >
                                        Bộ mô hình
                                    </p>
                                </div>
                                <div>
                                    <p
                                        onClick={() => {
                                            setSelected(2);
                                        }}
                                        className="ml-5 mr-10 hover:scale-105 hover:border-solid hover:border-b-2 hover:border-white cursor-pointer mb-3"
                                    >
                                        Phụ kiện
                                    </p>
                                </div>
                                <div>
                                    <p
                                        onClick={() => {
                                            setSelected(3);
                                        }}
                                        className="ml-5 mr-10 hover:scale-105 hover:border-solid hover:border-b-2 hover:border-white cursor-pointer mb-3"
                                    >
                                        Khác
                                    </p>
                                </div>
                            </div>

                            <div
                                className="pt-10 max-xl:pt-0 w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-10
                            overflow-y-scroll
                            pb-10
                            "
                            >
                                <Choose />
                            </div>
                        </div>

                        {/* <div className="bg-red-300 ">
123
                        </div>
                        <div className="store">
                        <div className="flex items-center justify-center">
                            <img src="https://placewaifu.com/image/200" alt="" />
                        </div>
                        <div className="flex items-center justify-center">
                            <img src="https://placewaifu.com/image/200" alt="" />
                        </div>
                        <div className="flex items-center justify-center">
                            <img src="https://placewaifu.com/image/200" alt="" />
                        </div>
                        <div className="flex items-center justify-center">
                            <img src="https://placewaifu.com/image/200" alt="" />
                        </div>
                        <div className="flex items-center justify-center">
                            <img src="https://placewaifu.com/image/200" alt="" />
                        </div>
                        </div> */}
                    </div>
                    <Footer />
                </div>
            )}
        </div>
    );
};

export default Store;
