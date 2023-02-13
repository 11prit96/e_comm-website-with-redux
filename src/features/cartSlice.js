import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  cart: JSON.parse(localStorage.getItem("items")) || [],
  grandTotal: 0,
  isLoading: true,
};

export const getProducts = createAsyncThunk("products/get products", async () => {
  // console.log('inside thunk')
  const res = await fetch("https://fakestoreapi.com/products?limit=20");
  const data = await res.json();
  // console.log('data', data)
  return data;
});

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      const existingCartItemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingCartItem = state.cart[existingCartItemIndex];
      let updatedItems;
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems = [...state.cart];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.cart.concat({ ...action.payload, quantity: 1 });
      }

      return {
        ...state,
        cart: updatedItems,
      };
    },

    remove: (state, action) => {
      const existingCartItemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingCartItem = state.cart[existingCartItemIndex];
      let updatedItems;
      if (existingCartItem.quantity === 1) {
        updatedItems = state.cart.filter((item) => item.id !== action.payload.id);
      } else {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity - 1,
        };
        updatedItems = [...state.cart];
        updatedItems[existingCartItemIndex] = updatedItem;
      }

      return {
        ...state,
        cart: updatedItems,
      };
    },

    calculate_total: (state, action) => {
      return {...state, grandTotal: action.payload}
    }
  },
  extraReducers: {
    [getProducts.pending]: (state) => {
      // console.log("pending")
      state.isLoading = true
    },
    [getProducts.fulfilled]: (state, { payload }) => {
      // console.log("fulfilled")
      state.isLoading = false
      state.products = payload
    },
    [getProducts.rejected]: (state) => {
      // console.log("rejected")
      state.isLoading = false
    },
  }
});

export const { add, remove, calculate_total } = cartSlice.actions;

export const selectProducts = (state) => state.products;
export const selectCart = (state) => state.cart;
export const selectGrandTotal = (state) => state.grandTotal;
export const selectIsLoading = (state) => state.isLoading;

export default cartSlice.reducer;
