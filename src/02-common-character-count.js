/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(stringOne, stringSecond) {
  let countChar = 0;
  const obj = stringSecond.split('');
  stringOne.split('').forEach((char) => {
    const idx = obj.findIndex((s) => s === char);
    if (idx >= 0) {
      countChar++;
      obj.splice(idx, 1);
    }
  });
  return countChar;
}
module.exports = getCommonCharacterCount;
