import React from "react";
import './Header.css';

const Header = () => {
    const imgPath = require('../images/header-img.png').default;

    return(
        <div className={'header-container'}>
            <div className={'text-container'}>
                <h1 className={'h1-header'}>Museum</h1>
                <p className={'p-header'}>Her finner du en oversikt over alle museenne som er med på prosjektet, og alle utstillingene de tilbyr skreddersydde pakkeløsninger fra.</p>
            </div>
            <img src={imgPath}  alt={''}/>
        </div>
    )
}

export default Header;