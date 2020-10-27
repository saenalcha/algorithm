function solution(intervals) {
  // solution ----------------------------------
  intervals.sort((a, b) => a[1] - b[1]) // 마지막 원소 기준으로 오름차순 정렬
  let count = 0; // 답

  let firstMemo = [0, 0] // 저장할 interval
  let LastMemo = [0, 0] // 저장할 interval

  for (let interval of intervals) { // intervals 순회
    if (interval[0] > LastMemo[1]) { // interval의 첫번째 원소가 last의 마지막 원소보다 큰 경우
      count++
      LastMemo = interval;
    } else if (interval[0] > firstMemo[1]) { // interval의 첫번째 원소가 last의 마지막 원소보다 작고, first의 마지막 원소보다 큰 경우
      count++
      firstMemo = interval; // first에 interval로 새로 저장해서 갱신

      if (firstMemo[1] > LastMemo[1]) { // first의 마지막 원소와 last의 마지막 원소를 비교하여 오름차순 정렬
        [firstMemo, LastMemo] = [LastMemo, firstMemo];
      }
    }
  }

  return count;
}


const i1 = [ [ 1, 2 ], [ 2, 3 ], [ 2, 4 ] ]
const i2 = [ [ 1, 5 ], [ 1, 5 ], [ 1, 5 ] ]
const i3 = [ [ 1, 10 ], [ 1, 3 ], [ 4, 6 ], [ 7, 10 ] ]
const i4 = [ [ 1, 10 ], [ 1, 3 ], [ 3, 6 ], [ 7, 10 ] ]



console.log(solution(i1))