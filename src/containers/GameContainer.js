import React from 'react';
import GameLogic from '../models/gameLogic.js';
import Title from '../components/Title.js';
import Board from '../components/Board.js';
import Message from '../components/Message.js';

class GameContainer extends React.Component {

  constructor(props) {
    super(props);
    this.gameLogic = new GameLogic();

    this.state = {
      board: [null, null, null, null, null, null, null, null, null],
      currentPlayer: 0,
      message: ''
    };

    this.handleBoardClick = this.handleBoardClick.bind(this)
  }

    render() {
      return (
        <div>
        <Title/>
        <Message message={this.state.message}/>
        <Board
          board={this.state.board}
          currentPlayer={this.state.currentPlayer}
          handleBoardClick={this.handleBoardClick}
        />
      </div>
      )
    }

    handleBoardClick(position) {
      const updatedBoard = this.state.board;
      updatedBoard[position] = this.state.currentPlayer;
      const nextPlayer = this.state.currentPlayer === 0 ? 1: 0;
      this.setState({currentPlayer: nextPlayer, board: updatedBoard});

      if (this.gameLogic.hasWon(this.state.board, position)) {
        this.setState({message: 'Game Over'})
      }

    }
  }


  export default GameContainer;
