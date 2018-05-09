const assert = require('assert');
const GameLogic = require('../models/gameLogic');

describe ('gameLogic', function() {
 let game;

 beforeEach(function() {
   game = new GameLogic()
 });

it('player wins with a horizontal set', function() {
  const board = [0, 0, 0, null, null, null, null, null, null]
  const result = game.checkForHorizontalWin(board, 0);
  assert.strictEqual(result, true);
});

it('player loses with a mixed horizontal set', function() {
  const board = [0, 1, 0, null, null, null, null, null, null]

  const result = game.checkForHorizontalWin(board, 0);
  assert.strictEqual(result, false);
});

it('player loses with an incomplete horizontal set', function() {
  const board = [0, 1, null, null, null, null, null, null, null]

  const result = game.checkForHorizontalWin(board, 1);
  assert.strictEqual(result, false);
});

it('player wins with a vertical set', function() {
  const board = [0, null, null, 0, null, null, 0, null, null]

  const result = game.checkForVerticalWin(board, 0);
  assert.strictEqual(result, true);
});

it('player loses with only 2 of a vertical set', function() {
  const board = [0, null, null, null, null, null, 0, null, null]

  const result = game.checkForVerticalWin(board, 0);
  assert.strictEqual(result, false);
});

it('player loses with a mixed vertical set', function() {
  const board = [0, null, null, null, null, null, 0, null, null]

  const result = game.checkForVerticalWin(board, 0);
  assert.strictEqual(result, false);
});

it('player wins with a left to right diagonal set', function() {
  const board = [0, null, null, null, 0, null, null, null, 0]

  const result = game.checkForDiagonalWin(board, 0);
  assert.strictEqual(result, true);
});

it('player loses with an incomplete left to right diagonal set', function() {
  const board = [0, null, null, null, 0, null, null, null, null]

  const result = game.checkForDiagonalWin(board, 0);
  assert.strictEqual(result, false);
});

it('player wins with a right to left diagonal set', function() {
  const board = [null, null, 0, null, 0, null, 0, null, null]

  const result = game.checkForDiagonalWin(board, 2);
  assert.strictEqual(result, true);
});

it('player loses', function() {
  const board = [0, null, 0, null, null, null, 0, null, 0]

  const result = game.hasWon(board, 2);
  assert.strictEqual(result, false);
});

});
