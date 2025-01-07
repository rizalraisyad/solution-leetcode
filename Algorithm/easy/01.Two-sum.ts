// 01. Two Sum
//  Case
//    Given an array of integers and an integer goal
//     return [x, y] as x add y = goal and exact 1 solution 
//
//  
//
//
//
//Solution 1
function twoSum(nums: number[], target: number): number[] {
  const defisits : number[] = [];
  
  for (let i = 0; i < nums.length; i++) {
      const defisit = target - nums[i];
      if (defisits.includes(defisit)) {
          return [defisits.indexOf(defisit), i]
      } else {
          defisits.push(nums[i])
      }
  }

  return [0, 0]
};

//Solution 2
function twoSum2(nums: number[], target: number): number[] {
  const keyNumber: Map<number, number> = new Map();
  
  for (let i=0; i < nums.length; i++) {
      let defisit :number = target - nums[i];
      if (keyNumber.has(defisit)) {
          return [keyNumber.get(defisit)!, i]
      }

      keyNumber.set(nums[i], i)
  }

  throw new Error("No solution");
};

