import { createSlice } from "@reduxjs/toolkit";
import { productData } from "../products/productData";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    list: [],
    total:0,
    items: productData,
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addcount: (state, action) => {
      const check = state.list.findIndex(book=>book.id === action.payload.id)
      console.log(check);
      if(check !== -1){
        state.list[index].quantity += action.payload.quantity
      } else{
        state.list.push(action.payload)
      }
    },
  },
});
export const { addcount } = cartSlice.actions;
export default cartSlice.reducer;
