import React from "react";
import ReactDOM from "react-dom";
// import Countdown from "./components/Countdown";
import Login from "./components/Login";

// const defaultDate = {
//   dateName: "The F-Code Birthday",
//   deadline: new Date(2021, 4, 19)
//   // "2021-08-28:00:00+07:00"
// }

ReactDOM.render(
  <React.StrictMode>
    {/* <Countdown
      deadline={defaultDate.deadline}
      dateName={defaultDate.dateName}
    /> */}
    <Login />
  </React.StrictMode>,
  document.getElementById("root")
);