import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      operation: "",
      currOperator: "",
      pastOperation: "",
      currNumber: "0"
    };
    this.handleClick = this.handleClick.bind(this);
    this.determineNumberLimit = this.determineNumberLimit.bind(this);
    this.handleEqual = this.handleEqual.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.deleteInput = this.deleteInput.bind(this);
  }

  handleClick(e) {
    const { operation, currOperator, pastOperation, currNumber } = this.state;
    const { innerText } = e.target;
    if(!isNaN(innerText)) {
      if(currNumber === "0" || currNumber === "+" || currNumber === "-" || currNumber === "*" || currNumber === "/") {
        this.setState({
          currOperator: "",
          currNumber: innerText
        });
      }
      else if(currNumber.length < 15) {
        this.setState({
          currNumber: currNumber + innerText
        });
      }
      else {
        this.determineNumberLimit();
      }
      return;
    }
    else if (innerText === ".") {
      if(!currNumber.includes(".")) {
          this.setState({
            currNumber: currNumber + innerText
          });
        }
      return;
    }
    else {
      if(currOperator === "") {
        this.setState({
          operation: operation + currNumber + innerText,
          currOperator: innerText,
          pastOperation: operation + currNumber,
          currNumber: innerText
        });
      }
      else if(innerText === "-" && (currOperator === "/" || currOperator === "*" || currOperator === "+")) {
        this.setState({
          operation: operation + innerText,
          currOperator: currOperator + innerText,
          currNumber: innerText
        });
      }
      else {
        this.setState({
          operation: pastOperation + innerText,
          currOperator: innerText,
          currNumber: innerText
        });
      }
    }
  }

  determineNumberLimit() {
    const saveCurrNumber = this.state.currNumber;
    this.setState({
      currNumber: "Number limit reached",
    });

    setTimeout(() =>
      this.setState({ currNumber: saveCurrNumber }),
      1000);
  }

  handleEqual() {
    const { operation, currNumber } = this.state;

    const calcResult = eval(operation.replace(/×/g, "*") + currNumber);

    this.setState({
      operation: "",
      currNumber: calcResult
    });
  }

  handleClear() {
    this.setState({
      operation: "",
      currOperator: "",
      pastOperation: "",
      currNumber: "0"
    });
  }

  deleteInput() {
    this.setState(
      {
        currNumber: this.state.currNumber.toString().slice(0, -1)
      }
    );
  }

  render() {
    return (
      <div id="calculator">
        <div id="display">
          <div id="previous">{this.state.operation}</div>
          <div id="currinput">{this.state.currNumber}</div>
        </div>
          <button id="clear" onClick={this.handleClear}>AC</button>
          <button id="delete" onClick={this.deleteInput}>DEL</button>
          <button id="divide" onClick={this.handleClick}>/</button>
          <button id="one" onClick={this.handleClick}>1</button>
          <button id="two" onClick={this.handleClick}>2</button>
          <button id="three" onClick={this.handleClick}>3</button>
          <button id="multiply" onClick={this.handleClick}>*</button>
          <button id="four" onClick={this.handleClick}>4</button>
          <button id="five" onClick={this.handleClick}>5</button>
          <button id="six" onClick={this.handleClick}>6</button>
          <button id="add" onClick={this.handleClick}>+</button>
          <button id="seven" onClick={this.handleClick}>7</button>
          <button id="eight" onClick={this.handleClick}>8</button>
          <button id="nine" onClick={this.handleClick}>9</button>
          <button id="subtract"onClick={this.handleClick}>-</button>
          <button id="decimal" onClick={this.handleClick}>.</button>
          <button id="zero" onClick={this.handleClick}>0</button>
          <button id="equals" onClick={this.handleEqual}>=</button>
          <h5>Author: Johan Swan</h5>
      </div>
    )
  }
}

ReactDOM.render(<Calculator />, document.getElementById('root'));
