import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import background from "./img/Background.webp";
//import { Container, Row, Col } from 'react-bootstrap';

ReactDOM.render(
  <React.StrictMode>
    <div className="background-img" style={{ backgroundImage: `url(${background})` }}>

      <App />

    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
