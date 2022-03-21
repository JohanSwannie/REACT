import React from "react";

class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'HELLO, I AM VISIBLE TEXT!',
      textShown: false
    };
    this.buttonToggleClicked = this.buttonToggleClicked.bind(this);
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
  render() {
      if (this.state.textShown) {
        return (
          <div className="center">
            <button id='butty' onClick={this.buttonToggleClicked}>Click Here Please</button>
            <br />
            <h4>{this.state.text}</h4>;
          </div>
        )
      } else {
        return (
          <div className="center">
          <button id='butty' onClick={this.buttonToggleClicked}>Click Here Please</button>
          <br />
          </div>
        );
      }
  }
};

export default ToggleButton;
