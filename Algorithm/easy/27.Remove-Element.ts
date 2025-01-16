function removeElement(nums: number[], val: number): number {
  let rightPointer = nums.length;
  for (let i = 0; i < rightPointer; i++) {
      if (nums[i] === val) {
          nums[i] = nums[rightPointer - 1];
          rightPointer--;
          i--;
      }
  }

  return rightPointer;
};