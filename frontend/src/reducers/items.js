import { createSlice } from '@reduxjs/toolkit';

// Initial State
const initialState = {
  items: [
  ],
  item: null,
  cart: [],
  loading: true,
  error: {},
};

// Utility Functions
const addItemCount = (cart, payload) => {
  const existingItem = cart.find((item) => item.id === payload.id);
  if (existingItem) {
    return cart.map((item) =>
      item.id === payload.id ? { ...item, count: item.count + 1 } : item
    );
  }
  return [...cart, { ...payload, count: 1 }];
};

const removeItemCount = (cart, payload) => {
  const existingItem = cart.find((item) => item.id === payload);
  if (existingItem && existingItem.count > 1) {
    return cart.map((item) =>
      item.id === payload ? { ...item, count: item.count - 1 } : item
    );
  }
  return cart.filter((item) => item.id !== payload);
};

// Create Slice
export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    getItemsFromReducer(state, action) {
      state.items = action.payload;
      state.loading = false;
    },
    getItemFromReducer(state, action) {
      state.item = action.payload;
      state.loading = false;
    },
    addCart(state, action) {
      state.cart = addItemCount(state.cart, action.payload);
      state.loading = false;
    },
    removeCart(state, action) {
      state.cart = removeItemCount(state.cart, action.payload);
      state.loading = false;
    },
    itemError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

// Export Actions
export const { getItemsFromReducer, getItemFromReducer, addCart, removeCart, itemError } =
  itemsSlice.actions;

// Export Reducer
export default itemsSlice.reducer;
