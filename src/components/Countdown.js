import React from "react";
import Clock from "./Clock";
import "./Countdown.css";
import CircularProgress from '@material-ui/core/CircularProgress';

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: this.props.deadline,
      hidden: "hidden",
    };

    this.onDateChange = this.onDateChange.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.hideLoading();
    }, 3000);
  }

  hideLoading() {
    this.setState({ hidden: "" });
  }

  onDateChange(event) {
    const changedDate = new Date(event.target.value + "T00:00:00+07:00");
    this.setState({ date: changedDate });
  }

  render() {
    return (
      <div>
        <div className={`loading ${this.state.hidden ? "" : "hidden"}`}>
          <CircularProgress />
        </div>
        <div className={`countdown-container ${this.state.hidden}`}>
          <h1>COUNTDOWN</h1>
          <h2>
            {/* {this.props.dateName} on{" "} */}
            {this.state.date.toLocaleString("en-US", {
              weekday: "short",
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
            .
          </h2>
          <Clock deadline={this.state.date} />
          <form className="date-input">
            <input
              type="date"
              value={this.state.date.toISOString().split("T")[0]}
              onChange={this.onDateChange}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Countdown;
