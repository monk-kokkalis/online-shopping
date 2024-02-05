export function getDiscountedPrice({price, discountPercentage}: { price: number; discountPercentage: number; }) {
  return price - (price * (discountPercentage / 100));
}

export function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function formatCurrency(number: number) {
  return Intl.NumberFormat("en-US", {
    minimumIntegerDigits: 1,
    maximumFractionDigits: 2
  }).format(number);
}