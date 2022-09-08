export function getRandomTrick(array) {
  const currentTrick = array[Math.floor(Math.random() * array.length)]
  return currentTrick
}
