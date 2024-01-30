// import logo from './logo.svg';
// import './App.css';
// import SignIn from './components/auth/SignIn';
// import SignUp from './components/auth/SignUp';
// import AuthDetails from './components/AuthDetails';

// function App() {
//   return (
//     <div className="App">
//       <SignIn />
//       <SignUp />
//       <AuthDetails />
//     </div>
//   );
// }

// export default App;



// export default function App() {
//   return (
//     <h1 className="text-3xl font-bold">
//       Hello world!
//     </h1>
//   )
// }


// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import { withTranslation , Trans } from 'react-i18next';

// class App extends Component {
//   render() {
//     const { t, i18n } = this.props;

//     const changeLanguage = (lng) => {
//       i18n.changeLanguage(lng);
//     }

//     return (
//       <div className="App">
//         <div className="App-header">
//           <h2><Trans>
            
//             chao ban
//           </Trans></h2>
//           <button onClick={() => changeLanguage('vn')}>vn</button>
//           <button onClick={() => changeLanguage('en')}>en</button>
//         </div>
//         <div className="App-intro">
//           <h1>
//           <Trans>
            
//             bye
//           </Trans>
//           </h1>
         
//         </div>
//       </div>
//     );
//   }
// }
// // extended main view with translate hoc
// export default withTranslation('translations')(App);


// import React, {useState} from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import {  createUserWithEmailAndPassword  } from 'firebase/auth';
// import { auth } from './firebase';
 
// const Signup = () => {
//     const navigate = useNavigate();
 
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('');
 
//     const onSubmit = async (e) => {
//       e.preventDefault()
     
//       await createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             // Signed in
//             const user = userCredential.user;
//             console.log(user);
//             navigate("/login")
//             // ...
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             console.log(errorCode, errorMessage);
//             // ..
//         });
 
   
//     }
 
//   return (
//     <main >        
//         <section>
//             <div>
//                 <div>                  
//                     <h1> FocusApp </h1>                                                                            
//                     <form>                                                                                            
//                         <div>
//                             <label htmlFor="email-address">
//                                 Email address
//                             </label>
//                             <input
//                                 type="email"
//                                 label="Email address"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}  
//                                 required                                    
//                                 placeholder="Email address"                                
//                             />
//                         </div>

//                         <div>
//                             <label htmlFor="password">
//                                 Password
//                             </label>
//                             <input
//                                 type="password"
//                                 label="Create password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)} 
//                                 required                                 
//                                 placeholder="Password"              
//                             />
//                         </div>                                             
                        
//                         <button
//                             type="submit" 
//                             onClick={onSubmit}                        
//                         >  
//                             Sign up                                
//                         </button>
                                                                     
//                     </form>
                   
//                     <p>
//                         Already have an account?{' '}
//                         <NavLink to="/login" >
//                             Sign in
//                         </NavLink>
//                     </p>                   
//                 </div>
//             </div>
//         </section>
//     </main>
//   )
// }
 
// export default Signup


// import logo from './logo.svg';
// import './App.css';
// import SignIn from './components/auth/SignIn';
// import Home from './components/auth/Home';
// import SignUp from './components/auth/SignUp';
// import AuthDetails from './components/AuthDetails';

// function App() {
//   return (
//     <div className="App">
//       <Home />
//     </div>
//   );
// }

// export default App;

import Navbar from "./components/UI/Navbar"
import Pricing from "./components/UI/Price"
import Home from "./components/UI/Home"
import About from "./components/UI/About"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <div className="header">
        ge
      </div>
      <Navbar />
      <div className="container">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
        </Routes>
        
      </div>
    </>
  )
}

export default App