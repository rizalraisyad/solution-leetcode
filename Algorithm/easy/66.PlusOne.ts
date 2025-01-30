function plusOne(digits: number[]): number[] {
  let numTemp = 0
  for (let i = digits.length -1; i>=0; i--) {
      let div = 0;
      if (i === digits.length - 1) {
          let num = digits[i] + 1;
          div = num / 10;
          let mod = num % 10;
          digits[i] = mod
      } else {
          let num = digits[i] + numTemp;
          div = num / 10;
          let mod = num % 10;
          digits[i] = mod
          numTemp = 0
      }

      if (div >= 1) {
              numTemp = 1;
      }
  }
  
  if (numTemp !== 0) {
      digits.unshift(numTemp)
  }
  return digits
};