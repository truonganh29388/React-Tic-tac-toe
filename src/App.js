import React, { Component } from 'react';
import './App.css';
import Board2 from './Board';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      xIsNext: true,
      stepNumber: 0
    };
  } 

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{ squares: squares }]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length
    })
  }

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  jumTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    })
  };


  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber]
    const winner = this.calculateWinner(current.squares);
    const moves = history.map((value, index) => {
      const desc = index ? 'Go to step ' + index : 'Go to game start';
      return (<li key={index}>
        <button onClick={() => this.jumTo(index)}>{desc}</button>
      </li>)
    })
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    }
    else
      status = 'Next Player:' + (this.state.xIsNext ? 'X' : 'O')
    return (
      <div className="game">
        <div className="game-board">
          <Board2 squares={current.squares} onClick={(i) => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div >{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}


export default App;


