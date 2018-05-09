import React from 'react';
import BoardSquare from './BoardSquare.js'


class Board extends React.Component {
  render() {
    let squares = []
    squares = squares.concat(this.props.board[0])
    squares = squares.concat(this.props.board[1])
    squares = squares.concat(this.props.board[2])
    console.log(squares);

    const nodes = squares.map((value, index) => {
      return (
        <BoardSquare symbol={value} key={index}/>
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
