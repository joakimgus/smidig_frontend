import React, { useContext, useState } from "react";
import { Input } from "../components/Input";
import { useHistory } from "react-router";
import { postData } from "../api/apiHandler";
import { UserContext } from "../context/context";
import "./style/LoginPage.css";

const LoginPage = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { user, setUser } = useContext(UserContext);

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignup) {
      // Handle signup
      await doSignUp();
    } else {
      // Handle signin
      await doLogin();
    }
  };

  const doSignUp = async () => {
    try {
      const res = await postData("/auth/register", formData);
      if (res) {
        // Redirect user back to home page
        setUser(res);
        history.push("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const doLogin = async () => {
    console.log(formData);
    try {
      const res = await postData("/auth/login", formData);
      if (res) {
        setUser(res);
        console.log(res);
        // Redirect user back to home page
        history.push("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    // Find a way to clear input fields
  };

  return (
    <div className={'form-container-login'}>
      <div className="fix-login-placement-container">
      {isSignup ? <h3>Opprett bruker</h3> : <h3>Logg inn</h3>}
      <div id={"login-form-container"}>
        <form onSubmit={handleSubmit}>
          <p>E-post</p>
          <Input
            className={'input-login'}
            name="email"
            type="email"
            handleChange={handleChange}
          />
          <p>Passord</p>
          <Input
            className={'input-login'}
            name="password"
            handleChange={handleChange}
            type="password"
          />
          {isSignup && (
            <>
              <p>Org.nr</p>
              <Input
                className={'input-login'}
                name="orgNr"
                handleChange={handleChange}
              />
            </>
          )}
          <button id="submitBtn" type="submit">
            {isSignup ? "Opprett bruker" : "Logg inn"}
          </button>
        </form>
        <button id="switch" onClick={switchMode}>
          {/*TODO endre til norsk?*/}
          {isSignup
            ? "Har du bruker? Logg inn"
            : "Har du ikke bruker? Opprett bruker"}
        </button>
      </div>
    </div>
    </div>
  );
};

export default LoginPage;
