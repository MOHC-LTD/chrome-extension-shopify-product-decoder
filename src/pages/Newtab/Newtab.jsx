import React from 'react';
import logo from '../../assets/img/lloydspharmacy-od-logo-svg-data.svg';
import './Newtab.css';
import './Newtab.scss';

const Newtab = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Shopify product decoder chrome extension
        </p>
      </header>
    </div>
  );
};

export default Newtab;
