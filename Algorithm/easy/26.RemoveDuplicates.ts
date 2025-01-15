function removeDuplicates(nums: number[]): number {
  let insertIndex: number = 1;
  for (let i =1; i< nums.length; i++) {
      if(nums[i-1] != nums[i]){
          nums[insertIndex] = nums[i]
          insertIndex++;
      }
  }
  return insertIndex;
}