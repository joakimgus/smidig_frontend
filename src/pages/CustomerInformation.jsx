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
              <hr />
              <p>Sjekk at kundeopplysningene stemmer.</p>
          </div>
          <div id={"customer-information-form-container"}>
              <form>
                  <Input
                      label={"ORGANISASJONSNUMMER"}
                      type={"text"}
                      name={"org-nr"}
                      handleChange={""}
                  />
                  <Input
                      label={"KONTAKTPERSON"}
                      type={"text"}
                      name={"contact-person"}
                      handleChange={""}
                  />
                  <Input
                      label={"E-POST"}
                      type={"email"}
                      name={"e-mail"}
                      handleChange={""}
                  />
                  <Input
                      label={"TELEFON"}
                      type={"text"}
                      name={"phone-number"}
                      handleChange={""}
                  />
                  <Link to={"/leveringsinformasjon"}><button id={"confirm-btn"}>Bekreft</button></Link>
              </form>
          </div>
      </div>
    );
}

export default CustomerInformation;