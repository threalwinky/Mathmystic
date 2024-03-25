import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import React from "react";
import db from '../../firebase'
import Store1_1 from '../../assets/img/Store/Store1/Store1_1.jpeg'
import Store1_2 from '../../assets/img/Store/Store1/Store1_2.jpeg'
import Store1_3 from '../../assets/img/Store/Store1/Store1_3.jpeg'
import Store2_1 from '../../assets/img/Store/Store2/Store2_1.png'
import Store2_2 from '../../assets/img/Store/Store2/Store2_2.jpeg'
// import Store2_4 from '../../assets/img/Store/Store2/'
import Store2_3 from '../../assets/img/Store/Store2/Store2_3.jpeg'
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
        "name": "Geometry learning kit",
        "imgUrl": [Store2_1, Store2_2, Store2_3],
        "price": 249000,
        "available": "1",
        "description": "Best-seller",
        "about": [
            "1 Wooden hole board 20*20cm",
            "2 Round elastic bands",
            "6 Long elastic bands with 2 holes",
            "4 Antennas",
            "3 Round rings",
            "1 Mathematics handbook (2 versions)",
            "1 Instructional book"
        ]
    });
    setDoc(doc(db, "product", "bo-dung-cu-hoc-tap-hinh-hoc-cho-hoc-sinh-khiem-thi"), {
        "id": "bo-dung-cu-hoc-tap-hinh-hoc-cho-hoc-sinh-khiem-thi",
        "name": "Geometry learning kit for visually impaired students",
        "imgUrl": [Store2_1, Store2_2, Store2_3],
        "price": 249000,
        "available": "1",
        "description": "Special",
        "about": [
            "1 Wooden hole board 20*20cm",
            "2 Round elastic bands",
            "6 Long elastic bands with 2 holes",
            "4 Antennas",
            "3 Round rings",
            "1 Geometry flashcard",
            // "1 Instructional book"
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