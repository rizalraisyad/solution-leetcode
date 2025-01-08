//
// Return true if input palindrom
// Input false if input not palindrom
//
//
// 121 is Palindrom
// -121 is not palindrom
//

function isPalindrome(x: number): boolean {
  const stringNumber = String(x);
  let rightPointer = stringNumber.length -1;
  for (let leftPointer = 0; leftPointer < (stringNumber.length /2); leftPointer++) {
      if (stringNumber[leftPointer] !== stringNumber[rightPointer]) {
          return false
      }

      rightPointer--;
  }

  return true
};