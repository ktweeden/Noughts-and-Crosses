class GameLogic {

  hasWon(board, position) {
    if (
      this.checkForVerticalWin(board, position) ||
      this.checkForHorizontalWin(board, position) ||
      this.checkForDiagonalWin(board, position)
    ) {
      return true
    }
    else {return false}
  }

  checkForVerticalWin(board, position) {
    const value = board[position]
    if(board[0]=== value && board[3] === value && board[6] === value) {
      return true
    }
    else if(board[1]=== value && board[4] === value && board[7] === value) {
      return true
    }
    else if(board[2]=== value && board[5] === value && board[8] === value) {
      return true
    }
    return false
  }

  checkForHorizontalWin(board, position) {
    const value = board[position]
    if(board[0]=== value && board[1] === value && board[2] === value) {
      return true
    }
    else if(board[3]=== value && board[4] === value && board[5] === value) {
      return true
    }
    else if(board[6]=== value && board[7] === value && board[8] === value) {
      return true
    }
    return false
  }

  checkForDiagonalWin(board, position) {
    const value = board[position]
    if(board[0]=== value && board[4] === value && board[8] === value) {
      return true
    }
    else if(board[2]=== value && board[4] === value && board[6] === value) {
      return true
    }
    return false
  }
}

module.exports =  GameLogic;
