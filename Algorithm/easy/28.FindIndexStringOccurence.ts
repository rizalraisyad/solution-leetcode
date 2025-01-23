function strStr(haystack: string, needle: string): number {
  let indexStart = -1;
  let rightPointer = 0;
  if (needle.length > haystack.length) {
      return indexStart
  }
  for (let i=0; i<haystack.length; i++) {
      rightPointer = 0;
      if (haystack[i] === needle[rightPointer]) {
          for (let j=i; j<haystack.length; j++) {
              console.log(j)
              if (haystack[j] === needle[rightPointer]) {
                  rightPointer ++;
              } else {
                  break;
              }
              if (rightPointer === needle.length) {
                  return i;
              }
          }
      }
  }
  return -1;
};


/// solution 2
function strStr2(haystack: string, needle: string): number {
  if (needle.length > haystack.length) {
      return -1
  }
  for (let i = 0; i <= haystack.length - needle.length; i++) {
      if (haystack.substring(i, i + needle.length) === needle) {
          return i;
      }
  }
  return -1;
};