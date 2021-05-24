import {Link} from "react-router-dom";
import {Input} from "../components/Input";
import "./CustomerInformation.css";

const CustomerInformation = () => {
    return(
      <div id={"customer-information-container"}>
          <div id={"customer-information-img-container"}>
              <img src={require("../images/customer-information.png").default}  alt={"customer-information"}/>
          </div>
          <div id={"customer-information-header-text"}>
              <h1>KUNDEOPPLYSNINGER</h1>
              <p>Sjekk at kundeopplysningene stemmer.</p>
          </div>
          <div id={"customer-information-form-container"}>
              <Input
                  label={"ORGANISASJONSNUMMER"}
                  type={"number"}
                  name={"org-nr"}
                  handleChange={""}
              />
              <Input
                  label={"E-POST"}
                  type={"email"}
                  name={"e-mail"}
                  handleChange={""}
              />
              <Link to={""} id={"confirm-btn"}><button>Bekreft</button></Link>
          </div>
      </div>
    );
}

export default CustomerInformation;