// function climbStairs(n: number): number {
//   return climbStair(0,n)
// };

// function climbStair(i: number, n: number): number {
//   if (i > n) {
//       return 0
//   }

//   if (i == n) {
//       return 1
//   }
  
//   return climbStair(i + 1, n) + climbStair(i + 2, n);
// }

// Timelimit

function climbStairs(n: number): number {
  let memo: number[] = new Array(n + 1).fill(0)
  return climbStair( 0, n, memo)
};

function climbStair(i: number, n: number, memo: number[]): number {

  if (i > n) {
      return 0
  }

  if (i == n) {
      return 1
  }

  if (memo[i] > 0) return memo[i]

  memo[i] = climbStair(i + 1, n, memo) + climbStair(i + 2, n, memo);
  return memo[i];
}