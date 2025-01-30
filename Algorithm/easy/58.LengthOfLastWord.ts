function lengthOfLastWord(s: string): number {
  let splittedString = s.trim().split(" ")

  return splittedString[splittedString.length - 1].length
};