function solution (n) {
  // 포기합니다 ㅠㅠ
  // 웬지 상하좌우를 본 다음에 계속 패턴이 반복될 것 같은데..
  const initialBomb = (n) => {
    if (n < 2) {
      return 'O'
    } else {
      if (n % 2 === 1) {
        return '.'
      } else {
        return 'O'
      }
    }
  }


}

console.log(solution(5))
