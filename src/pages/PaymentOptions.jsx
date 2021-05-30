import {Link} from "react-router-dom";
import "./style/PaymentOptions.css";

const PaymentOptions = () => {
    return(
        <div id={"payment-information-container"}>
            <div id={"payment-information-img-container"}>
                <img src={require("../images/payment-information.png").default}  alt={"payment-information"}/>
            </div>
            <div id={"payment-information-header-text"}>
                <h1>BETALING</h1>
                <hr />
                <p>Velg betalingsmåte og fyll inn betalingsinformasjon.</p>
            </div>
            <div id={"payment-option-buttons-container"}>
                <button className={"payment-option-btn"}>KORTBETALING</button>
                <Link to={"/faktura"}><button className={"payment-option-btn"}>FAKTURA</button></Link>
                <button className={"payment-option-btn"}>VIPPS</button>
            </div>
        </div>
    );
}

export default PaymentOptions;