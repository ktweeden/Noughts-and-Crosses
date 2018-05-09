import React from 'react';
import GameLogic from '../models/gameLogic.js';
import Title from '../components/Title.js';
import Board from '../components/Board.js';

class GameContainer extends React.Component {
  constructor(props) {
    super(props);

    const gameLogic = new GameLogic();

    this.state = {
      game: gameLogic,
      currentPlayer: 0
    };

    this.handleBoardClick = this.handleBoardClick.bind(this)
  }

    render() {
      return (
        <div>
        <Title/>
        <Board
          board={this.state.game.board}
          currentPlayer={this.state.currentPlayer}
          handleBoardClick={this.handleBoardClick}
        />
      </div>
      )
    }

    handleBoardClick(position) {
      console.log(position);
    }
  }


  export default GameContainer;
