import React from "react";
import ReactDOM from "react-dom";
import Countdown from "./components/Countdown";

const defaultDate = {
  dateName: "The F-Code Birthday",
  deadline: new Date(2021, 4, 19)
  // "2021-08-28:00:00+07:00"
}

ReactDOM.render(
  <React.StrictMode>
    <Countdown
      deadline={defaultDate.deadline}
      dateName={defaultDate.dateName}
    />
  </React.StrictMode>,
  document.getElementById("root")
);