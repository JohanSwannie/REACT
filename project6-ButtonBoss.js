import React from "react";

class ButtonBoss extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonMessage1: '',
      buttonMessage2: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
  }
  handleClick()  {
    const nameArr = ['Sarah', 'Richard', 'Jenny', 'Lucas', 'John', 'Mary', 'Tasha', 'Roxanne'];
    const idx = Math.floor(Math.random() * 8);
    const name = nameArr[idx];
    this.setState(
      {
      buttonMessage1: name + ' has clicked the button'
      }
    );
  }
  handleClick2()  {
    const nameArr2 = ['Barry', 'Phiona', 'Dorothy', 'Matthew', 'Daniel', 'Melany', 'Don', 'Veronica'];
    const idx2 = Math.floor(Math.random() * 8);
    const name2 = nameArr2[idx2];
    this.setState(
      {
      buttonMessage2: name2 + ' has clicked the button'
      }
    );
  }
  render() {
    return (
      <div>
        <h2>Event Handlers with Buttons</h2>
        <button id='butty1' onClick={this.handleClick}>Click Here</button>
        <br />
        <p>{this.state.buttonMessage1}</p>
        <br />
        <button id='butty2' onClick={this.handleClick2}>Click Here</button>
        <br />
        <p>{this.state.buttonMessage2}</p>
        <br />
      </div>
    )
  }
};

export default ButtonBoss;
