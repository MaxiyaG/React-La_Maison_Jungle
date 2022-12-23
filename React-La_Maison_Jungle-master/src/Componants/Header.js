import React from 'react';
import '../styles/Banner.css';
import logo from '../assets/logo.png';

const Header = () => {
    return (
        <div className='lmj-banner'>
            <h1>La Maison Jungle</h1>
            <img src={logo} alt="logo" height="70px" weight="70px" />
        </div>
    );
};

export default Header;