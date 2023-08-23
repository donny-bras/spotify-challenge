export const shuffle = (array) => {
  return array.slice(0).sort(() => Math.random() - 0.5);
}