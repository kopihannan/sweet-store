import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";



const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingIndex >= 0) {
        state.cartItems[existingIndex] = {
          ...state.cartItems[existingIndex],
          cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
        };
      } else {
        let tempProductItem = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProductItem);
        toast.success("Product added to cart");
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        // } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        //   const nextCartItems = state.cartItems.filter(
        //     (item) => item.id !== action.payload.id
        //   );

        // state.cartItems = nextCartItems;

        // toast.error("Product removed from cart");
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    getCart(state, action) {
      state.cartItems = action.payload;
    },
    removeFromCart(state, action) {
      state.cartItems.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          const nextCartItems = state.cartItems.filter(
            (item) => item.id !== cartItem.id
          );

          state.cartItems = nextCartItems;

          toast.error("Product removed from cart", {
            position: "bottom-left",
          });
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        return state;
      });
    },
    getTotal(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;
          const shipingCost = (itemTotal + 60) * 0.15;
          const tax = shipingCost + (itemTotal + 60);

          cartTotal.total += tax;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
    clearCart(state, action) {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.error("Cart cleared", { position: "bottom-left" });
    },
  },
});

export const {
  addToCart,
  decreaseCart,
  removeFromCart,
  getTotal,
  getCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
