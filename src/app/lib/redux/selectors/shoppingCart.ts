import type { RootState } from "../store";

export const getShoppingCartItems = (state: RootState) => state.shoppingCart.items;