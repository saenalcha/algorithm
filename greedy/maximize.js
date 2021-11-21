

function maximize(n, arr) {
  console.log(arr)
  const candies = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i-1] < arr[i]) {
      candies[i] = candies[i-1] + 1
    } else {
      candies[i] = 1
    }
  }
  for (let j = n-1; j > 0; j--) {
    if (arr[j-1] > arr[j] && candies[j] === candies[j-1]) {
      candies[j-1] = candies[j] + 1
    }
  }

  console.log(candies)
  const max = candies.reduce((acc, cur) => {
    return acc + cur
  })
  console.log(max)
  return max
}

// const n = 6
// const arr = [4, 6, 4, 5, 6, 2]
const n = 10
const arr = [2, 4, 2, 6, 1, 7, 8, 9, 2, 1]
maximize(n, arr)