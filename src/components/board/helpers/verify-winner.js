export const verifyWinner = (board = [], lastMove = "", icon = "") => {
  const [row,col] = lastMove.split(",");

  if(board[0][col] === icon && board[1][col] === icon && board[2][col] === icon) {
    return true;
  }

  return false;
  
}

// console.log(verifyWinner([
//   [null, "x", null], 
//   [null, "x", null], 
//   [null, "x", null] 
// ], "1,1", "x"))

// console.log(verifyWinner([
//   [null, "x", null], 
//   [null, "x", null], 
//   [null, "x", null] 
// ], "1,1", "x"))

// console.log(verifyWinner([
//   [null, null, null], 
//   [null, null, null], 
//   [null, null, null] 
// ], "1,1", null))

// console.log(verifyWinner([
//   [null, "x", null], 
//   [null, "x", null], 
//   [null, "x", null] 
// ], "1,1", "x"))