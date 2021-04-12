/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const result = names;
  names.forEach((word, i) => {
    let wordIndex = names.indexOf(word, i + 1);
    let count = 1;
    while (wordIndex !== -1) {
      result.splice(wordIndex, 1, `${word}(${count})`);
      count++;
      wordIndex = names.indexOf(word, wordIndex + 1);
    }
  });
  return result;
}

module.exports = renameFiles;
