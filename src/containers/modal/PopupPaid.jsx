import { AiOutlineCloseSquare } from "react-icons/ai";
import { Trans } from "react-i18next";

import './Popup.css'
const PopupPaid = ({ setIsOpenPopupPaid }) => {


  const paidHandle = () =>{
    console.log(123)
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
                {/* Header */}
                {/* <div
          style={{ borderBottom: "1px solid lightgray", paddingBottom: "10px" }}
        >
          <h1 style={{ margin: 0 }}>Title here</h1>
          <div
            onClick={setIsOpenPopup.bind(this, false)}
            style={{
              cursor: "pointer",
              position: "absolute",
              top: 10,
              right: 10
            }}
          >
            <AiOutlineCloseSquare />
          </div>
        </div> */}
                {/* Body */}
                {/* <svg
          class="checkmark"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52 52">
          <circle
            class="checkmark__circle" cx="26" cy="26" r="25" fill="none"
          />
          <path
            class="checkmark__check"
            fill="none"
            d="M14.1 27.2l7.1 7.2 16.7-16.8"
          />
        </svg> */}
                {/* <svg
          class="checkmark2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52 52">
          <circle
            class="checkmark2__circle" cx="26" cy="26" r="25" fill="none"
          />
          <path
            class="checkmark2__check"
            fill="none"
            d="M15 15 37 37"
          />
          <path
            class="checkmark3__check"
            fill="none"
            d="M15 37 37 15"
          />
        </svg> */}
                <div className="popup-form-container">

                    {/* <div className="popup-headline">
            <p>
              <Trans>Login Failed</Trans>
            </p>

          </div>
          <div className="popup-text">
            <p><Trans>You have entered wrong password</Trans></p>

          </div> */}


                    <div style={{width: 'max-content'}} className="study-popup">
                  
                            <div className='study-container'>
                                <div className='study-confirm'>
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
                                        {/* <div>
        <div></div>
        <h3>

          duoc su dung cac cong cu hoc tap mien phi
        </h3>
      </div> */}
                                        {/* <input type="text" placeholder='Type the code' /> */}
                                    </div>

                                    <button onClick={() => { setMode('free') }}>Let's go</button>
                                </div>
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
                                        <input type="text" placeholder='Type the code' />
                                        <button onClick={() => { paidHandle() }}>Confirm</button>
                                    </div>

                                </div>
                            </div>

             

                    </div>


                    <div className="popup-button">
                        <button onClick={setIsOpenPopupPaid.bind(this, false)}>
                            Ok
                        </button>
                    </div>
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
        </div>
    );
};
export default PopupPaid;
