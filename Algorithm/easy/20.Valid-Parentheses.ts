// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// Input: s = "()[]{}"
// Output: true
// Input: s = "(]"
// Output: false

function isValid(s: string): boolean {
  const key = {
      ')': '(',
      ']': '[',
      '}': '{'
  }

  const temp :string[]= [];

  for (let i = 0; i < s.length; i++) {
      
      if(key.hasOwnProperty(s[i])){
          if (key[s[i]] === temp[temp.length - 1]) {
              temp.pop();
          } else {
              return false;
          }
      } else {
          temp.push(s[i]);
      }
  }

  if (temp.length === 0) {
      return true;
  }
  return false;
};