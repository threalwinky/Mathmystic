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
        <div style={{display: "flex", flexDirection: "column"}}>
        <input type="text" placeholder='Username' value={username} onChange={evt => setUsername(evt.target.value)} />
<input type="text" placeholder='Password' onChange={evt => {setPassword(evt.target.value)}} />
            <button onClick={() => handle()} >sign In</button>
        </div >
        {/* {2023 - username} */}
        {password}
        {/* <img src={MathmysticLogo} alt="" width={1000000000}  /> */}
        {c ? "" : <svg
                fill="none"
                viewBox="0 0 24 24"
                height="1em" width="1em"
                className='close-icon'
                fontSize={40} onClick={() => setModalRight(!modalRight)}>
                <path
                  fill="currentColor"
                  d="M6.225 4.811a1 1 0 00-1.414 1.414L10.586 12 4.81 17.775a1 1 0 101.414 1.414L12 13.414l5.775 5.775a1 1 0 001.414-1.414L13.414 12l5.775-5.775a1 1 0 00-1.414-1.414L12 10.586 6.225 4.81z"
                />
              </svg>}
        


    </div>
    
    )
}

export default Setting
