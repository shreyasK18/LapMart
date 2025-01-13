import {
    GET_CART,
    ADD_CART,
    ADD_ITEM_TO_CART,
    REMOVE_ITEM_FROM_CART,
    REMOVE_CART,
    CART_ERROR,
    CART_EMPTY,
    ORDER_CART,
  } from '../actions/types';
  
  import { createSlice } from '@reduxjs/toolkit';
  
  // Initial State
  const initialState = {
    items: null,
    count: 0,
    totalPrice: 0,
    loading: true,
    _id: null,
    itemdetails: null,
    ordered: false,
    error: {},
  };
  
  // Utility Functions
  const filterItemsById = (items, id) => items.filter((it) => it._id !== id);
  
  // Create Slice
  export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      getCartFromReducer(state, action) {
        const payload = action.payload;
        state.items = payload.items;
        state.count = payload.count;
        state.totalPrice = payload.total_price;
        state._id = payload._id;
        state.loading = false;
        state.itemdetails = payload.itemdetails;
        state.ordered = payload.order_status;
        state.error = {};
      },
      addCartFromReducer(state, action) {
        const payload = action.payload;
        state.items = payload.items;
        state.count += 1;
        state.totalPrice = payload.total_price;
        state._id = payload._id;
        state.loading = false;
        state.error = {};
      },
      addItemToCartFromReducer(state, action) {
        const payload = action.payload;
        state.items = payload.items;
        state.totalPrice = payload.total_price;
        state.count += 1;
        state.loading = false;
        state.error = {};
      },
      removeItemFromCartFromReducer(state, action) {
        const payload = action.payload;
        state.items = filterItemsById(state.items, payload.id);
        state.itemdetails = filterItemsById(state.itemdetails, payload.id);
        state.totalPrice = payload.total_price;
        state.count -= 1;
        state.loading = false;
      },
      cartErrorFromReducer(state, action) {
        const payload = action.payload;
        state.error = payload;
        state.loading = false;
      },
      cartEmptyFromReducer(state) {
        state.items = [];
        state.itemdetails = [];
        state._id = null;
      },
      removeCartFromReducer(state) {
        state.items = [];
        state.itemdetails = [];
        state._id = null;
        state.count = 0;
        state.ordered = false;
      },
      orderCartFromReducer(state, action) {
        const payload = action.payload;
        state.ordered = payload.order_status;
      },
    },
  });
  
  // Export Actions
  export const {
    getCartFromReducer,
    addCartFromReducer,
    addItemToCartFromReducer,
    removeItemFromCartFromReducer,
    cartErrorFromReducer,
    cartEmptyFromReducer,
    removeCartFromReducer,
    orderCartFromReducer,
  } = cartSlice.actions;
  
  // Export Reducer
  export default cartSlice.reducer;
  