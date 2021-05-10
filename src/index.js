import React from "react";
import ReactDOM from "react-dom";
import "./Countdown.css";
import Countdown from "./Countdown";
import reportWebVitals from "./reportWebVitals";

const date = {
  dateName: "The F-Code Birthday",
  deadline: "2021-05-25T00:00:00+07:00"
}

ReactDOM.render(
  <React.StrictMode>
    <Countdown
      deadline={date.deadline}
      dateName={date.dateName}
    />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
