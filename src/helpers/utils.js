export const generateUniqId = () => {
  return Math.random().toString(36).substring(2, 6)
}
