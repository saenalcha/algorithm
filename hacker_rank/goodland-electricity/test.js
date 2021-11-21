const solution = require('./index')

const k = 2
const arr = [ 0, 1, 1, 1, 1, 0]

console.log(solution)
test('must return', () => {
  expect(solution(k, arr)).toBe(2)
})