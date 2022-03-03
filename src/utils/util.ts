export const generateRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getDirections = (
  row: number,
  column: number,
  maxRows: number,
  maxColumns: number
) => {
  const directions: number[][] = [];
  if (row < maxRows) directions.push([row + 1, column]);
  if (row > 0) directions.push([row - 1, column]);
  if (column < maxColumns) directions.push([row, column + 1]);
  if (column > 0) directions.push([row, column - 1]);
  return directions;
};

const wordSearchHelper = (
  board: string[][],
  startRow: number,
  startCol: number,
  word: string,
  wordIndex: number,
  visited: Map<string, boolean>,
  coordinates: Map<string, boolean>,
  maxRows: number,
  maxColumns: number
) => {
  if (wordIndex === word.length) {
    return true;
  }
  if (wordIndex > word.length) return false;
  const directions = getDirections(startRow, startCol, maxRows, maxColumns);
  for (let i = 0; i < directions.length; i++) {
    const [x, y] = directions[i];
    const key = `${x}_${y}`;
    if (board[x] && board[x][y] === word[wordIndex] && !visited.get(key)) {
      visited.set(key, true);
      coordinates.set(key, true);
      if (
        wordSearchHelper(
          board,
          x,
          y,
          word,
          wordIndex + 1,
          visited,
          coordinates,
          maxRows,
          maxColumns
        )
      ) {
        return true;
      }
      coordinates.set(key, false);
      visited.set(key, false);
    }
  }
  return false;
};

export const wordSearch = (
  board: string[][],
  word: string,
  maxRows: number,
  maxColumns: number
) => {
  let coordinates: Map<string, boolean> = new Map();
  let res = false;
  for (let i = 0; i < maxRows; i++) {
    for (let j = 0; j < maxColumns; j++) {
      if (board[i][j] === word[0]) {
        coordinates.set(`${i}_${j}`, true);
        const visited: Map<string, boolean> = new Map();
        visited.set(`${i}_${j}`, true);
        res =
          res ||
          wordSearchHelper(
            board,
            i,
            j,
            word,
            1,
            visited,
            coordinates,
            maxRows,
            maxColumns
          );
        if (res) {
          return coordinates;
        }
        coordinates.set(`${i}_${j}`, false);
      }
    }
  }
  return coordinates;
};
