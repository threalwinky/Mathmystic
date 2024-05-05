/*Module before File after */
import { useState, useEffect, React } from 'react'
import { Trans, withTranslation, useTranslation } from 'react-i18next';
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, updateDoc } from 'firebase/firestore'
import { useMediaQuery } from 'react-responsive'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { AnimatePresence, motion } from 'framer-motion';
import 'react-toastify/dist/ReactToastify.css';
import { Scrollbar } from 'react-scrollbars-custom';
import db from '../firebase'
import { Forum, Home, Setting, SignIn, SignUp, Study, Test } from './routes';
import Store from './routes/store/Store';

const App = () => {
  /* Necessary function */
  const [t, i18n] = useTranslation()
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1050px)'
  })
  const contextClass = {
    success: "bg-green-200",
    error: "bg-red-200",
    info: "bg-blue-200",
    warning: "bg-orange-100",
    default: "bg-sky-100",
    dark: "bg-indigo-100 font-gray-300",
  };

  return (
    <AnimatePresence mode='wait' presenceAffectsLayout="true" >
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path='/test' element={<Test />}></Route>
        <Route path="/forum" element={<Forum />} />
        <Route path="/forum/:id" element={<Forum />} />
        <Route path="/store" element={<Store />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="study" element={<Study />}></Route>
        <Route path="study/audio/:id" element={<Study />}></Route>
        <Route path="study/doc/:id" element={<Study />}></Route>
        <Route path="study/videos" element={<Study />}></Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
        progress={undefined}
        draggableDirection='y'
        toastClassName={(context) =>
          contextClass[context?.type || "default"] +
          " relative flex p-5 my-3 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer"
        }
        bodyClassName={() => "flex text-black font-rbt font-normal text-lg"}
      // stacked={true}
      />
    </AnimatePresence>
  )
}

export default App
