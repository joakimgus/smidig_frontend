import {Input} from "../components/Input";
import {Link} from "react-router-dom";
import "./InvoiceInformation.css";

const InvoiceInformation = () => {
    return (
        <div id={"invoice-information-container"}>
            <div id={"invoice-information-img-container"}>
                <img src={require("../images/payment-information.png").default}  alt={"invoice-information"}/>
            </div>
            <div id={"invoice-information-header-text"}>
                <h1>BETALING</h1>
                <hr />
                <p>Fyll inn fakturainformasjon</p>
            </div>
            <div id={"invoice-information-form-container"}>
                <form>
                    <Input
                        label={"ADRESSE"}
                        type={"text"}
                        name={"adress"}
                        handleChange={""}
                    />
                    <Input
                        label={"POSTNUMMER"}
                        type={"text"}
                        name={"zip-code"}
                        handleChange={""}
                    />
                    <Input
                        label={"STED"}
                        type={"text"}
                        name={"city"}
                        handleChange={""}
                    />
                    <Link to={"/betaling"}><button id={"continue-btn"}>Fortsett</button></Link>
                </form>
            </div>
        </div>
    );
}

export default InvoiceInformation;