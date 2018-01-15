import React from 'react';
import food from '../food.svg';
//import PropTypes from 'prop-types';

const Header = props =>

<header className="App-header">
  <img src={food} className="App-logo" alt="logo" />
  <h1 className="App-title">Melp</h1>
  <h2 className="App-subtitle">Your culinary companion</h2>
</header>;



export default Header;
