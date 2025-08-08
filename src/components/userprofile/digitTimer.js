import { Component } from "react";
import "./digit.css";

class Digit extends Component {
  state = {
    timerlimit: 25,
    timerlimitinsec: 25 * 60,
    isrunning: false,
    intervalId: null,
  };

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  formatTime = (seconds) => {
    const min = String(Math.floor(seconds / 60)).padStart(2, "0");
    const sec = String(seconds % 60).padStart(2, "0");
    return `${min}:${sec}`;
  };

  startpausetimer = () => {
    const { isrunning } = this.state;
    if (isrunning) {
      clearInterval(this.state.intervalId);
      this.setState({ isrunning: false, intervalId: null });
    } else {
      const intervalId = setInterval(this.tick, 1000);
      this.setState({ isrunning: true, intervalId });
    }
  };

  tick = () => {
    const { timerlimitinsec } = this.state;
    if (timerlimitinsec === 0) {
      clearInterval(this.state.intervalId);
      this.setState({ isrunning: false });
    } else {
      this.setState((prev) => ({
        timerlimitinsec: prev.timerlimitinsec - 1,
      }));
    }
  };

  increase = () => {
    const { isrunning, timerlimit } = this.state;
    if (!isrunning) {
      const newlimit = timerlimit + 1;
      this.setState({
        timerlimit: newlimit,
        timerlimitinsec: newlimit * 60,
      });
    }
  };

  decrease = () => {
    const { isrunning, timerlimit } = this.state;
    if (!isrunning && timerlimit > 1) {
      const newlimit = timerlimit - 1;
      this.setState({
        timerlimit: newlimit,
        timerlimitinsec: newlimit * 60,
      });
    }
  };

  resetbut = () => {
    const {timerlimit}=this.state
    clearInterval(this.state.intervalId);
    this.setState((prev)=>({
      timerlimitinsec: timerlimit * 60,
      isrunning: false,
      intervalId:null,
    }));
  };

  render() {
    const { timerlimit, timerlimitinsec, isrunning } = this.state;

    return (
      <div className="bg">
        <h3>Digital Timer</h3>
        <div className="timer">
          <div className="imgcont">
            <div className="clock">
              <h2>{this.formatTime(timerlimitinsec)}</h2>
              <p>{isrunning ? "Running" : "Paused"}</p>
            </div>
          </div>
          <div className="pause">
            <div className="start">
              <button onClick={this.startpausetimer} className="control-btn">
                <img
                  src={
                    isrunning
                      ? "https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
                      : "https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                  }
                  alt={isrunning ? "Pause Icon" : "Play Icon"}
                  className="img"
                />
                <span>{isrunning ? "Pause" : "Start"}</span>
              </button>

              <button className="rest control-btn" onClick={this.resetbut}>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                  className="img"
                  alt="Reset Icon"
                />
                <span>Reset</span>
              </button>
            </div>

            <div>
              <h6>Set Timer Limit</h6>
              <div className="limit-setter">
                <button onClick={this.decrease}>-</button>
                <span>{timerlimit}</span>
                <button onClick={this.increase}>+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Digit;
