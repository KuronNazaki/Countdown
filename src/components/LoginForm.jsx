import React, { useState } from "react";

function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {

  };

  const handleNameChange = (event) => {

  };

  const handlePasswordChange = (event) => {

  };

  const validateEmail = (email) => {};

  const validateName = (name) => {};

  const validatePassword = (password) => {};

  return (
    <form className="login-form">
      <input type="email" id="email" name="email" placeholder="Email" onChange={handleEmailChange}></input>
      <p className="validate-noti"></p>
      <input type="text" id="name" name="name" placeholder="Full name"></input>
      <p className="validate-noti"></p>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Password"
      ></input>
      <p className="validate-noti"></p>
      <span>
        <input type="checkbox" id="agreeCheckbox" name="agreeCheckbox"></input>
        <label htmlFor="agreeCheckbox">
          I agree to the platform accessing my information
        </label>
      </span>
      <p className="validate-noti"></p>
      <input
        type="submit"
        value="Start now!"
      ></input>
    </form>
  );
}

export default LoginForm;
