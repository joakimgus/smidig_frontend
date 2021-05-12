import React from "react";
import {Link} from "react-router-dom";
import './Navigationbar.css';
import Logo from './images/Logo.svg';

const Navigationbar = () => {
    return(
        <div className={"navbar-container"}>
            <button className={'nav-btn'} id={'home-btn'}>
                <img id={'logo-img'} src={Logo}/>
            </button>
            <div className={'container1'}>
                <Link to="/museum">
                    <button className={'nav-btn'} id={'museum-btn'}>Museum</button>
                </Link>
                <Link to="/utstillinger">
                    <button className={'nav-btn'} id={'utvalg-btn'}>Utvalg</button>
                </Link>
                <Link to="/om">
                    <button className={'nav-btn'} id={'om-oss-btn'}>Om oss</button>
                </Link>
                <Link to="/kontakt">
                    <button className={'nav-btn'} id={'kontakt-oss-btn'}>Kontakt oss</button>
                </Link>
            </div>
            <div className={'container2'}>
                <Link to="/handlekurv">
                    <button className={'nav-btn'} id={'cart-btn'}>INSERT Handlekurv</button>
                </Link>
                <Link to="/logginn">
                    <button className={'nav-btn'} id={'login-btn'}>INSERT Login</button>
                </Link>
            </div>
        </div>
    )
}

export default Navigationbar;