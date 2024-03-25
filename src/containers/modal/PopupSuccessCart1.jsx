import { AiOutlineCloseSquare } from "react-icons/ai";
import db from '../../../firebase'
import './Popup.css'
import PopupSuccessCart2 from "./PopupSuccessCart2";
import { useState } from "react";
import { Timestamp, addDoc, collection } from "firebase/firestore";
const PopupSuccessCart1 = ({ setIsOpenPopupSuccessCart1, totalMoney, imgUrl, fu}) => {
  const [isOpenPopupSuccessCart2, setIsOpenPopupSuccessCart2] = useState(0)
  const [closePopup, setClosePopup] = useState(1)
  const [cartEmail, setCartEmail] = useState('')
  const [cartPhoneNumber, setCartPhoneNumber] = useState('')
  const [cartAddress, setCartAddress] = useState('')

  const addPurchase = () => {
    console.log(cartEmail, cartPhoneNumber, cartAddress, totalMoney)
    addDoc(collection(db, 'buy'), {
      cartEmail,cartPhoneNumber, cartAddress,
      totalMoney,
      createdAt: Timestamp.now().seconds,
      createdBy: fu,
      imgUrl,
      isDeliver: 0,
    })
  }

  return (
    <div
      onClick={() => setIsOpenPopupSuccessCart1(false)}
      style={{
        position: "fixed",
        background: "rgba(0,0,0,0.6)",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        display: 'flex',
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
          padding: "20px 10px",
          animation: "dropTop 0.1s linear",
          display: closePopup ? 'flex' : 'none',
        }}
      >

        <div className="popup-form-container">

          <div className="popup-headline">
            <p>
              Please fill out information
            </p>

          </div>
          <form>
            <div className="popup-text">
              <p>You have been successfully added your product to cart </p>
              {/* <br /> */}
              <p> </p>
              <div className="popup-input">
                <input 
                type="text" 
                placeholder="Email" 
                required={true}
                 onChange={evt => {setCartEmail(evt.target.value)}} 
                 />
                <input 
                type="text" 
                placeholder="Phone number" 
                required={true} 
                onChange={evt => {setCartPhoneNumber(evt.target.value)}} />
                <input 
                type="text" 
                placeholder="Address" 
                required={true} 
                onChange={evt => {setCartAddress(evt.target.value)}} />
                {/* <input type="text" /> */}
                {/* <input type="text" /> */}
              </div>

            </div>
            <div className="popup-button">
              <button onClick={(e) => { e.preventDefault(); addPurchase(); setClosePopup(0); setIsOpenPopupSuccessCart2(true) }}>
                Confirm
              </button>
            </div>
          </form>

          {/* <a href="/cart" style={{fontSize: 15, textDecoration: 'underline'}}>Or go to the cart page</a> */}
        </div>

        <div>
          <div class="ui-success">

          </div>
        </div>
        {/* Footer */}
        {/* <footer
          style={{ borderTop: "1px solid lightgray", paddingTop: "10px" }}
        >
          Footer here
        </footer> */}
      </div>
      {isOpenPopupSuccessCart2 && <PopupSuccessCart2
        setIsOpenPopupSuccessCart2={setIsOpenPopupSuccessCart2}
        setIsOpenPopupSuccessCart1={setIsOpenPopupSuccessCart1} />}

    </div>
  );
};
export default PopupSuccessCart1;
