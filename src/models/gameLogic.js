class GameLogic {

  hasWon(board, row, column) {
    let won = true;
    let value = this.board[row][column];

    //checks for horizontal set
    this.board[row].forEach( position => {
      if(position === null) {
        won = false;
      }
      else if (position !== value) {
        won = false;
      }
    });

    if(won) {
      return won
    }
    else {
      //checks for vertical sets
      won = true;
      for(let i = 0; i < 2; i++) {
        if(this.board[i][column] === null) {
          won = false
        }
        else if(this.board[i][column] !== value) {
          won = false
        }
      }
      if (won) {
        return won;
      }
      else {
        // left to right diagonal check
        won = true;
        for(let i = 0; i < 2; i++) {
          if(this.board[i][i] === null) {
            won = false
          }
          else if(this.board[i][i] !== value) {
            won = false
          }
        }
        if(won) {
          return won;
        }
        else {
          // right to left diagonal check
          won = true;
          let column = 2;
          for(let i=0; i<2; i++) {
            if(this.board[i][column] === null) {
              won = false;
            }
            else if(this.board[i][column] !== value) {
              won = false
            }
            column -= 1
          }
          return won;
        }
      }
    }
  }
}

module.exports =  GameLogic;
