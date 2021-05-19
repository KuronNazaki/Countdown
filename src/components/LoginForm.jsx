import React, { useState } from "react";
import Input from "./Input";

const inputProps = [
  {
    type: "email",
    id: "email",
    name: "email",
    placeholder: "Email",
  },
  {
    type: "text",
    id: "name",
    name: "name",
    placeholder: "Full name",
  },
  {
    type: "password",
    id: "password",
    name: "password",
    placeholder: "Password",
  },
];

function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const handleEmailChange = (event) => {
    const result = document.getElementById("emailNoti");
    const input = document.getElementById("email");

    if (event.target.value === "") {
      result.innerHTML = "";
      result.className = `${result.className} hidden`;
      input.style.border = "2px solid #234661";
      return;
    } else {
      result.className = "validate-noti";
    }
    
    if (validateEmail(event.target.value)) {
      setEmail(event.target.value);
      result.className = `${result.className} hidden`;
      input.style.border = "2px solid #27C967"
    } else {
      result.innerHTML = "Email format is invalid";
      input.style.border = "2px solid rgba(231, 23, 76, 0.6)"
    }
  };

  const handleNameChange = (event) => {
    const result = document.getElementById("nameNoti");
    const input = document.getElementById("name");

    if (event.target.value === "") {
      result.innerHTML = "";
      result.className = `${result.className} hidden`;
      input.style.border = "2px solid #234661";
      return;
    } else {
      result.className = "validate-noti";
    }
    
    if (validateName(event.target.value)) {
      setName(event.target.value);
      result.className = `${result.className} hidden`;
      input.style.border = "2px solid #27C967"
    } else {
      result.innerHTML = "Name is greater than 3 characters";
      input.style.border = "2px solid rgba(231, 23, 76, 0.6)"
    }
  };

  const handlePasswordChange = (event) => {
    const result = document.getElementById("passwordNoti");
    const input = document.getElementById("password");

    if (event.target.value === "") {
      result.innerHTML = "";
      result.className = `${result.className} hidden`;
      input.style.border = "2px solid #234661";
      return;
    } else {
      result.className = "validate-noti";
    }
    
    if (validatePassword(event.target.value)) {
      setPassword(event.target.value);
      result.className = `${result.className} hidden`;
      input.style.border = "2px solid #27C967"
    } else {
      result.innerHTML = "Password is greater than 7 characters";
      input.style.border = "2px solid rgba(231, 23, 76, 0.6)"
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/;
    return emailRegex.test(email);
  };

  const validateName = (name) => {
    return name.length > 3;
  };

  const validatePassword = (password) => {
    return password.length > 7;
  };

  const onCheckboxChange = (event) => {
    setCheckbox(event.target.value);
  }

  const onSubmit = () => {
    console.log(email);
    console.log(name);
    console.log(password);
    console.log(checkbox);
    if (email === "huynhhuy2002@gmail.com" && password === "12345678" && checkbox === false)
      alert("Logged in");
    else
      alert("Wrong password or email")
  }

  return (
    <form className="login-form">
      <Input className="form-control" {...inputProps[0]} onChange={handleEmailChange}/>
      <p className="validate-noti hidden" id="emailNoti"></p>

      <Input className="form-control" {...inputProps[1]} onChange={handleNameChange}/>
      <p className="validate-noti hidden " id="nameNoti"></p>

      <Input className="form-control" {...inputProps[2]} onChange={handlePasswordChange}/>
      <p className="validate-noti hidden" id="passwordNoti"></p>

      <span className="checkbox-control">
        <Input type="checkbox" id="agreeCheckbox" name="agreeCheckbox" onChange={onCheckboxChange}/>
        <label htmlFor="agreeCheckbox">
          I agree to the platform accessing my information
        </label>
      </span>
      <p className="validate-noti hidden" id="checkboxNoti"></p>

      <input type="submit" value="Start now!" onClick={onSubmit}></input>
    </form>
  );
}

export default LoginForm;