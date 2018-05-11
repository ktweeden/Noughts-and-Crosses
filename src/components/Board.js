import React from 'react';
import BoardSquare from './BoardSquare.js'
import '../Board.css'

class Board extends React.Component {
  render() {
    const nodes = this.props.board.map((value, index) => {
      return (
        <BoardSquare
          symbol={value}
          key={index}
          boardPosition={this.props.boardPosition}
          position={index}
          currentPlayer={this.props.currentPlayer}
          handleBoardClick={this.props.handleBoardClick}/>
      )
    });

    return (
      <div className="board">
        {nodes}
      </div>
    )
  }
}
export default Board;
