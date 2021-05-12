import React from "react";
import './Navigationbar.css'
import Logo from './images/Logo.svg'
import CartIcon from './images/shopping-cart-sign.png'
import UserIcon from './images/user-icon.png'

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
                <button className={'nav-btn'} id={'cart-btn'}>
                    <img src={CartIcon} alt={'Handlekurv ikon'}/>
                    <p>Handlekurv</p>
                </button>
                <button className={'nav-btn'} id={'login-btn'}>
                    <img src={UserIcon} alt={'Bruker ikon'}/>
                    <p>Logg inn</p>
                </button>
            </div>
        </div>
    )
}

export default Navigationbar;