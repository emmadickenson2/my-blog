import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCAYM6K7tNMQx8x44x2XdCAiGC2HsjzUzk",
  authDomain: "my-blog-6c86a.firebaseapp.com",
  projectId: "my-blog-6c86a",
  storageBucket: "my-blog-6c86a.appspot.com",
  messagingSenderId: "117367939655",
  appId: "1:117367939655:web:8299f18d78946beeb8c762"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
