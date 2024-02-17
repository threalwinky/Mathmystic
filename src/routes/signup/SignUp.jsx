import React, { useState } from 'react'
import './SignUp.css'
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
import { toast } from 'react-toastify';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const provider = new GoogleAuthProvider();
const auth = getAuth();
const SignUp = () => {
  localStorage.setItem('open2', '0')
  const [showPassword, setShowPassword] = useState(0)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rpassword, setRpassword] = useState('')

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

  const addUser = async (e) => {
    e.preventDefault();
    try {

      if (password !== rpassword) {
        window.alert(`Password don't match`)
      }
      else {
        await getDocs(collection(db, "account"))
          .then((querySnapshot) => {
            const newData = querySnapshot.docs
              .map((doc) => ({ ...doc.data(), id: doc.id }));

            const foundUser = (newData.find(x => x.email == email))
            console.log(foundUser)
            if (foundUser !== undefined) {
              window.alert('Email have been taken')
            }
            else {
              const docRef = addDoc(collection(db, "account"), {
                name,
                email,
                password,
                products: [],
                avatar: "https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg"
              });
              console.log('Account created')
              window.alert('Account created')
            }
            // deleteDoc(doc(db, 'account', newData.find(x => x.username === "vv3").id))
          })
      }
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <div>
      <div className='App'>
        <div className='gradient__bg'>
          <NavBarWoutMenu />
        </div>
        <Form className='mmt__sign_up'>
          <div className='mmt__sign_up-container'>
            <h1>Sign Up</h1>

            <Form.Control
              type="text"
              placeholder='Name'
              className='mmt__sign_up-input'
              onChange={e => setName(e.target.value)} 
            />

            <Form.Control
              type="text"
              placeholder=' Email'
              className='mmt__sign_up-input'
              required={true}
              onChange={e => setEmail(e.target.value)} 
            />

            <Form.Control
              type={showPassword ? "text" : "password"}
              placeholder=' Password'
              className='mmt__sign_up-input' 
              onChange={e => setPassword(e.target.value)} 
              />
              

            <Form.Control
              type={showPassword ? "text" : "password"}
              placeholder='Repeat Password'
              className='mmt__sign_up-input' 
              onChange={e => setRpassword(e.target.value)}
              />

            <div className='mmt__log_in-show_password'>
              <Form.Check
                type="checkbox"
                onClick={() => { setShowPassword(!showPassword) }}
                label='Show Password'
              />
            </div>
            <Button type='submit' className='mmt__sign_up-submit_button' onClick={addUser}>Sign Up</Button>
            <div className='mmt__sign_up-google_sign_up'>
              <p>Or sign up and log in with </p>
              <FcGoogle onClick={GoogleAuthentication} size={25} className='mmt__sign_up-google_sign_up-icon' />
            </div>
            <div>
              <span>Already have an account?</span>
              <Link to={'/login'} style={{ textDecoration: 'underline' }}> Log In</Link>
            </div>
          </div>

        </Form>
      </div>
    </div>
  )
}

export default SignUp
