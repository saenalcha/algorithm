


function solution (s) {
  console.log(s)
  console.log(s[0])
  console.log(s[1])
  console.log(s[2])
  // 이번에도 다 못했네요 ㅠㅠ 아래 로직을 9부터 6까지 반복하는 것까지 생각하였는데..
  // 1. 9 의 인덱스를 찾는다
  // 2. 9의 대각선 방향의 숫자와 합쳐서 1인지 확인한다
  // 3. 아니라면 합쳐서 1이 되는 숫자로 만든다
  // 4. 8의 대각선 방향의 숫자와 합쳐서 1인지 확인한다
  // 5. 7의 인덱스를 찾는다
  // 6. 6의 인덱스를 찾는다
  let sum = 0

  if (s[1][1] !== 5) {
    sum += Math.abs(s[1][1] - 5)
  }

  const findIdx = (s, num) => {
    for (let i = 0; i < s.length; i++) {
      for (let j = 0; j < s[i].length; j++) {
        if (s[i][j] === num) {
          return [i, j]
        }
      }
    }
  }

  const findNumber = (n) => {
    if (n === 0) {
      return 2
    } else if (n === 1) {
      return 1
    } else if (n === 2) {
      return 0
    }
  }

  const findUpsideDown = ([a, b]) => {
    const ret = [findNumber(a), findNumber(b)]
    return ret
  }

  let nineIdx = findIdx(s, 9)
  let nineUpsideDown = findUpsideDown(nineIdx)

  if (s[nineUpsideDown[0]][nineUpsideDown[1]] + 9 !== 10) {
    sum += s[nineUpsideDown[0]][nineUpsideDown[1]] - 1
  }

  // 위 로직을 6까지 해서 sum에 더함

  return '* Answer is:  ' + sum
}

const s = [ [ 4, 9, 2 ], [ 3, 5, 7 ], [ 8, 1, 5 ] ]
console.log(solution(s))