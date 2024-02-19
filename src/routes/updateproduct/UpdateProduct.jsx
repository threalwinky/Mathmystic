import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import React from "react";
import db from '../../firebase'
import Store1_1 from '../../assets/img/Store/Store1/Store1_1.webp'
import Store1_2 from '../../assets/img/Store/Store1/Store1_2.webp'
import Store1_3 from '../../assets/img/Store/Store1/Store1_3.png'
import Store2_1 from '../../assets/img/Store/Store2/Store2_1.webp'
import Store2_2 from '../../assets/img/Store/Store2/Store2_2.webp'
const addProduct = () => {
    // const docRef = addDoc(collection(db, "product"), {

    //     "id": "bo-dung-cu-hinh-hoc",
    //         "name": "Bo dung cu hinh hoc",
    //         "imgUrl": [Store2_1, Store2_2, Store1_3],
    //         "price": "249,000₫",
    //         "available": "1",
    //         "description": "Best-seller",
    //         "about": [
    //             "1 Bảng lỗ gỗ 20*20cm",
    //             "2 cọng dây thun tròn",
    //             "6 cọng dây thun dài 2 lỗ",
    //             "4 cây ăng ten",
    //             "3 Khoen tròn ",
    //             "sổ tay toán học ( 2 phiên bản )",
    //             "sách hướng dẫn"
    //         ]
    // });
    setDoc(doc(db, "product", "bo-dung-cu-hinh-hoc"), {
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
      });
}

const UpdateProduct = () => {
    return (
        <div>

            <button onClick={addProduct}>
                Click here
            </button>
        </div>
    )
}

export default UpdateProduct