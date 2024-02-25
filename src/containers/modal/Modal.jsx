import React, { useState } from 'react'
import Popup from './PopupSuccess'
const Modal = () => {
  const [isOpenPopup, setIsOpenPopup] = useState(0)
  return (
    <div>
      <h1>React Popup Animate</h1>
      <button onClick={setIsOpenPopup.bind(this, true)}>Open Popup</button>
      {isOpenPopup && <Popup setIsOpenPopup={setIsOpenPopup} />}
    </div>
  )
}

export default Modal
