/*Module before File after */
import { useState, useEffect, React } from 'react'
import { Trans, withTranslation, useTranslation } from 'react-i18next';
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, updateDoc } from 'firebase/firestore'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";


import db from '../../../firebase'
import './SignIn.css'
import MathmysticPet from '../../assets/img/MathmysticPet.png';
import MathmysticLogo from '../../assets/img/MathmysticLogo.png'
import { NavBarWoutMenu } from '../../components';
import './SignIn.css'
import { Loading } from '../../containers';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import PopupSuccess from '../../containers/modal/PopupSuccess';
import PopupFailLogIn1 from '../../containers/modal/PopupFailLogIn1';
import PopupFailLogIn2 from '../../containers/modal/PopupFailLogIn2';
const SignIn = () => {
    /* Necessary function */
    const [t, i18n] = useTranslation()
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1050px)'
    })

    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const [loading, setLoading] = useState(0)
    // toast('123')
    const [isOpenPopupSuccess, setIsOpenPopupSuccess] = useState(0)
    const [isOpenPopupFail1, setIsOpenPopupFail1] = useState(0)
    const [isOpenPopupFail2, setIsOpenPopupFail2] = useState(0)
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
                            // window.location.href = '/'
                            setIsOpenPopupSuccess(1)
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
                    <form className='sign_in'>
                        <div className='sign_in-container'>
                            <h1><Trans>Sign In</Trans></h1>
                            <input
                                type="text"
                                placeholder=' Email'
                                className='sign_in-input'
                                onChange={e => setEmail(e.target.value)}
                            />
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder={t(' Password')}
                                className='sign_in-input' 
                                 onChange={e => setPassword(e.target.value)}
                             />
                                

                            <div className='sign_in-show_password'>
                                <input
                                    type="checkbox"
                                    onClick={() => { setShowPassword(!showPassword) }}
                                    // ={t('Show Password')}

                                />
                                <label htmlFor=""><Trans>Show Password</Trans></label>
                            </div>
                            <button type='submit' className='sign_in-submit_button' onClick={checkUser}>Sign In</button>
                            <div className='sign_in-google_log_in'>
                                <p>Or log in with </p>
                                <FcGoogle size={25} className='sign_in-google_log_in-icon' onClick={GoogleAuthentication} />
                            </div>
                            <div className='sign_in_ps'>
                                <span>Dont have an account?</span>
                                <Link to={'/signup'} style={{ textDecoration: 'underline' }}> Sign Up here</Link>
                            </div>
                        </div>

                    </form>
                    {/* <button onClick={() => setIsOpenPopupSuccess(true)}>Open Popup</button> */}
                    {isOpenPopupSuccess ? <PopupSuccess setIsOpenPopupSuccess={setIsOpenPopupSuccess} /> : ""}
                    {isOpenPopupFail1 ? <PopupFailLogIn1 setIsOpenPopupFail1={setIsOpenPopupFail1} /> : ""}
                    {isOpenPopupFail2 ? <PopupFailLogIn2 setIsOpenPopupFail2={setIsOpenPopupFail2} /> : ""}
                </div>
                
            </div>}
        </div>
    )
}

export default SignIn
