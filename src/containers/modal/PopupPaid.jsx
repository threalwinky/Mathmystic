import { AiOutlineCloseSquare } from "react-icons/ai";
import { Trans } from "react-i18next";

import './Popup.css'
import { useEffect, useState } from "react";
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, updateDoc } from 'firebase/firestore'
import db from '../../../firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const PopupPaid = ({ setIsOpenPopupPaid }) => {

  const [code, setCode] = useState('')

  const [foundUser, setFoundUser] = useState([])

  const [codes, setCodes] = useState([])

  useEffect(() => {
    getDocs(collection(db, "account"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        const foundUser2 = (newData.find(x => x.email == localStorage.getItem('user')))
        setFoundUser(foundUser2)
        // setName(foundUser2.name)
        // setLoading(1)
      })
    getDocs(collection(db, "code"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        // const foundUser2 = (newData.find(x => x.email == localStorage.getItem('user')))
        setCodes(newData)
        // console.log(newData)
        // setName(foundUser2.name)
        // setLoading(1)
      })
  }, [])

  const paidUpdate = (i) => {
    // updateDoc(collection())
    if (i.use == 1) {
      toast.error('Mã code đã được sử dụng')
      return 0
    }
    updateDoc(doc(db, 'code', i.id), {
      use: 1
    })
    updateDoc(doc(db, 'account', foundUser.id), {
      paid: "pro"
    })
    toast.success('Tài khoản đã được kích hoạt pro!');
    setTimeout(() => { window.location.reload() }, 3000)
  }

  const paidHandle = () => {
    // console.log(code.toLowerCase())
    // setIsOpenPopupPaid.bind(this, false)
    // setIsOpenPopupPaid(false)
    for (var i of codes) {
      if (code == '') return 0
      // console.log(i)
      if (i.src.toLowerCase() == code.toLowerCase()) {
        // console.log("Yes")
        paidUpdate(i)
        return 0
      }
    }
    toast.error('Mã code không đúng')
  }

  return (
    <div
      onClick={setIsOpenPopupPaid.bind(this, false)}
      style={{
        position: "fixed",
        background: "rgba(0,0,0,0.6)",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      {/* Content */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          background: "white",
          borderRadius: "8px",
          width: "max-content",
          padding: "50px",
          animation: "dropTop 0.1s linear"
        }}
      >

        <div className="popup-form-container">

          <div style={{ width: 'max-content' }} className="study-popup">

            <div className='study-container'>
              {/* <div className='study-confirm'>
                                    <div className='study-confirm-top'>
                                        <h1>Free</h1>
                                        <h2>0$/month</h2>
                                        <div>
                                            <div></div>
                                            <h3>
                                                duoc su dung cac cong cu hoc tap mien phi
                                            </h3>
                                        </div>
                                        <div>
                                            <div></div>
                                            <h3>
                                                xem cac video bai giang va tai lieu co ban
                                            </h3>
                                        </div>
                                        
                                    </div>

                                    <button onClick={() => { setMode('free') }}>Let's go</button>
                                </div> */}
              <div className='study-confirm'>

                <div className='study-confirm-top'>
                  <h1>Pro</h1>
                  <h2>15$/month</h2>
                  <div>
                    <div></div>
                    <h3>
                      duoc su dung cac cong cu hoc tap mien phi
                    </h3>
                  </div>
                  <div>
                    <div></div>
                    <h3>
                      xem tat ca cac video bai giang va tai lieu
                    </h3>
                  </div>
                  <div>
                    <div></div>
                    <h3>
                      duoc hoi bai va tra loi boi gia su
                    </h3>
                  </div>
                </div>
                <div>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder='Type the code'
                    value={code}
                    onChange={evt => { setCode(evt.target.value) }}
                  />
                  <button onClick={() => { paidHandle() }}>Confirm</button>
                  <div className="popup-button">
                    <button onClick={setIsOpenPopupPaid.bind(this, false)}>
                      Ok
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>



        </div>

        <div>
          <div className="ui-success">

          </div>
        </div>
        {/* Footer */}
        {/* <footer
          style={{ borderTop: "1px solid lightgray", paddingTop: "10px" }}
        >
          Footer here
        </footer> */}
      </div>
    </div>
  );
};
export default PopupPaid;
