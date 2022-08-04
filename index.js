function isPalindrome(word) {
  // Write your algorithm here
  const reversed = word.split("").reverse().join("");
  if (reversed === word) return true;

    return false;
};

/* 
  Add your pseudocode here
  checks if a string is a palindrome by taking a string and reversing it to see if its identical to the string prior to reversal.
*/

/*
  Add written explanation of your solution here
  My variable "reversed" splits the letters of the word into an array and then reverses the array and rejoins the letters.
  Then the isPalindrome function checks if reversed is the same as word, if it yes the function returns true. If reversed is not the same as word, the function returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
