export const shuffleArray = <T>(arr: T[]): T[] => {
  const result = arr.slice();
  result.sort(() => Math.random() - 0.5);
  return result;
}

export const getRandomElements = <T>(arr: T[], count: number): T[] => {
  const result = shuffleArray(arr)
  return result.slice(0, count);
};
