import React, { useEffect } from 'react'
import Popup from 'reactjs-popup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './PopUp.css'

const PopUp = (msg) => {
    
    toast.success(msg, {
        position: 'top-center',
        autoClose: 5000,
        closeOnClick: true
    })
    
    return (
        <div>
          
        </div>
    );
}

export default PopUp
