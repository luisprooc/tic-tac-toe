/**
 * Verify if the player wins.
 * @function
 * @param {array[]} board - The board of the game.
 * @param {string} lastMove - The last move in the game (`0,1`, `1,1`).
 * @param {string} icon - The icon  (`X`, `O`).
 * Returns true of false if the player wins
 * @returns {boolean}
 */
export const verifyWinner = (board = [], lastMove = "", icon = "") => {
  const [row, col] = lastMove.split(",");

  if (
    board[0][col] === icon &&
    board[1][col] === icon &&
    board[2][col] === icon
  ) {
    return true;
  } else if (
    board[row][0] === icon &&
    board[row][1] === icon &&
    board[row][2] === icon
  ) {
    return true;
  }
  else if(
    board[0][0] === icon &&
    board[1][1] === icon &&
    board[2][2] === icon) {
    return true;
  }
  else if(
    board[0][2] === icon &&
    board[1][1] === icon &&
    board[2][0] === icon) {
    return true;
  }

  return false;
};
