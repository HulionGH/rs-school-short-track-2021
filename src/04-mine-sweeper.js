/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const minesField = matrix.map((row) => (row.map(() => 0)));
  minesField.forEach((row, rIndx) => {
    row.forEach((col, cIndx) => {
      if (matrix[rIndx][cIndx]) {
        if (rIndx > 0) {
          minesField[rIndx - 1][cIndx]++;
        }
        if (cIndx < row.length - 1) {
          minesField[rIndx][cIndx + 1]++;
        }
        if (rIndx < matrix.length - 1) {
          minesField[rIndx + 1][cIndx]++;
        }
        if (cIndx > 0) {
          minesField[rIndx][cIndx - 1]++;
        }
        if (rIndx > 0 && cIndx < row.length - 1) {
          minesField[rIndx - 1][cIndx + 1]++;
        }
        if (cIndx < row.length - 1 && rIndx < matrix.length - 1) {
          minesField[rIndx + 1][cIndx + 1]++;
        }
        if (rIndx < matrix.length - 1 && cIndx > 0) {
          minesField[rIndx + 1][cIndx - 1]++;
        }
        if (cIndx > 0 && rIndx > 0) {
          minesField[rIndx - 1][cIndx - 1]++;
        }
      }
    });
  });
  minesField.map((row, rIndx) => (row.map((col, cIndx) => (matrix[rIndx][cIndx] ? 1 : col))));
  return minesField;
}

module.exports = minesweeper;
