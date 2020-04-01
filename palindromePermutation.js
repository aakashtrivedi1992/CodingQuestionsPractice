/*
 * This function checks whether a string passed in can be rearranged to form a palindrome.
 * If so, return true. If not, return false.
 *
 */
function checkPalindrome(str) {
  //split the string to an array. Sort it. Then join it back together.
  let arr = str.split('')
  let sortedArray = arr.sort()
  str = sortedArray.join('')
  
  let i = 0;
  let stringLength = str.length
  let singleLetter = false
  
  
  // Go through the string and check whether each character and the following character has a pair (if size is even)
  // If size is odd, then make sure that just one character doesn't have a pair.
  while (i < stringLength) {
      if (stringLength % 2 === 0) {
        if (str[i] !== str[i + 1]) {
          return false;
        }
        
        i += 2;
      }
    
      else {
        if (str[i] !== str[i + 1]) {
          if (singleLetter) {
            return false
          }
          
          else {
            singleLetter = true
            i++;
          }
        }
        
        else {
          i += 2
        }
        
      }
    
      
    
  }
  
  return true;
  
  
}


console.log("Here is answer (false): " + checkPalindrome("daily"))
console.log("Here is answer (true): " + checkPalindrome("carrace"))
console.log("Here is answer (true): " + checkPalindrome("toilet olitte"))


















