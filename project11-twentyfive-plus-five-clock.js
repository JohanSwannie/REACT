import React from 'react';
import ReactDOM from 'react-dom';
import './twentyfive-five-clock.css';

class TwentyfiveFive extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      firstTimeStart: true,
      applicationRecurring: undefined,
      currentSessionLive: true,
      sessionTime: 1500,
      breakTime: 300,
      outstandingTime: 1500
    };
    this.startStopTimer = this.startStopTimer.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
    this.updateSessionTime = this.updateSessionTime.bind(this);
    this.updateBreakTime = this.updateBreakTime.bind(this);
    this.decrementTime = this.decrementTime.bind(this);
    this.presentOutstandingTime = this.presentOutstandingTime.bind(this);
  }

  startStopTimer(){
    if(this.state.applicationRecurring === undefined){
      this.setState({
        applicationRecurring: setInterval(this.decrementTime, 1000),
        firstTimeStart: false
      });
    }else{
      clearInterval(this.state.applicationRecurring);
      this.setState({
        applicationRecurring: undefined
      });
    }
  }

  resetCounter(){
    if(this.state.applicationRecurring !== undefined){
      clearInterval(this.state.applicationRecurring);
    }
    document.getElementById("beep").pause();
    document.getElementById("beep").currentTime = 0;
    this.setState({
      firstTimeStart: true,
      applicationRecurring: undefined,
      currentSessionLive: true,
      sessionTime: 1500,
      breakTime: 300,
      outstandingTime: 1500,
    });
  }

  updateSessionTime(event){
    let seconds;
    if(event.target.id === "session-increment"){
      seconds = 60;
    }else{
      seconds = -60;
    }
    if(this.state.firstTimeStart){
      this.setState(
        (state) => {let calculatedTime = state.sessionTime + seconds;
          if(calculatedTime > 0 && calculatedTime <= 3600){
            return {sessionTime: calculatedTime, outstandingTime: calculatedTime};
          }else{
            return {};
          }
        }
      );
    }else{
      this.setState(
        (state) => {let calculatedTime = state.sessionTime + seconds;
          if(calculatedTime > 0 && calculatedTime <= 3600){
            return {sessionTime: calculatedTime};
          }else{
            return {};
          }
        }
      );
    }
  }

  updateBreakTime(event){
    let seconds;
    if(event.target.id === "break-increment"){
      seconds = 60;
    }else{
      seconds = -60;
    }
    this.setState(
      (state) => {let calculatedTime = state.breakTime + seconds;
        if(calculatedTime > 0 && calculatedTime <= 3600){
          return {breakTime: calculatedTime};
        }else{
          return {};
        }
      }
    );
  }

  decrementTime(){
    if(this.state.outstandingTime === 0){
      document.getElementById("beep").play();
      this.setState({
        outstandingTime: this.state.breakTime,
        currentSessionLive: !this.state.currentSessionLive
      });
    }else{
      this.setState(
        (state) => {return {outstandingTime: this.state.outstandingTime - 1}}
      );
    }
  }

  presentOutstandingTime(){
    let minutes = Math.floor(this.state.outstandingTime / 60);
    let seconds = this.state.outstandingTime % 60;
    if(minutes < 10){
      minutes = "0" + minutes;
    }
    if(seconds < 10){
      seconds = "0" + seconds;
    }
    return `${minutes}:${seconds}`;
  }

  render(){
    return (
      <div className="container">
        <h1> 25 + 5 Clock</h1>
        <div className="grid1">
          <div id="break-label">Break Length</div>
          <p id="timer-label">{this.state.currentSessionLive ? "Session Running" : "Break has Begun"}</p>
          <div id="session-label">Session Length</div>
        </div>
        <div className="grid2">
          <button id="break-decrement" className="butter bean" onClick={this.updateBreakTime}><span>Break Decrement</span></button>
          <button id="break-increment" className="butter bean" onClick={this.updateBreakTime}><span>Break Increment</span></button>
          <p id="time-left">{this.presentOutstandingTime()}</p>
          <button id="session-increment" className="butter bean" onClick={this.updateSessionTime}><span>Session Increment</span></button>
          <button id="session-decrement" className="butter bean" onClick={this.updateSessionTime}><span>Session Decrement</span></button>
        </div>
        <div className="grid3">
          <p id="break-length">{this.state.breakTime / 60}</p>
          <p id="session-length">{this.state.sessionTime / 60}</p>
        </div>
        <div className="grid4">
          <button id="start_stop" className="butter bean" onClick={this.startStopTimer}><span>Start / Stop</span></button>
          <button id="reset" className="butter bean" onClick={this.resetCounter}><span>Reset</span></button>
        </div>
        <audio id="beep" src="http://soundbible.com/grab.php?id=1815&type=wav"></audio>
      </div>
    );
  }
}

ReactDOM.render(<TwentyfiveFive />, document.getElementById("root"));
