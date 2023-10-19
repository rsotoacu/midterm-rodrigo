import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import AddProduct from './components/addProduct/addProduct';
import SignUpUser from './components/signUpUser/signUpUser';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AddProduct />
    <SignUpUser />
  </React.StrictMode>
);

reportWebVitals();
