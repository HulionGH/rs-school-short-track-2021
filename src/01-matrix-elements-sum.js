/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const width = matrix[0].length;
  const array = matrix.flat();
  let sumArr = 0;
  for (let i = 0; i < array.length; i++) {
    if (i <= width - 1) {
      sumArr += array[i];
    } else if (array[i - width] !== 0) {
      sumArr += array[i];
    }
  }
  return sumArr;
}
module.exports = getMatrixElementsSum;
