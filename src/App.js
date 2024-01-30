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


import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withTranslation , Trans } from 'react-i18next';

class App extends Component {
  render() {
    const { t, i18n } = this.props;

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    }

    return (
      <div className="App">
        <div className="App-header">
          <h2>{t('i18n')}</h2>
          <button onClick={() => changeLanguage('vn')}>vn</button>
          <button onClick={() => changeLanguage('en')}>en</button>
        </div>
        <div className="App-intro">
          <Trans>
            Hello
          </Trans>
        </div>
      </div>
    );
  }
}
// extended main view with translate hoc
export default withTranslation('translations')(App);