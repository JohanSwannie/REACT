import React from 'react';

class CssMagic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      inputText: e.target.value
    });
  }
  render() {
    let report = ''
    let cssStyle = {
      background: 'lightgray',
      border: '2px solid red',
      width: '200px',
      height: '40px'
    };
    this.state.inputText.length > 13 &&
      (cssStyle = {
        background: 'lightyellow',
        border: '3.5px solid red',
        width: '400px',
        height: '45px'
      });
    this.state.inputText.length > 26 &&
      (cssStyle = {
        background: 'lime',
        border: '5px solid red',
        width: '600px',
        height: '50px'
      });
    this.state.inputText.length > 39 &&
      (cssStyle = {
        background: 'linear-gradient(270deg, lime, lightgreen, peachpuff, crimson, olive)',
        border: '6.5px solid red',
        width: '900px',
        height: '55px'
      });
    this.state.inputText.length > 122 && (this.setState({inputText: ""}));
    this.state.inputText.includes('please pay close attention') &&
    (report = "We found the phrase 'please pay close attention'");
    return (
      <div>
      <h2 id="maxy">Maximum amount of characters allowed in input box is 122</h2>
      <input type='text' autoFocus={true} style={cssStyle} value={this.state.inputText} onChange={this.handleChange} />
      <h4>{report}</h4>
      {cssStyle.width === '800px' && <h4>We have reached 39 characters now!</h4>}
      {this.state.inputText.length > 100 && <h4>Now you are going overboard!!!</h4>}
      {this.state.inputText.length > 110 && <h4>STOP IT NOW!!!</h4>}
      {this.state.inputText.length > 114 && <h4>You will be terminated soon!!!</h4>}
      </div>
    );
  }
};

export default CssMagic;
