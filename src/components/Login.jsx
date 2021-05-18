import React, { useState } from "react";
import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog";
import "@reach/dialog/styles.css";
import LoginForm from "./LoginForm";
import "./Login.css";
import "./../fonts/icofont.min.css";

function Login(props) {
  const [showDialog, setShowDialog] = React.useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  return (
    <div>
      <button onClick={open}>Open Dialog</button>
      <Dialog isOpen={showDialog} onDismiss={close} aria-label="Dialog" className="dialog">
        <button className="close-button" onClick={close}>
          <span aria-hidden="true" aria-label="Close dialog"><i className="icofont-arrow-left"></i></span>
        </button>
        <div className="login-wrapper">
          <h1 className="login-heading">Over 30 million <br/>Shaping the perfect space</h1>
          <p className="login-subheading">Currently only supports iOS and Mac</p>
          <LoginForm />
          <p className="login-footer">
            No Account Yet? <a href="/">Register</a>
          </p>
        </div>
      </Dialog>
    </div>
  );
}

export default Login;
