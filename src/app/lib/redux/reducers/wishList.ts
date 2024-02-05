import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../../react-query/queries/useGetProducts';
import type { PayloadAction } from '@reduxjs/toolkit';

type WishListItem = {
  product: Product;
}

export type WishListState = {
  items: Array<WishListItem>;
}

const initialState: WishListState = {
  items: [],
}

export const wishListSlice = createSlice({
  name: 'wishList',
  initialState,
  reducers: {
    addWishListItem: (state, action: PayloadAction<Product>) => {
      state.items.push({
        product: action.payload
      });
    },
    removeWishListItem: (state, action: PayloadAction<Product>) => {
      state.items = state.items.filter(item => item.product.id !== action.payload.id);
    },
  },
})

export const { addWishListItem, removeWishListItem } = wishListSlice.actions

export default wishListSlice.reducer