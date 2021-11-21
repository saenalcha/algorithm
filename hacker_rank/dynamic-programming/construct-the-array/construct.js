function construct(n, k, x) {
  // n개 원소의 배열
  // 1 ~ k 자연수
  // x로 끝남
  console.log(n, k, x)
  let memo = []
  let arr = []
  arr.length = n
  console.dir(arr)
  arr[0] = 1
  arr[n - 1] = x
  for (let i = 0; i < arr.length; i++) {

    console.log(arr[i], i)
  }

  // 배열이 3개 일 때, (가장 작은 배열)
  // k 가 2 일 떄, (가장 작은 k)
  // x 가 1일 때, (가장 작은 x) 끝나는 수 x 는 항상 k보다 작거나 같음
  //   [1, 2, 1]
  // k 가 3일 떄,
  //   [1, 2, 1]
  //   [1, 3, 1]
  // k 가 4일 때,
  //   [1, 4, 1] 추가
  // n이 4개  일 때
  // k가 3일 때,
  // x가 1일 때,
  //   [1, 2, 3, 1]
  //   [1, 3, 2, 1]
  //
  //
  // 배열이 4개 일 떄,
  // [1, 2, 1, 1] (x)
  // [1, 1, 2, 1] (x)
  // 0개의 경우의 수














  console.log(arr, arr[0], arr[1], arr[2], arr[3], k)
}


const n = 4
const k = 3
const x = 2

// @return number of ways array
// n 개 원소의 배열
// 1 부터 k 까지의 수에서 모든 경우의 수
// 1에서 시작 x 로 끝남
// 1 <= x <= k
// ex) n = 4, k = 3, x = 2
// 1 O O k
// 1, 2, 1, 2

construct(n, k, x)