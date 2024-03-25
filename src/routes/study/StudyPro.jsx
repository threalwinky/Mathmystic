/*Module before File after */
import { useState, useEffect, React } from 'react'
import { Trans, withTranslation, useTranslation } from 'react-i18next';
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, updateDoc } from 'firebase/firestore'
import { useMediaQuery } from 'react-responsive'


import db from '../../../firebase'
import './StudyPro.css'
import MathmysticPet from '../../assets/img/MathmysticPet.png';
import MathmysticLogo from '../../assets/img/MathmysticLogo.png'

const StudyPro = () => {
    /* Necessary function */
    const [t, i18n] = useTranslation()
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1050px)'
    })

    
    return (
        <div>
244
        </div>
    )
}

export default StudyPro


// {(mode == 'no') ?
// <div className='study'>
//   <div className='study-container'>
//     <div className='study-confirm'>
//       <div className='study-confirm-top'>
//         <h1>Free</h1>
//         <h2>0$/month</h2>
//         <div>
//           <div></div>
//           <h3>
//             duoc su dung cac cong cu hoc tap mien phi
//           </h3>
//         </div>
//         <div>
//           <div></div>
//           <h3>
//             xem cac video bai giang va tai lieu co ban
//           </h3>
//         </div>
//         {/* <div>
//         <div></div>
//         <h3>

//           duoc su dung cac cong cu hoc tap mien phi
//         </h3>
//       </div> */}
//         {/* <input type="text" placeholder='Type the code' /> */}
//       </div>

//       <button onClick={() => { setMode('free') }}>Let's go</button>
//     </div>
//     <div className='study-confirm'>

//       <div className='study-confirm-top'>
//         <h1>Pro</h1>
//         <h2>15$/month</h2>
//         <div>
//           <div></div>
//           <h3>
//             duoc su dung cac cong cu hoc tap mien phi
//           </h3>
//         </div>
//         <div>
//           <div></div>
//           <h3>
//             xem tat ca cac video bai giang va tai lieu                    </h3>
//         </div>
//         <div>
//           <div></div>
//           <h3>
//             duoc hoi bai va tra loi boi gia su
//           </h3>
//         </div>
//       </div>
//       <div>
//       </div>
//       <div>
//         <input type="text" placeholder='Type the code' />
//         <button onClick={() => { setMode('pro') }}>Confirm</button>
//       </div>

//     </div>
//   </div>

// </div>


// : (

//   (mode == 'free') ?

//     <StudyFree />

//     : <StudyPro />

// )}