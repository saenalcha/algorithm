function solution(n, k, x) {
  // 나머지 계산할 수
  const MOD = Math.pow(10, 9) + 7

  // base case
  // n = 3 이면
  // x = 1 일 때, @return k-1
  // x !== 1 일 때 @return k-2
  // const dp = {}
  // dp[3] = {}
  // dp[3][1] = k-1
  // dp[3][-1] = k-2
  // console.log(dp)
  // n = 4

  const xIsNotOne = {}
  const xIsOne = {}
  // xIsNotOne[n]: ways of construct length of n, x!=1
  // xIsOne [n]: ways of construct length of n, x==1
  xIsNotOne[2] = 1
  xIsOne[2] = 0


  for (let i = 3; i <= n; i++) {
    xIsNotOne[i] = xIsOne[i-1] + (k-2) * xIsNotOne[i-1];
    xIsOne[i] = (k-1) * xIsNotOne[i-1];
    xIsNotOne[i] %= MOD
    xIsOne[i] %= MOD
  }

  return x === 1 ? xIsOne[n] : xIsNotOne[n]
}

const n = 4
const k = 3
const x = 2

// const n = 761 // 4 // n elements
// const k = 99 // 3 // between 1 <= ~ <= k
// const x = 1 // 2 // first el is 1, last el is x = 2
// 761 99 1
// constraints
// 3 <= n
// 2 <= k
// 1 <= x <= k

// modulo 10^9 + 7
// @return numbers of array
// not Infinity
console.log(solution(n, k, x))

// Start calculating dp[i][j] on paper.
// You will notice that dp[i][2] == dp[i][3] == ... == dp[i][k].
// So only dp[i][1] is different.
// So just calculate dp[i][1] and dp[i][2]
//   (which stands for all the j's from 2 to k).
// Therefore the complexity is O(n).

// You have to work on pen and paper for this.
// First consider the base case for this problem which will be N=2.
// For any N ,
// there are two possibilities
// (i)  starting element == ending element
// (ii) starting element != ending element.
// We will store the result for an array of length i as g[i](when start==end) and f[i](when start!=end).
//
// So for N=2 lets have the arrays as (i) 11 (ii) 12.
// so you can see that g(2)=0 and f(2)=1.
// Now take N=3 and let the arrays be (i) 121 (ii) 132.
// So you can see that g(3)=1 and f(3)=2.
// Similary if you continue writing on paper for N=4,5,...
// you will get the above formula explained in the code.
// Give it some time and some manual calculation to understand the formula.
// Maybe try writing on paper for atleast N=5.
// Note: I have considered K=3 for the above explanation

/*
f(n): ways of construct length of n, x!=1
g(n): ways of construct length of n, x==1
then, we have:
f(n) = g(n-1) + (k-2) * f(n-1)
g(n) = (k-1) * f(n-1)
*/

// long countArray(int n, int k, int x) {
//   vector<long> f(n+1, 0);
//   vector<long> g(n+1, 0);
//   f[2] = 1;
//   g[2] = 0;
//   for (int i=3; i<=n; i++) {
//     f[i] = g[i-1] + (k-2) * f[i-1];
//     g[i] = (k-1) * f[i-1];
//     f[i] %= long(1e9+7);
//     g[i] %= long(1e9+7);
//   }
//   return x==1?g[n]:f[n];
// }