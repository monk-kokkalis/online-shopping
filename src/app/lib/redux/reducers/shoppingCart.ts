import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../../react-query/queries/useGetProducts';
import type { PayloadAction } from '@reduxjs/toolkit';

type ShoppingCartItem = {
  product: Product;
  quantity: number;
}

export type ShoppingCartState = {
  items: Array<ShoppingCartItem>;
}

const initialState: ShoppingCartState = {
  items: [],
}

export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Product>) => {
      state.items.push({
        product: action.payload,
        quantity: 1,
      });
    },
    removeItem: (state, action: PayloadAction<Product>) => {
      state.items = state.items.filter(item => item.product.id !== action.payload.id);
    },
    increaseShoppingCartItemQuantity: (state, action: PayloadAction<Product>) => {
      const item = state.items.find(item => item.product.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseShoppingCartItemQuantity: (state, action: PayloadAction<Product>) => {
      const item = state.items.find(item => item.product.id === action.payload.id);
      if (item) {
        item.quantity -= 1;
        if (item.quantity === 0) {
          state.items = state.items.filter(item => item.product.id !== action.payload.id);
        }
      }
    },
  },
})

export const { addItem, removeItem, increaseShoppingCartItemQuantity, decreaseShoppingCartItemQuantity } = shoppingCartSlice.actions

export default shoppingCartSlice.reducer