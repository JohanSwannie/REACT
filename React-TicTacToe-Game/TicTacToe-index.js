import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Block(props) {
  return (
    <button className="box" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

function determineTheChampion(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [x, y, z] = lines[i];
    if (squares[x] && squares[x] === squares[y] && squares[x] === squares[z]) {
      return squares[x];
    }
  }
  return null;
}

class Board extends React.Component {
  giveNumberToBlock(i) {
    return (
      <Block
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="box_row">
          {this.giveNumberToBlock(0)}
          {this.giveNumberToBlock(1)}
          {this.giveNumberToBlock(2)}
        </div>
        <div className="box_row">
          {this.giveNumberToBlock(3)}
          {this.giveNumberToBlock(4)}
          {this.giveNumberToBlock(5)}
        </div>
        <div className="box_row">
          {this.giveNumberToBlock(6)}
          {this.giveNumberToBlock(7)}
          {this.giveNumberToBlock(8)}
        </div>
      </div>
    );
  }
}

class TicTacToeGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      playAmount: 0,
      maryIsNextToPlay: true
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.playAmount + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (determineTheChampion(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.maryIsNextToPlay ? "Mary" : "Peter";
    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      playAmount: history.length,
      maryIsNextToPlay: !this.state.maryIsNextToPlay
    });
  }

  jumpTo(playNumber) {
    this.setState({
      playAmount: playNumber,
      maryIsNextToPlay: (playNumber % 2) === 0
    });
  }

  restartGame() {
    window.location.reload(false);
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.playAmount];
    const winner = determineTheChampion(current.squares);

    const moves = history.map((playNumber, move) => {
      const moveDescription = move ?
        'This was move number #' + move :
        'The Game starts NOW!';
      return (
        <li key={move}>
          <button style={{width: '14rem', border: '1.5px solid #FFF', color: '#FFF', backgroundColor: 'navy', fontWeight: 'bold', padding: '.55rem'}} onClick={() => this.jumpTo(move)}>{moveDescription}</button>
        </li>
      );
    });

    let status = '';
    if (winner) {
      status = "The Game is OVER! - And the Winner is : " + winner;
    } else if (this.state.playAmount === 9) {
      status = "The Game is a DRAW ! - Click Restart to play again";
    } else {
      status = "The next player to Play is : " + (this.state.maryIsNextToPlay ? "Mary" : "Peter");
    }

    return (
      <div className="tic_Tac_Toe_Game">
        <div>
          <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="information_detail">
          <div style={{color: '#FFF', fontSize: '20px', fontWeight: 'bold'}}>{status}</div>
          <ol style={{color: '#FFF', fontWeight: 'bold'}}>{moves}</ol>
        </div>
        <button id="restartGame" onClick={this.restartGame}>Restart The Game</button>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TicTacToeGame />);
