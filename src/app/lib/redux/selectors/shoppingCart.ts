import { formatCurrency, getDiscountedPrice } from "../../auxiliary";

import type { RootState } from "../store";

export const getShoppingCartItems = (state: RootState) => state.shoppingCart.items;
export const getShoppingCartTotal = (state: RootState) => {
  const numberOfItems = state.shoppingCart.items.length;
  const itemsTotal = state.shoppingCart.items.reduce((acc, item) => {
    const discountedPrice = getDiscountedPrice({ 
      price: item.product.price, discountPercentage: item.product.discountPercentage 
    });

    return acc + discountedPrice * item.quantity;
  }, 0);
  return {
    numberOfItems,
    itemsTotal: formatCurrency(itemsTotal)
  }
};