class GameLogic {

  constructor() {
    this.board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];
  }

  hasWon(row, column) {
    let won = true;
    let value = undefined;
    this.board[row].forEach( position => {
      if(position === null) {
        won = false;
      }
      else if (value === undefined) {
        value = position;
      }
      else if (position != value) {
        won = false;
      }

    });
    return won;
  }
}

module.exports =  GameLogic;
