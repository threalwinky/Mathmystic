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

const Setting = () => {
    /* Necessary function */
    const [t, i18n] = useTranslation()
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1050px)'
    })
    const [username, setUsername] = useState((''))
    
    const [password, setPassword] = useState('')
    const [c, setC] = useState(0)
    const test = () => {
        const ad = new Audio(b)
        // ad.muted = true
        ad.play()
        console.log(1234)
    }

    const handle = () => {
        console.log(username)
        const d = new Date()
        // console.log(d.getFullYear())
        setPassword(d.getHours() + "" + d.getMinutes() + "" + "")
    }


    return (
        // <div onDoubleClick={test} className='setting'>
        //     <button onDoubleClick={test}>

        //     </button>
        // </div>
//        <div className="setting">
//         <div className="left">
//             <div className="left-header">
//                 <img src={MathmysticLogo} alt="" />
                
//             </div>
//             <div className="left-contetn">

//             </div>
//             <div className="left-footer">

//             </div>
//         </div>
//         <div className="right">
//             <div className="right-header">
// 123
//             </div>
//         </div>
//         <input type="text" />
//         <input type="text" />
//         <input type="text" />

//        </div>
    <div className="setting">
        <div className='setting-container'>
        <input type="text" placeholder='Mã code' />
        <button>Xác nhận</button>
        </div>
        


    </div>
    
    )
}

export default Setting
