import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Login from './containers/Login';
import { startVconsole } from './utils';
import Register from './containers/Register';
// import 'antd-mobile/dist/antd-mobile.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Login /> */}
    <Register />
  </React.StrictMode>,
);

startVconsole();
