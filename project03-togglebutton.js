import React from "react";

class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text1: 'HELLO, I AM VISIBLE TEXT!',
      text2: 'You have clicked me ',
      text3: ' Times.',
      textShown: false,
      countr: 0
    };
    this.buttonToggleClicked = this.buttonToggleClicked.bind(this);
    this.cntrButtonClicked = this.cntrButtonClicked.bind(this);
  }
  buttonToggleClicked() {
    this.setState((state) => {
      if (state.textShown === true) {
        return {textShown: false};
      } else {
        return {textShown: true};
      }
    });
  }
  cntrButtonClicked() {
    if (this.state.countr === 0) {
      this.setState(
        { text3: ' Time.',
          countr: this.state.countr + 1
        }
      );
    } else {
      this.setState(
        { text3: ' Times.',
          countr: this.state.countr + 1
        }
      );
    }
  }
  render() {
      let txt1 = this.state.text1;
      let txt2 = this.state.text2;
      let txt3 = this.state.text3;
      let cntr = this.state.countr;
      if (this.state.textShown) {
        return (
          <div className="center">
            <button id='butty1' onClick={this.buttonToggleClicked}>Toggle Text</button>
            <br />
            <br />
            <br />
            <h4>{txt1}</h4>;
            <br />
            <br />
            <button id='butty2' onClick={this.cntrButtonClicked}>Counter</button>
            <h2>{txt2}{cntr}{txt3}</h2>
          </div>
        )
      } else {
        return (
          <div className="center">
          <button id='butty1' onClick={this.buttonToggleClicked}>Toggle Text</button>
          <br />
          <br />
          <button id='butty2' onClick={this.cntrButtonClicked}>Counter</button>
          <h2>{txt2}{cntr}{txt3}</h2>
          </div>
        );
      }
  }
};

export default ToggleButton;
