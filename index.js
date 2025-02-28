/**
 * Returns an array containing only the words from the input array that start with a capital letter.
 * @param {string[]} stringsArray - An array of strings.
 * @returns {string[]} - An array of strings containing words starting with a capital letter.
 * @example
 * wordsStartingWithCapital(["Apple", "banana", "Cat", "dog"])
 * // Returns: ["Apple", "Cat"]
 */
function wordsStartingWithCapital(arr) {
  const onlyCapArr = [];
  

  for (let str of arr) {
    const splitStr = str.split("");

    if (splitStr[0].toUpperCase() === splitStr[0]) {
      onlyCapArr.push(str);
    }
  }
  return onlyCapArr;
}

console.log(wordsStartingWithCapital(["Apple", "banana", "Cat", "dog"]));
/**
 * Calculates the sum of all odd numbers greater than 10 in the given array.
 * @param {number[]} numbersArray - An array of numbers.
 * @returns {number} - The sum of all odd numbers greater than 10.
 * @example
 * sumOfOddNumbersGreaterThanTen([5, 15, 10, 13, 20])
 * // Returns: 28
 */
function sumOfOddNumbersGreaterThanTen(arr) {
  let sum = 0;

  for (let num of arr) {
    if (num % 2 !== 0 && num > 10) {
      sum += num;
    }
  }
  return sum;
}

/**
 * Returns an object containing a count of how many letters are in each word in the given sentence.
 * @param {string} sentence - A string representing a sentence.
 * @returns {Object.<string, number>} - An object where keys are words and values are the counts of letters in each word.
 * @example
 * countLettersInEachWord("The quick brown fox")
 * // Returns: { "The": 3, "quick": 5, "brown": 5, "fox": 3 }
 */
function countLettersInEachWord(string) {
  let letterCount = {};
  const splitStr = string.split(" ");

  if (string === "") {
    return letterCount;
  }

  for (let str of splitStr) {
   if (!letterCount[str]) {
    letterCount[str] = str.length;
   } 
  }
  return letterCount;
}

module.exports = {
  wordsStartingWithCapital,
  sumOfOddNumbersGreaterThanTen,
  countLettersInEachWord,
};
