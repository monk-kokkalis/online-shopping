import type { RootState } from "../store";

export const getWishListItems = (state: RootState) => state.wishList.items;