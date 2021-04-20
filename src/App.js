import logo from './logo.svg';
import ReactDOM from 'react-dom';
import React, { useState } from "react";
import './App.css';


function App() {
  // Create  state of "game"
  const [game, setGame] = useState({
    player1: 1,
    player2: 2,
    currentPlayer: null,
    board: [],
    gameOver: false,
    message: ''
  });
  // bind the play function to gamegi
  game.play = game.play.bind(game);
  const initBoard = () => {
    let board = [];
    for (let r = 0; r < 6; r++) {
      let row = [];
      for (let c = 0; c < 7; c++) { row.push(null) }
      board.push(row)
    }
    this.setState({
      board,
      currentPlayer: game.state.player1,
      gameOver: false,
      message: ''
    });
  }

  const togglePlayer = () => {
    return (game.state.currentPlayer === game.state.player1) ? this.state.player2 : this.state.player1;
  }

  const play = (c) => {
    if (!game.state.gameOver) {
      let board = game.state.board;
      for (let r = 5; r >= 0; r--) {
        if (!board[r][c]) {
          board[r][c] = game.state.currentPlayer;
          break;
        }
      }

      let result = game.checkAll(board);
      if (result === game.state.player1) {
        game.setState({ board, gameOver: true, message: 'Player 1 (red) wins!' });
      } else if (result === game.state.player2) {
        this.setState({ board, gameOver: true, message: 'Player 2 (yellow) wins!' });
      } else if (result === 'draw') {
        this.setState({ board, gameOver: true, message: 'Draw game.' });
      } else {
        this.setState({ board, currentPlayer: this.togglePlayer() });
      }
    } else {
      this.setState({ message: 'Game over. Please start a new game.' });
    }
  }
  const checkVertical = (board) => {
    // checking if rows are 3 and up
    for (let r = 3; r < 6; r++) {
      for (let c = 0; c < 7; c++) {
        if (board[r][c]) {
          if (board[r][c] === board[r - 1][c] &&
            board[r][c] === board[r - 2][c] &&
            board[r][c] === board[r - 3][c]
          ) {
            return board[r][c]
          }
        }
      }
    }

  }
  const checkHorizontal = (board) => {
    // check if column 3 of less
    for (let r = 0; r < 6; r++) {
      for (let c = 0; c < 4; c++) {
        if (board[r][c]) {
          if (
            board[r][c] === board[r][c + 1] &&
            board[r][c] === board[r][c + 2] &&
            board[r][c] === board[r][c + 3]
          ) {
            return board[r][c]
          }
        }
      }
    }
  }

  const checkDiagonalRight = (board) => {
    //  Check only if row is 3 or greater AND column is 3 or less
    for (let r = 3; r < 6; r++) {
      for (let c = 0; c < 4; c++) {
        if (board[r][c]) {
          if (board[r][c] === board[r - 1][c + 1] &&
            board[r][c] === board[r - 2][c + 2] &&
            board[r][c] === board[r - 3][c + 3]) {
            return board[r][c];
          }
        }
      }
    }
  }

  const checkDiagonalLeft = (board) => {
    for (let r = 3; r < 6; r++) {
      for (let c = 3; c < 7; c++) {
        if (board[r][c]) {
          if (board[r][c] === board[r - 1][c - 1] &&
            board[r][c] === board[r - 2][c - 2] &&
            board[r][c] === board[r - 3][c - 3]) {
            return board[r][c];
          }
        }
      }
    }
  }

  const checkDraw = (board) => {
    for (let r = 0; r < 6; r++) {
      for (let c = 0; c < 7; c++) {
        if (board[r][c] === null) {
          return null;
        }
      }
    }
    return 'draw';
  }

  const checkAll = (board) => {
    return game.checkVertical(board) || game.checkDiagonalRight(board) || game.checkDiagonalLeft(board) || game.checkHorizontal(board) || game.checkDraw(board);
  }

  const render = () => {
    return (
      <div>
        <div className="button" onClick={() => { game.initBoard() }}>New Game</div>

        <table>
          <thead>
          </thead>
          <tbody>
            {game.state.board.map((row, i) => (<Row key={i} row={row} play={this.play} />))}
          </tbody>
        </table>

        <p className="message">{game.state.message}</p>
      </div>
    )
  }



  return (
    <div class="container">
    </div>
  );
}

export default App;
