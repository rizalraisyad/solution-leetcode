function searchInsert(nums: number[], target: number): number {
  for (let i = 0; i< nums.length; i++) {
      if (nums[i] === target) {
          return i;
      }
      if (nums[i] !== target && target < nums[i]) {
          if (i === 0) {
              return i
          } else {
              return i-1;
          }
      }
      if (nums[i] !== target && ( i+1 >= nums.length || nums[i+1] > target) ) {
          return i+1;
      }
  }

  return 0;
};