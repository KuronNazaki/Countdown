import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);

    const time = Date.parse(this.props.deadline) - Date.parse(new Date());
    if (time < 0) {
      this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));

      this.state = {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      };
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.getTimeTillDeadline(this.props.deadline);
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) clearInterval(this.interval);
  }

  getTimeTillDeadline(deadline) {
    const time = deadline - Date.parse(new Date());
    if (time < 0) {
      this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));

      this.setState({ days, hours, minutes, seconds });
    }
  }

  leadingZero(value) {
    return value < 10 ? "0" + value : value;
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;

    return (
      <div className="clock-container">
        <div className="clock-item">
          {this.leadingZero(days)}
          <span>{days === 1 ? "day" : "days"}</span>
        </div>
        <div className="clock-item">
          {this.leadingZero(hours)}
          <span>{hours === 1 ? "hour" : "hours"}</span>
        </div>
        <div className="clock-item">
          {this.leadingZero(minutes)}
          <span>{minutes === 1 ? "minute" : "minutes"}</span>
        </div>
        <div className="clock-item">
          {this.leadingZero(seconds)}
          <span>{seconds === 1 ? "second" : "seconds"}</span>
        </div>
      </div>
    );
  }
}

export default Clock;
