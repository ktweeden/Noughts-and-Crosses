const assert = require('assert');
const GameLogic = require('../models/gameLogic');

describe ('gameLogic', function() {
 let game;

 beforeEach(function() {
   game = new GameLogic()
 });

it('player wins with a horizontal set', function() {
  game.board = [
  [0, 0, 0],
  [null, null, null],
  [null, null, null]]

  const result = game.hasWon(0,1);
  assert.strictEqual(result, true);
});







});
