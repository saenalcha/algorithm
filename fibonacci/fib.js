function fib(n) {
  if (n === 1 || n === 2) {
    return 1
  } else {
    return fib(n - 1) + fib( n - 2)
  }
}

console.log(fib(10))

const memo = []
function fibMemo(n) {
  if (memo[n] !== undefined) {
    return memo[n]
  }

  if (n === 1 || n === 2) {
    memo[n] = 1
  } else {
    memo[n] = fibMemo(n - 1) + fibMemo(n - 2)
  }

  return memo[n]
}

console.log(fibMemo(10))

function fibDynamic(n) {
  const arr = []
  arr[1] = 1
  arr[2] = 1
  for (let i = 3; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]
  }

  return arr[n]
}

console.log(fibDynamic(10))



