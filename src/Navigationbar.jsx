import React from "react";
import './Navigationbar.css'
import Logo from './images/Logo.svg'

const Navigationbar = () => {
    return(
        <div className={"navbar-container"}>
            <button className={'nav-btn'} id={'home-btn'}>
                <img id={'logo-img'} src={Logo}/>
            </button>
            <div className={'container1'}>
                <button className={'nav-btn'} id={'museum-btn'}>Museum</button>
                <button className={'nav-btn'} id={'utvalg-btn'}>Utvalg</button>
                <button className={'nav-btn'} id={'om-oss-btn'}>Om oss</button>
                <button className={'nav-btn'} id={'kontakt-oss-btn'}>Kontakt oss</button>
            </div>
            <div className={'container2'}>
                <button className={'nav-btn'} id={'cart-btn'}>INSERT handlekurv</button>
                <button className={'nav-btn'} id={'login-btn'}>INSERT Login</button>
            </div>
        </div>
    )
}

export default Navigationbar;