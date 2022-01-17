export const botPlay = (table = [], botIcon = "") => {
  for(let row = 0; row < table.length; ++row) {
    for(let col in table[row]) {
      if(table[row][col] === null) {
        table[row][col] = botIcon;
        return table;
      }
    }
  }
  return table;
};
