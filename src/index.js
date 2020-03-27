import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom"
import MyWeb from "./MyWeb"



ReactDOM.render(
  <BrowserRouter>

    <MyWeb />
  
  </BrowserRouter>

,document.getElementById("root"));
