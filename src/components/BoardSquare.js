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
      return 'o';
    }
    else if (value === 1) {
      return '1';
    }
    else {
      return '';
    }
  }
}

export default BoardSquare;
