/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(num) {
  const numbers = num.toString(10).split('').map((int) => parseInt(int, 10));
  const min = Math.min(...numbers);
  const indexMin = numbers.indexOf(min);
  numbers.splice(indexMin, 1);
  return +numbers.join('');
}

module.exports = deleteDigit;
