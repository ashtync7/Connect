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
  // bind the play function to game
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


  return (
    <div class="container">
    </div>
  );
}

export default App;
