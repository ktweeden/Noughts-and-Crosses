import React from 'react';
import GameLogic from '../models/gameLogic.js';
import Board from '../components/Board.js';

class GameContainer extends React.Component {

  constructor(props) {
    super(props);
    this.gameLogic = new GameLogic();

    this.state = {
      board: [null, null, null, null, null, null, null, null, null],
    };

    this.handleBoardClick = this.handleBoardClick.bind(this)
  }

    render() {
      return (
        <div>
          <Board
            board={this.state.board}
            currentPlayer={this.props.currentPlayer}
            handleBoardClick={this.handleBoardClick}
          />
        </div>
      )
    }

    handleBoardClick(position) {
      const updatedBoard = this.state.board;
      updatedBoard[position] = this.props.currentPlayer;
      this.setState({board: updatedBoard});

      if (this.gameLogic.hasWon(this.state.board, position)) {
        this.props.handleMiniGameWin(this.props.position);
        console.log('handleMiniGameWin called');
      }
      else {
        this.props.updatePlayer();
      }

    }
  }


  export default GameContainer;
