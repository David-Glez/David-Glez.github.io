import React from 'react';
import ReactDOM from 'react-dom';

import Main from './layouts/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/default.css';
import './assets/css/styles.css';
import './assets/css/fonts.css';
import './assets/css/media-queries.css';


ReactDOM.render(
    <Main />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
