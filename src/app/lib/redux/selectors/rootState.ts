import { Product } from "../../react-query/queries/useGetProducts";
import type { RootState } from "../store";
import { getShoppingCartItems } from "./shoppingCart";
import { getWishListItems } from "./wishList";

export const getItemSelected = 
  ({ product }: { product: Product }) => 
  (state: RootState) => {
    const shoppingCartItems = getShoppingCartItems(state);
    const wishListItems = getWishListItems(state);

    return !![...shoppingCartItems, ...wishListItems].find(item => item.product.id === product.id);
  }