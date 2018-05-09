import React from 'react';


class BoardSquare extends React.Component {

  constructor(props) {
    super(props)
    this.handleSquareClick = this.handleSquareClick.bind(this)
  }

  render() {
    return (
      <div
        className="board-square"
        onClick={this.handleSquareClick}
        >
        {this.getSymbol(this.props.symbol)}
      </div>
    )
  }

  handleSquareClick() {
    if(this.props.symbol === null) {
      this.getSymbol(this.props.currentPlayer);
      this.props.handleBoardClick(this.props.position);
    }
  }

  getSymbol(value) {
    if(value === 0) {
      return 'O';
    }
    else if (value === 1) {
      return 'X';
    }
    else {
      return '';
    }
  }
}

export default BoardSquare;
