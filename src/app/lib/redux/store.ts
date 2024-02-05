import { configureStore } from '@reduxjs/toolkit';
import shoppingCartReducer from './reducers/shoppingCart';
import wishListReducer from './reducers/wishList';

export const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartReducer,
    wishList: wishListReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch