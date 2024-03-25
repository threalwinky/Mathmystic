/*Module before File after */
import { useState, useEffect, React } from 'react'
import { Trans, withTranslation, useTranslation } from 'react-i18next';
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, updateDoc } from 'firebase/firestore'
import { useMediaQuery } from 'react-responsive'
import './SignUp.css'
import { Link } from 'react-router-dom'
import { NavBarWoutMenu } from '../../components';
import { FcGoogle } from "react-icons/fc";

import db from '../../../firebase'
import './SignUp.css'
import MathmysticPet from '../../assets/img/MathmysticPet.png';
import MathmysticLogo from '../../assets/img/MathmysticLogo.png'
import { Loading } from '../../containers';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import PopupSuccessSignUp1 from '../../containers/modal/PopupSuccessSignUp1';
import PopupFailSignUp2 from '../../containers/modal/PopupFailSignUp2';
import PopupFailSignUp1 from '../../containers/modal/PopupFailSignUp1';
const provider = new GoogleAuthProvider();
const auth = getAuth();
const SignUp = () => {
  /* Necessary function */
  const [t, i18n] = useTranslation()
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1050px)'
  })


  localStorage.setItem('open2', '0')
  const [loading, setLoading] = useState(0)
  const [showPassword, setShowPassword] = useState(0)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rpassword, setRpassword] = useState('')
  const [isOpenPopupSuccessSignUp1, setIsOpenPopupSuccessSignUp1] = useState(0)
  const [isOpenPopupFailSignUp1, setIsOpenPopupFailSignUp1] = useState(0)
  const [isOpenPopupFailSignUp2, setIsOpenPopupFailSignUp2] = useState(0)
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
                // window.location.href = '/'
                localStorage.setItem('loggedin', '1')

              }, 500)
            }
            else {
              console.log(12345)
              localStorage.setItem('user', userEmail)
              localStorage.setItem('userAvatar', user.photoURL)
              localStorage.setItem('userName', user.displayName)
              // window.location.href = '/'
              setIsOpenPopupSuccessSignUp1(1)
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

  const addUser = async (e) => {
    e.preventDefault();
    try {

      if (password !== rpassword) {
        setIsOpenPopupFailSignUp1(1)
        // window.alert(`Password don't match`)
      }
      else {
        await getDocs(collection(db, "account"))
          .then((querySnapshot) => {
            const newData = querySnapshot.docs
              .map((doc) => ({ ...doc.data(), id: doc.id }));

            const foundUser = (newData.find(x => x.email == email))
            console.log(foundUser)
            if (foundUser !== undefined) {
              setIsOpenPopupFailSignUp2(1)
              // window.alert('Email have been taken')
            }
            else {
              const docRef = addDoc(collection(db, "account"), {
                name,
                email,
                password,
                products: [],
                avatar: "https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg"
              });
              setIsOpenPopupSuccessSignUp1(1)
              // console.log('Account created')
              // window.alert('Account created')
            }
            // deleteDoc(doc(db, 'account', newData.find(x => x.username === "vv3").id))
          })
      }
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  useEffect(() => {
    setLoading(1)
    localStorage.setItem('open2', '0')
}, [])
  return (
    <div>
      {!loading ? <Loading/> : 
      
      
      <div className='App'>
      <div className='gradient__bg'>
        <NavBarWoutMenu />
      </div>
      <form className='sign_up'>
        <div className='sign_up-container'>
          <h1>Sign Up</h1>

          <input
            type="text"
            placeholder='Name'
            className='sign_up-input'
            onChange={e => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder=' Email'
            className='sign_up-input'
            required={true}
            onChange={e => setEmail(e.target.value)}
          />

          <input
            type={showPassword ? "text" : "password"}
            placeholder=' Password'
            className='sign_up-input'
            onChange={e => setPassword(e.target.value)}
          />


          <input
            type={showPassword ? "text" : "password"}
            placeholder='Repeat Password'
            className='sign_up-input'
            onChange={e => setRpassword(e.target.value)}
            
          />
          
          <div className='sign_up-show_password'>
            <input
              type="checkbox"
              onClick={() => { setShowPassword(!showPassword) }}
              label='Show Password'
            />
            <label htmlFor=""><Trans>Show Password</Trans></label>
          </div>
          <button type='submit' className='sign_up-submit_button' onClick={addUser}>Sign Up</button>
          <div className='sign_up-google_sign_up'>
            <p>Or sign up and log in with </p>
            <FcGoogle onClick={GoogleAuthentication} size={25} className='sign_up-google_sign_up-icon' />
          </div>
          <div className='sign_up_ps'>
            <span>Already have an account?</span>
            <Link to={'/signin'} style={{ textDecoration: 'underline' }}> Log In</Link>
          </div>
        </div>

      </form>
      {isOpenPopupSuccessSignUp1 ? <PopupSuccessSignUp1 setIsOpenPopupSuccessSignUp1={setIsOpenPopupSuccessSignUp1} /> : ""}
      {isOpenPopupFailSignUp1 ? <PopupFailSignUp1 setIsOpenPopupFailSignUp1={setIsOpenPopupFailSignUp1} /> : ""}
      {isOpenPopupFailSignUp2 ? <PopupFailSignUp2 setIsOpenPopupFailSignUp2={setIsOpenPopupFailSignUp2} /> : ""}
    </div>
      
      
      }
     
    </div>
  )
}

export default SignUp
