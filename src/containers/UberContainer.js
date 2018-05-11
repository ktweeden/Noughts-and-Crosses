import React from 'react';
import GameLogic from '../models/gameLogic.js';
import Title from '../components/Title.js';
import Rules from '../components/Rules.js';
import Message from '../components/Message.js';
import Board from '../components/Board.js';
import BoardSquare from '../components/BoardSquare';
import ResetButton from '../components/ResetButton';


class UberContainer extends React.Component {
  constructor(props) {
    super(props);
    this.gameLogic = new GameLogic();

    this.state = {
      mainBoard: [null, null, null, null, null, null, null, null, null],
      subBoards: [
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
      ],
      currentPlayer: 0,
      message: "Player 1's turn",
      reset: false
    };


    this.handleMiniGameWin = this.handleMiniGameWin.bind(this)
    this.updatePlayer = this.updatePlayer.bind(this)
    this.handleResetButtonClick = this.handleResetButtonClick.bind(this)
    this.handleBoardClick = this.handleBoardClick.bind(this)
  }

  render() {
    const gameNodes = this.state.mainBoard.map((value, index) => {
      if (value === null) {
        return <Board
          handleMiniGameWin={this.handleMiniGameWin}
          boardPosition={index}
          currentPlayer={this.state.currentPlayer}
          key={index}
          board={this.state.subBoards[index]}
          handleBoardClick={this.handleBoardClick}
        />
      }
      else {
        return <BoardSquare large symbol={value} key={index}/>
      }
    });

    return (
      <div className="uber-container">
        <Title/>
        <Rules/>
        <ResetButton handleResetButtonClick={this.handleResetButtonClick} />
        <Message message={this.state.message}/>
        <div className="game-board">{gameNodes}</div>
      </div>
    )
  }

  handleMiniGameWin(position) {
    console.log(position);
    const updatedBoard = this.state.mainBoard;
    updatedBoard[position] = this.state.currentPlayer;
    console.log('updatedBoard:', updatedBoard );
    this.setState({mainBoard: updatedBoard})
    if(this.gameLogic.hasWon(this.state.mainBoard, position)) {
      this.setState({message: `Game Over, ${this.state.currentPlayer === 0 ? "Player 1" : "Player 2"} wins`})
    }
    else {
      this.updatePlayer()
    }
  }

  handleResetButtonClick() {
    this.setState({
      mainBoard: [null, null, null, null, null, null, null, null, null],
      subBoards: [
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
      ],
      currentPlayer: 0,
      message: "Player 1's turn",
      reset: true
    })
  }

  updatePlayer() {
    const newPlayer = this.state.currentPlayer === 0 ? 1 : 0;
    this.setState({currentPlayer: newPlayer});
    const message = `${newPlayer === 0 ? "Player 1's" : "Player 2's"} turn`
    this.setState({message: message})
  }

  handleBoardClick(position, miniGame) {
    const updatedBoard = this.state.subBoards;
    updatedBoard[miniGame][position] = this.state.currentPlayer;

    if (this.gameLogic.hasWon(this.state.subBoards[miniGame], position)) {
      this.handleMiniGameWin(miniGame);
    }
    else {
      this.updatePlayer();
    }

  }
}

export default UberContainer
