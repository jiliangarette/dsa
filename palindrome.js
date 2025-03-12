function isPalindrome(word) {
  let firstHalf = "";
  let secondHalf = "";
  const newWord = word.toString();
  let halfWordLength = Math.floor(newWord.length / 2);

  for (let i = 0; i < halfWordLength; i++) {
    firstHalf += newWord[i];
    secondHalf += newWord[newWord.length - 1 - i];
  }

  return firstHalf.toLowerCase() === secondHalf.toLowerCase();
}
console.log(isPalindrome(-121)); //
