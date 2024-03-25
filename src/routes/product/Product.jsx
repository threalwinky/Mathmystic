/*Module before File after */
import { useState, useEffect, React } from 'react'
import { Trans, withTranslation, useTranslation } from 'react-i18next';
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, updateDoc } from 'firebase/firestore'
import { useMediaQuery } from 'react-responsive'
import { useParams } from "react-router-dom";
import { Footer, NavBarWoutMenu } from '../../components';
import { Loading, NotFound, Chatbot, Headpage } from '../../containers'
import MainProduct from './MainProduct'

import db from '../../../firebase'
import './Product.css'
import MathmysticPet from '../../assets/img/MathmysticPet.png';
import MathmysticLogo from '../../assets/img/MathmysticLogo.png'
import Store1_1 from '../../assets/img/Store/Store1/Store1_1.webp'
import Store1_2 from '../../assets/img/Store/Store1/Store1_2.webp'
import Store1_3 from '../../assets/img/Store/Store1/Store1_3.png'
import Store2_1 from '../../assets/img/Store/Store2/Store2_1.webp'
import Store2_2 from '../../assets/img/Store/Store2/Store2_2.webp'
const Product = () => {
    /* Necessary function */
    const [t, i18n] = useTranslation()
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1050px)'
    })

    const params = useParams();
    const productList = [
        {
            "id": "bo-dung-cu-hoc-tap-hinh-hoc-cho-hoc-sinh-khiem-thi",
            "name": "Bo dung cu hoc tap hinh hoc cho hoc sinh khiem thi",
            "imgUrl": [Store1_1, Store1_2, Store1_3],
            "price": "0₫",
            "available": "0",
            "description": "",
            "about": [
                "1 Bảng lỗ gỗ 20*20cm",
                "2 cọng dây thun tròn",
                "6 cọng dây thun dài 2 lỗ",
                "4 cây ăng ten",
                "3 Khoen tròn ",
                "1 Flashcard hình học"
            ]
        },
        {
            "id": "bo-dung-cu-hinh-hoc",
            "name": "Bo dung cu hinh hoc",
            "imgUrl": [Store2_1, Store2_2, Store1_3],
            "price": "249,000₫",
            "available": "1",
            "description": "Best-seller",
            "about": [
                "1 Bảng lỗ gỗ 20*20cm",
                "2 cọng dây thun tròn",
                "6 cọng dây thun dài 2 lỗ",
                "4 cây ăng ten",
                "3 Khoen tròn ",
                "sổ tay toán học ( 2 phiên bản )",
                "sách hướng dẫn"
            ]
        },

    ]
    const [products, setProducts] = useState([])
    const [foundProduct, setFoundProduct] = useState({
        "id": "bo-dung-cu-hinh-hoc",
        "name": "Bo dung cu hinh hoc",
        "imgUrl": [Store2_1, Store2_2, Store1_3],
        "price": "249,000₫",
        "available": "1",
        "description": "Best-seller",
        "about": [
            "1 Bảng lỗ gỗ 20*20cm",
            "2 cọng dây thun tròn",
            "6 cọng dây thun dài 2 lỗ",
            "4 cây ăng ten",
            "3 Khoen tròn ",
            "sổ tay toán học ( 2 phiên bản )",
            "sách hướng dẫn"
        ]
    })
    const [loading, setLoading] = useState(0)
    const fetchProduct = async () => {

        await getDocs(collection(db, "product"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                const newData2 = []
                newData.forEach(element => {
                    newData2.push(element)
                });
                // console.log(newData2)
                setProducts(newData2.sort(function (a, b) { return b.createdAt - a.createdAt }));
                // console.log(newData)
                // console.log(productList)
                setFoundProduct(newData.find((productId) => {
                    return productId.id == params.id
                }))
                setLoading(1)
            })

     
    }

    useEffect(() => {
        fetchProduct()
    }, [])
    const productCheck = productList.find((productId) => {
        return productId.id == params.id
    }) != undefined



    window.scrollTo(0, 0);

    return (
        <div>
            {!loading ? <Headpage /> :
                <div>
                    {productCheck ?
                        <div className='App'>

                            <div className='gradient__bg'>
                                <NavBarWoutMenu />
                            </div>
                            <MainProduct productInfo={foundProduct} />
                            <Chatbot />
                            <Footer />
                        </div>
                        : <NotFound />}
                </div>

            }

        </div>
    )
}

export default Product
