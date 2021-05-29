import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Routes';
import AOS from 'aos';

AOS.init();

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
