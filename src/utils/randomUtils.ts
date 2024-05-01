export const shuffleArray = <T>(arr: T[]): T[] => {
  const result = arr.slice();
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export const getRandomElements = <T>(arr: T[], count: number): T[] => {
  const result = shuffleArray(arr)
  return result.slice(0, count);
};
