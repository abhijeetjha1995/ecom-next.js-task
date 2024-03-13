import { createSlice } from "@reduxjs/toolkit";
import {
  addItemToCart,
  removeItemFromCart,
  clearItemFrom,
} from "../utils/cart";
import { useSelector } from "react-redux";
import { useAction } from "./hooks";

const initialState = {
  cartItem: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.cartItem = addItemToCart(state.cartItem, action.payload);
    },
    removeItem: (state, action) => {
      state.cartItem = removeItemFromCart(state.cartItem, action.payload);
    },
    clearItem: (state, action) => {
      state.cartItem = clearItemFrom(state.cartItem, action.payload);
    },
  },
});

export const { addItem, removeItem, clearItem } = cartSlice.actions;
export default cartSlice.reducer;

export const useCart = () => {
  return {
    cartItems: useSelector((state) => state.cartItems.cartItem),
    addItem: useAction(addItem),
    removeItem: useAction(removeItem),
    clearItem: useAction(clearItem),
  };
};
