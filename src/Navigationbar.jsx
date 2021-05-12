import React from "react";
import Logo from "./images/Logo.svg";

const Navigationbar = () => {
    return(
        <div>
            <img src={Logo} />
            <button>INSERT LOGO</button>
            <button>Museum</button>
            <button>Utvalg</button>
            <button>Om oss</button>
            <button>Kontakt oss</button>
            <button>INSERT handlekurv</button>
            <button>INSERT Login</button>
        </div>
    )
}

export default Navigationbar;