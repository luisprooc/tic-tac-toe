/**
  * Make a random bot play.
  * @function
  * @param {array[]} table - The board of the game.
  * @param {string} botIcon - The icon  (`X`, `O`).
  * Returns a object with the currently board and lastMove of the bot
  * @returns {object}
*/
export const botPlay = (table = [], botIcon = "") => {
  let lastMove = "";
  for(let row = 0; row < table.length; ++row) {
    for(let col in table[row]) {
      if(table[row][col] === null) {
        table[row][col] = botIcon;
        lastMove = `${row},${col}`
        return { board: table, lastMove };
      }
    }
  }
  return { board: table, lastMove };
};
