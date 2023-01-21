const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  cartItems: [],
  cartQuantity: 0,
  cartTotalAmmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state?.cartItems?.findIndex(
        (item) => item._id === action.payload._id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        const Products = { ...action.payload, cartQuantity: 1 };
        state?.cartItems?.push(Products);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    getCart(state, action) {
      state.cartItems = action.payload;
    },
  },
});

export const { addToCart, getCart } = cartSlice.actions;
export default cartSlice.reducer;
