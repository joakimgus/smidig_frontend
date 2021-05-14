import React, { useState } from "react";
import { Input } from "../components/Input";
import { useHistory } from "react-router";
import { postData } from "../api/apiHandler";

const LoginPage = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

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
    /*try {
      const res = await postData("/auth/signup", formData);
      if (res) {
        // Redirect user back to home page
        history.push("/");
      }
    } catch (e) {
      console.log(e);
    }*/
  };

  const doLogin = async () => {
    try {
      const res = await postData("/auth/login", formData);
      if (res) {
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
      <div>
        <form onSubmit={handleSubmit}>
          <Input name="username" label="Username" handleChange={handleChange} />
          <Input
            name="password"
            label="Password"
            handleChange={handleChange}
            type="password"
          />
          {isSignup && (
            <>
              <Input
                name="firstName"
                label="First Name"
                handleChange={handleChange}
              />
              <Input
                name="lastName"
                label="Last Name"
                handleChange={handleChange}
              />
              <Input
                name="email"
                label="Email"
                handleChange={handleChange}
                type="email"
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
