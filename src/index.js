import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import App from './App';
import './index.css'

axios.defaults.baseURL = 'http://localhost:7000/api/'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
