import React, { useEffect, useState } from 'react'
import './LogIn.css'
import { Link } from 'react-router-dom'
import MathmysticPet from '../../assets/img/MathmysticPet.png';
import { NavBarWoutMenu } from '../../components';
import { useMediaQuery } from 'react-responsive'
import { FcGoogle } from "react-icons/fc";
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';

import { Loading, PopUp } from '../../containers';
import db from '../../firebase'
import { addDoc, onSnapshot, collection, doc, getDocs } from 'firebase/firestore'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { toast } from 'react-toastify';


const provider = new GoogleAuthProvider();
const auth = getAuth();
const LogIn = () => {
    const [loading, setLoading] = useState(0)
    // toast('123')
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
                            PopUp('Wrong password')
                        }
                        else {
                            console.log('right')
                            localStorage.setItem('user', foundUser.email)
                            localStorage.setItem('userAvatar', foundUser.avatar)
                            localStorage.setItem('userName', foundUser.name)
                            window.location.href = '/'
                            localStorage.setItem('loggedin', '1')
                        }
                    }
                    else {
                        PopUp('Account not found')
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
                    <div className='gradient__bg'>
                        <NavBarWoutMenu />
                    </div>
                    <Form className='mmt__log_in'>
                        <div className='mmt__log_in-container'>
                            <h1>Log In</h1>
                            <Form.Control
                                type="text"
                                placeholder=' Email'
                                className='mmt__log_in-input'
                                onChange={e => setEmail(e.target.value)}
                            />
                            <Form.Control
                                type={showPassword ? "text" : "password"}
                                placeholder=' Password'
                                className='mmt__log_in-input' 
                                 onChange={e => setPassword(e.target.value)}
                             />
                                

                            <div className='mmt__log_in-show_password'>
                                <Form.Check
                                    type="checkbox"
                                    onClick={() => { setShowPassword(!showPassword) }}
                                    label='Show Password'

                                />
                            </div>
                            <Button type='submit' className='mmt__log_in-submit_button' onClick={checkUser}>Sign In</Button>
                            <div className='mmt__log_in-google_log_in'>
                                <p>Or log in with </p>
                                <FcGoogle size={25} className='mmt__log_in-google_log_in-icon' onClick={GoogleAuthentication} />
                            </div>
                            <div>
                                <span>Dont have an account?</span>
                                <Link to={'/signup'} style={{ textDecoration: 'underline' }}> Sign Up</Link>
                            </div>
                        </div>

                    </Form>
                </div>

            </div>}
        </div>


    )
}

export default LogIn
