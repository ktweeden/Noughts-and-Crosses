import React from 'react';
import GameLogic from '../models/gameLogic.js';
import Title from '../components/Title.js';
import Rules from '../components/Rules.js';
import Message from '../components/Message.js';
import GameContainer from './GameContainer.js';
import BoardSquare from '../components/BoardSquare';


class UberContainer extends React.Component {
  constructor(props) {
    super(props);
    this.gameLogic = new GameLogic();

    this.state = {
      board: [null, null, null, null, null, null, null, null, null],
      currentPlayer: 0,
      message: "Player 1's turn"
    };

    this.handleMiniGameWin = this.handleMiniGameWin.bind(this)
    this.updatePlayer = this.updatePlayer.bind(this)
  }

  render() {
    const gameNodes = this.state.board.map((value, index) => {
      if (value === null) {
        return <GameContainer
          handleMiniGameWin={this.handleMiniGameWin}
          position={index}
          currentPlayer={this.state.currentPlayer}
          updatePlayer={this.updatePlayer}
          key={index}
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
        <Message message={this.state.message}/>
        <div className="game-board">{gameNodes}</div>
      </div>
    )
  }

  handleMiniGameWin(position) {
    console.log(position);
    const updatedBoard = this.state.board;
    updatedBoard[position] = this.state.currentPlayer;
    console.log('updatedBoard:', updatedBoard );
    this.setState({board: updatedBoard})
    if(this.gameLogic.hasWon(this.state.board, position)) {
      this.setState({message: `Game Over, ${this.state.currentPlayer === 0 ? "Player 1" : "Player 2"} wins`})
    }
    else {
      this.updatePlayer()
    }
  }

  updatePlayer() {
    const newPlayer = this.state.currentPlayer === 0 ? 1 : 0;
    this.setState({currentPlayer: newPlayer});
    const message = `${newPlayer === 0 ? "Player 1's" : "Player 2's"} turn`
    this.setState({message: message})
  }
}

export default UberContainer
