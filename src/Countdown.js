import React from "react";
import Clock from "./Clock";
import "./Countdown.css";

class Countdown extends React.Component {
  render() {
    //CØUNTDØWN
    const deadline = new Date(Date.parse(this.props.deadline));
    return (
        <div className="countdown-container">
          <h1>COUNTDOWN</h1> 
          <h2>
            {this.props.dateName} on{" "}
            {deadline.toLocaleString("en-US", {
              weekday: "short",
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
            .
          </h2>
          <Clock deadline={this.props.deadline} />
        </div>
    );
  }
}

export default Countdown;
