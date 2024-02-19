import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';

import './Home.css'
import { Header, Introduction, NavBar, Footer, About, Document, Store, Contact } from '../../components';
import { PopUp, Loading, NotFound, Chatbot } from '../../containers'

const Home = () => {

    localStorage.setItem('open2', '1')
    if (localStorage.getItem('loggedin') == null)
        localStorage.setItem('loggedin', '0')
    console.log(localStorage.getItem('loggedin'))

    useEffect(() => {
        if (localStorage.getItem('loggedin') == '1') {
            PopUp('dang nhap thanh cong')
            localStorage.setItem('loggedin', '2')
        }
        if (localStorage.getItem('loggedin') == '3') {
            PopUp('dang xuat thanh cong')
            localStorage.setItem('loggedin', '0')
        }
    }, {
    })


    return (
        <div>
            <div className='App'>
                <div className='gradient__bg'>
                    <NavBar />
                </div>
                <Header />
                <Introduction />
                <About />
                <Document />
                <Store />
                <Contact />
                <Footer />
                <Chatbot />
            </div>
        </div>
    )
}

export default Home
