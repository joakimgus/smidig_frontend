import {Input} from "../components/Input";
import {Link} from "react-router-dom";
import "./DeliveryInformation.css";

const DeliveryInformation = () => {
    return(
        <div id={"delivery-information-container"}>
            <div id={"delivery-information-img-container"}>
                <img src={require("../images/delivery-information.png").default}  alt={"delivery-information"}/>
            </div>
            <div id={"delivery-information-header-text"}>
                <h1>LEVERING</h1>
                <hr />
                <p>Fyll inn leveringsadresse</p>
            </div>
            <div id={"delivery-information-form-container"}>
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
                    <Link to={"/betaling"}><button id={"continue-btn"}>Bekreft</button></Link>
                </form>
            </div>
        </div>
    );
}

export default DeliveryInformation;