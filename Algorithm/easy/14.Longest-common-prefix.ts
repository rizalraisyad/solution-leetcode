// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"



function longestCommonPrefix(strs: string[]): string {
  let prefix = "";
  let sortedStr = strs.sort((one, two) => (one > two ? -1 : 1));
  let maxLength = sortedStr[0].length > sortedStr[sortedStr.length - 1].length ? 
                  sortedStr[sortedStr.length - 1].length : sortedStr[0].length;

  for (let i =0; i < maxLength; i++) {
      if (sortedStr[0][i] === sortedStr[sortedStr.length - 1][i]) {
          prefix += sortedStr[0][i];
      } else {
          return prefix;
      }
  }

  return prefix
};