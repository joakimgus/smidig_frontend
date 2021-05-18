import React, { useContext, useState } from "react";
import { Input } from "../components/Input";
import { useHistory } from "react-router";
import { postData } from "../api/apiHandler";
import { UserContext } from "../context/context";
import "./LoginPage.css";

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
    <div style={{ textAlign: "center", padding: "5rem 0rem" }}>
      {isSignup ? <h3>Opprett bruker</h3> : <h3>Logg inn</h3>}
      <div>
        <form onSubmit={handleSubmit}>
          <Input name="email" label="E-post" handleChange={handleChange} />
          <Input
            name="password"
            label="Passord"
            handleChange={handleChange}
            type="password"
          />
          {isSignup && (
            <>
              <Input
                name="orgNr"
                label="Organisasjonsnummer"
                handleChange={handleChange}
              />
            </>
          )}
          <button id="submitBtn" type="submit">
            {isSignup ? "Sign Up" : "Sign In"}
          </button>
        </form>
        <button id="switch" onClick={switchMode}>
          {isSignup
            ? "Already have an account? Sign In"
            : "Dont have an account yet? Sign Up"}
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
