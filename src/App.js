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
  const initBoard = () =>{
    let board = [];
    for (let r =0; r < 6; r++){
      let  row =[];
      for(let c=0; c<7; c++){ row.push(null)}
      board.push(row)
    }
    this.setState({
      board,
      currentPlayer: game.state.player1,
      gameOver: false,
      message: ''
    });
  }
  return (
  <div class="container">
    </div>
  );
}

export default App;
