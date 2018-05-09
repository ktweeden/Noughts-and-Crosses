import React from 'react';


const BoardSquare = function (props) {
  return (
    <div className="board-square">
      {getSymbol(props.symbol)}
    </div>

  )

}

const getSymbol = function (value) {
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

export default BoardSquare;
