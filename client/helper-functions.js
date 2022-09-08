export function getRandomTrick(tricksArr) {
  const currentTrick = tricksArr[Math.floor(Math.random() * tricksArr.length)]
  return currentTrick
}
