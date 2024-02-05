export function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function formatCurrency(number: number) {
  return Intl.NumberFormat("en-US").format(number);
}