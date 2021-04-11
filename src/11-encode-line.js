/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let count = 1;
  str.split('').forEach((char, index) => {
    if (char === str[index + 1]) {
      count++;
    } else {
      result += count <= 1 ? char : `${count}${char}`;
      count = 1;
    }
  });
  return result;
}

module.exports = encodeLine;
