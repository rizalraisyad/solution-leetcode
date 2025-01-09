// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
//
//
//
//
// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.


function romanToInt(s: string): number {
  const symbol = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000,
  }

  let total = 0;
  for (let i = s.length -1; i>=0; i--) {
      if ((s[i-1] === 'C' && (s[i] == 'D' || s[i] == 'M')) 
          || (s[i-1] === 'X' && (s[i] == 'L' || s[i] == 'C'))
          || (s[i-1] === 'I' && (s[i] == 'V' || s[i] == 'X'))
          ) {
          total += (symbol[s[i]] - symbol[s[i-1]])
          i--;
      } else {
          total += symbol[s[i]]
      }
  }

  return total;
};