// Greedy


function solution (k, arr) {
  let initialArr = [...arr]
  let pylonCount = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'P') {
      console.log(`arr[${i}] is Pylon`)
    } else if (arr[i] === 1 || arr[i] === '1') {
      // arr[i]에 전기 설치 가능
      // arr[i - k - 1] 부터, arr[i] 까지 설치 | arr[i]부터 arr[i + k - 1]
      console.log(`arr[${i}]에 전기를 설치하므로 count 추가`)
      arr[i] = 'P'
      pylonCount++
      for (let j = i - k + 1; j < i + k; j++) {
        console.log(`arr${j} 부터 arr[${i + k - 1}]까지 전기 통함`, pylonCount, j)
        if (j >= 0) {
          console.log(j)
          arr[j] = 'P'
        }
      }
    } else {
      console.log(`if arr[${i}] !== 'P' && !== '1' && i === 0`, arr, arr[i-1])
      console.log('전기를 설치할 수 없는 지역에 도달')
      // pylon을 설치할 수 없는 지역
      // 에 접근했을 때
      // i-k+1 부터 i+k-1 까지 1이 존재하지 않으면
      // -1 리턴
      if (i === 0 || i === arr.length - 1) {
        //
      } else {
        const start = i-k+1 < 0 ? 0 : i-k+1
        const end = i+k > arr.length ? arr.length : i+k
        const subArr = arr.slice(start, end)
        const hasOne = subArr.find(v => +v === 1)
        if (hasOne === undefined) {
          return -1
        }
      }
    }
  }
  console.log('--------last arr', arr, pylonCount, initialArr)

  return pylonCount
}

// const k = 2 // less than k
const k = 20
// const arr = [ 0, 1, 1, 1, 1, 0 ]
// const arr = [ 0, 1, 0, 0, 1, 1, 1, 0 ]
// const arr = [0, 1, 0, 0, 0, 1, 0]
const arr =  '0 0 1 0 0 1 0 0 1 1 0 0 0 0 0 0 0 0 1 0 1 0 0 0 0 0 1 0 0 0 1 0 0 1 0 0 0 0 0 0 1 0 0 1 0 0 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 1 0 0 0 1 0 0 0 0 0 1 0 1 1 0 0 0 0 1 0 0 0 0'.split(' ')
console.log(solution(k, arr))

// return value: minimum number of plants that must be built to all cities have electricity
// if not possible return -1


module.exports = solution

// 처음 푼 것
// let initialArr = [...arr]
// // let count = 0
// // let tempSet = []
// let electronEnd = 0
//
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 'P') {
//     console.log('arr[i] is P. i:', i)
//   } else if (arr[i] === 1) {
//     arr[i] = 'P'
//     arr[i-1] = 'P'
//     arr[i+1] = 'P'
//     electronEnd++
//     console.log('electronEnd++:', electronEnd)
//     // if (tempSet.length === k + 1) {
//     //
//     //   console.log('---same--------')
//     //   count++
//     //   // tempSet = []
//     // } else {
//     //   if (arr[i+1] === 1) {
//     //     tempSet.push(i)
//     //   }
//     // }
//     console.log('index:',  i)
//   } else {
//     console.log(`if arr[${i}] === 0`, arr, arr[i-1])
//     if (i > 0 || i > arr.length - 1) {
//       if (arr[i-1] === 0 || arr[i+1] === 0) {
//         return -1
//       }
//     }
//   }
// }
// console.log('--------last arr', arr, electronEnd, initialArr)
//
// return electronEnd