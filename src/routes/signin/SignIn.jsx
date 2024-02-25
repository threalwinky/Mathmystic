import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

import { useMediaQuery } from 'react-responsive'
import { FcGoogle } from "react-icons/fc";
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';

import MathmysticPet from '../../assets/img/MathmysticPet.png';
import { NavBarWoutMenu } from '../../components';
import './SignIn.css'
import { Loading } from '../../containers';
import db from '../../firebase'
import { addDoc, onSnapshot, collection, doc, getDocs } from 'firebase/firestore'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { toast } from 'react-toastify';
import { Trans, useTranslation } from 'react-i18next';
import PopupSuccess from '../../containers/modal/PopupSuccess';
import PopupFailLogIn1 from '../../containers/modal/PopupFailLogIn1';
import PopupFailLogIn2 from '../../containers/modal/PopupFailLogIn2';
const provider = new GoogleAuthProvider();
const auth = getAuth();
const SignIn = () => {
    const [loading, setLoading] = useState(0)
    // toast('123')
    const [isOpenPopupSuccess, setIsOpenPopupSuccess] = useState(0)
    const [isOpenPopupFail1, setIsOpenPopupFail1] = useState(0)
    const [isOpenPopupFail2, setIsOpenPopupFail2] = useState(0)
    const [t, i18n]= useTranslation();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    var GoogleAuthentication = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                console.log(user)
                getDocs(collection(db, "account"))
                    .then((querySnapshot) => {
                        const newData = querySnapshot.docs
                            .map((doc) => ({ ...doc.data(), id: doc.id }));
                        const userEmail = user.email + '2'
                        if (newData.find(x => x.email === userEmail) == null) {
                            console.log(123456)
                            const docRef =
                                addDoc(collection(db, "account"), {
                                    name: user.displayName,
                                    email: String(userEmail),
                                    password: "123456",
                                    products: 0,
                                    avatar: user.photoURL
                                });

                            setTimeout(() => {
                                localStorage.setItem('user', userEmail)
                                localStorage.setItem('userAvatar', user.photoURL)
                                localStorage.setItem('userName', user.displayName)
                                window.location.href = '/'
                                localStorage.setItem('loggedin', '1')
                            }, 500)
                        }
                        else {
                            console.log(12345)
                            localStorage.setItem('user', userEmail)
                            localStorage.setItem('userAvatar', user.photoURL)
                            localStorage.setItem('userName', user.displayName)
                            window.location.href = '/'
                            localStorage.setItem('loggedin', '1')
                        }

                    })
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    }



    const [showPassword, setShowPassword] = useState(0)

    useEffect(() => {
        setLoading(1)
        localStorage.setItem('open2', '0')
    }, [])

    const checkUser = async (e) => {
        e.preventDefault()
        console.log(123)
        try {
            await getDocs(collection(db, "account"))
                .then((querySnapshot) => {
                    const newData = querySnapshot.docs
                        .map((doc) => ({ ...doc.data(), id: doc.id }));

                    const foundUser = (newData.find(x => x.email == email))
                    console.log(foundUser)
                    if (foundUser !== undefined) {
                        if (password !== foundUser.password) {
                            console.log(123)
                            // setIsOpenPopupSuccess(true)
                            setIsOpenPopupFail1(true)
                        }
                        else {
                            console.log('right')
                            localStorage.setItem('user', foundUser.email)
                            localStorage.setItem('userAvatar', foundUser.avatar)
                            localStorage.setItem('userName', foundUser.name)
                            
                            // window.location.href = '/'
                            localStorage.setItem('loggedin', '1')
                            setIsOpenPopupSuccess(true)
                        }
                    }
                    else {
                        setIsOpenPopupFail2(true)
                        // PopUp('Không tìm thấy tài khoản')
                    }
                })

        } catch (e) {
            console.error("Error adding document: ", e);
        }
        // console.log(email, password)
    }

    return (


        <div>
            {!loading ? <Loading /> : <div>

                <div className='App'>
                    {/* <div className='gradient__bg'> */}
                        <NavBarWoutMenu />
                    {/* </div> */}
                    <Form className='sign_in'>
                        <div className='sign_in-container'>
                            <h1><Trans>Sign In</Trans></h1>
                            <Form.Control
                                type="text"
                                placeholder=' Email'
                                className='sign_in-input'
                                onChange={e => setEmail(e.target.value)}
                            />
                            <Form.Control
                                type={showPassword ? "text" : "password"}
                                placeholder={t(' Password')}
                                className='sign_in-input' 
                                 onChange={e => setPassword(e.target.value)}
                             />
                                

                            <div className='sign_in-show_password'>
                                <Form.Check
                                    type="checkbox"
                                    onClick={() => { setShowPassword(!showPassword) }}
                                    label={t('Show Password')}

                                />
                            </div>
                            <Button type='submit' className='sign_in-submit_button' onClick={checkUser}>Sign In</Button>
                            <div className='sign_in-google_log_in'>
                                <p>Or log in with </p>
                                <FcGoogle size={25} className='sign_in-google_log_in-icon' onClick={GoogleAuthentication} />
                            </div>
                            <div>
                                <span>Dont have an account?</span>
                                <Link to={'/signup'} style={{ textDecoration: 'underline' }}> Sign Up</Link>
                            </div>
                        </div>

                    </Form>
                    {/* <button onClick={() => setIsOpenPopupSuccess(true)}>Open Popup</button> */}
                    {isOpenPopupSuccess && <PopupSuccess setIsOpenPopupSuccess={setIsOpenPopupSuccess} />}

                    {isOpenPopupFail1 && <PopupFailLogIn1 setIsOpenPopupFail1={setIsOpenPopupFail1} />}


                    {isOpenPopupFail2 && <PopupFailLogIn2 setIsOpenPopupFail2={setIsOpenPopupFail2} />}
                </div>
                
            </div>}
        </div>


    )
}

export default SignIn