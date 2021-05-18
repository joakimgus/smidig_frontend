import React, { useContext, useState } from "react";
import { Input } from "../components/Input";
import { useHistory } from "react-router";
import { postData } from "../api/apiHandler";
import { UserContext } from "../context/context";
import axios from "axios";
import "./LoginPage.css";

const LoginPage = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [query, setQuery] = useState("");
  const [result, setResult] = useState();
  const [org, setOrg] = useState();

  const { user, setUser } = useContext(UserContext);

  const history = useHistory();

  const search = async () => {
    const res = await axios.get(
      `https://data.brreg.no/enhetsregisteret/api/enheter?navn=${query}`
    );
    setResult(res.data);
  };

  const handleSearchChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    if (query.length > 0) {
      search();
    }
  };

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

  // Extract org results
  let orgs = [];
  if (result) {
    const { _embedded } = result;
    orgs = _embedded.enheter;
    console.log(orgs);
  }

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
                handleChange={handleSearchChange}
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
