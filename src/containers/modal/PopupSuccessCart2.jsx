import { AiOutlineCloseSquare } from "react-icons/ai";

import './Popup.css'
const PopupSuccessCart2 = ({ setIsOpenPopupSuccessCart2, setIsOpenPopupSuccessCart1 }) => {
  return (
    <div
      onClick={() => setIsOpenPopupSuccessCart2(false)}
      style={{
        position: "fixed",
        background: "rgba(0,0,0,0)",
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
          padding: "20px 10px",
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
        <svg
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
        </svg>
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
        <div className="popup-success-container">

          <div className="popup-headline">
            <p>
              Buying successfully
            </p>

          </div>
          <div className="popup-text">
            <p>You have been successfully bought our products </p>
            {/* <br /> */}
            <p> </p>
          </div>
          <div className="popup-button">
            <button onClick={() => {setIsOpenPopupSuccessCart1(false); setIsOpenPopupSuccessCart2(false)}}>
              Continue
            </button>
          </div>
          <a href="/purchase" style={{fontSize: 15, textDecoration: 'underline'}}>Or go to the purchase page</a>
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
export default PopupSuccessCart2;
