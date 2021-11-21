// https://www.hackerrank.com/challenges/sherlock-and-cost/problem

function solution(B) {
  let highSum = 0
  let lowSum = 0

  for (let i = 1; i < B.length; i++) { // i=1부터 시작
    // ... B[i-1], B[i] ... 를 가지고 계산
    const highLow = Math.abs(B[i-1] - 1) // B[i]를 1로 하고 B[i-1]과의 차
    const highHigh = Math.abs(B[i-1] - B[i]) // B[i-1]와 B[i]의 차

    const lowLow = 1 - 1
    const lowHigh = Math.abs(1 - B[i]) // B[i-1]을 1로 하고 B[i]와의 차


    const highNext = Math.max(highSum + highHigh, lowSum + lowHigh)
    const lowNext = Math.max(lowSum + lowLow, highSum + highLow)

    highSum = highNext
    lowSum = lowNext
    console.log('index:', i, '/   highSum: ', highSum, '/   lowSum: ', lowSum)
  }
  console.log('highSum: ', highSum, '|||| lowSum: ', lowSum)
  return Math.max(highSum, lowSum)

}

let B = [10, 1, 10, 1, 10]
B = [100, 2, 100, 2, 100]
// B = [4, 7, 9]


console.log(solution(B))
