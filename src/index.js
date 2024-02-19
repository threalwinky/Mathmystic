import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import MenuProvider from "react-flexible-sliding-menu";
import Menu from "./components/navbar/Menu";
import { I18nextProvider } from 'react-i18next';

import App from './App';
import './index.css'
import i18n from './i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
  <MenuProvider MenuComponent={Menu} direction='right' width='200px'>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </MenuProvider>
);
