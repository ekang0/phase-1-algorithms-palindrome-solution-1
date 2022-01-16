function reverseString(word) {
  /*create an array from the input string
  reverse the array
  create a string from the reversed array
  return the reversed string */
  /* REFACTOR
  const wordArray = word.split('')
  const reverseWordArray = wordArray.reverse()
  const reversedWord = reverseWordArray.join('')
  return reversedWord
  */
 return word.split('').reverse().join('')
}

function isPalindrome(word) {
  // Write your algorithm here
  // reverse the input string
  const reverseWord = reverseString(word)
  // if the reversed string is the same as the input
  //   return true
  // else
  //   return false
  /*  REFACTOR - One bit of code we can clean up is the if/else statement. Since === will evaluate to either true or false, we can simply return the result of that comparison:
  if (word === reverseWord){
    return true
  } else {
    return false
  } 
  */
return word === reverseWord
}

/* 
  Add your pseudocode here
  reverse the input
  make function that takes input and 
    returns true if input and reverse input is the same
    returns false if input and reverse input is not the same

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  /*
    testCaseOne: 'level' //return true
    testCaseTwo: 'yay' //return true
    testCaseThree: 'hello' //return false
    testCaseFour: 'a' //return true
  */

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("level"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hello"));

}

module.exports = isPalindrome;
