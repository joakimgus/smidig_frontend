import React from "react";
import './Navigationbar.css'
import Logo from './images/Logo.svg'
import CartIcon from './images/shopping-cart-sign.png'
import UserIcon from './images/user-icon.png'
import {Link} from "react-router-dom";
import './Navigationbar.css';

const Navigationbar = () => {
    return(
        <div className={"navbar-container"}>
            <button className={'nav-btn'} id={'home-btn'}>
                <img id={'logo-img'} src={Logo}/>
            </button>
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

            <Link to="/handlekurv">
                <button className={'nav-btn'} id={'cart-btn'}>
                    <img src={CartIcon} alt={'Handlekurv ikon'}/>
                    <p>Handlekurv</p>
                </button>
            </Link>
            <Link to="/logginn">
                <button className={'nav-btn'} id={'login-btn'}>
                    <img src={UserIcon} alt={'Bruker ikon'}/>
                    <p>Logg inn</p>
                </button>
            </Link>
        </div>
    )
}

export default Navigationbar;