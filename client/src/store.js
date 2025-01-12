import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './reducers/cart';
import { itemsSlice } from './reducers/items';

// Use the reducer functions from the slices
const rootReducer = combineReducers({
  items: itemsSlice.reducer, // Access only the reducer from the slice
  cart: cartSlice.reducer,   // Access only the reducer from the slice
});

const store = configureStore({
  reducer: rootReducer, // Pass the combined reducers
});

export default store;
