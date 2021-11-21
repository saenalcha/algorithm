function solution(B) {
  let sum = 0
  let diff = {}

  const IS_FIRST_BIGGER = B[0] > B[1]
  console.log('IS_FIRST_BIGGER: ', IS_FIRST_BIGGER)
  for (let i = 1; i < B.length; i++) {
    const original = Math.abs(B[i-1] - B[i])
    const whatIfOne = IS_FIRST_BIGGER ?
      Math.abs( B[i-1] - 1) :
      Math.abs( B[i] - 1)
    if (original < whatIfOne) {
      diff[i] = whatIfOne
      if (IS_FIRST_BIGGER) {
        B[i] = 1
      } else {
        B[i-1] = 1
      }
    } else {
      diff[i] = original
    }
    console.log(diff[i], original, whatIfOne, B)
    sum += diff[i]
  }
  console.log(diff)
  return sum


}

let B = [10, 1, 10, 1, 10]
B = [100, 2, 100, 2, 100]
B = [4, 7, 9]


console.log(solution(B))