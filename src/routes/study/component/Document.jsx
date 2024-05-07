/*Module before File after */
import { useState, useEffect, React } from 'react'
import { Trans, withTranslation, useTranslation } from 'react-i18next';
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, updateDoc } from 'firebase/firestore'
import { useMediaQuery } from 'react-responsive'


import db from '../../../../firebase'
import './Document.css'
import MathmysticPet from '../../../assets/img/MathmysticPet.png';
import MathmysticLogo from '../../../assets/img/MathmysticLogo.png'

const Document = ({ params }) => {
    /* Necessary function */
    const [t, i18n] = useTranslation()
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1050px)'
    })

    const [selected, setSelected] = useState("so-tay-hinh-hoc")

    useEffect(() => {
// console.log(params.id)
setSelected(params.id)
        // console.log(selected)
    }, [])



    return (
        <div className='study-document'>

            {/* <p>{params.id}</p> */}
            {/* <p>{selected}</p> */}
            <select name="" id="" value={selected}
                onChange={evt => setSelected(evt.target.value)}
            >
                <option value="so-tay-hinh-hoc">Sổ tay hình học</option>
                <option value="sach-huong-dan-su-dung">Sách hướng dẫn sử dụng</option>
            </select>
            <iframe
                allowFullScreen="allowfullscreen"
                scrolling="no" className="fp-iframe"
                style={{
                    border: "1px solid lightgray",
                    //   width: isDesktopOrLaptop ? "80%" : '90%', 
                      height: isDesktopOrLaptop ? "100%" : "100%", 
                    padding: 0
                }}
                src={ selected == "so-tay-hinh-hoc" ? "https://heyzine.com/flip-book/2a810dd29f.html" : "https://heyzine.com/flip-book/9f0a65b367.html"}>
            </iframe>
        </div>
    )
}

export default Document
