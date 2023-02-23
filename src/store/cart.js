import { createSlice } from "@reduxjs/toolkit";

// Define initial state
const initialState = {
    listCarts: JSON.parse(window.localStorage.getItem('carts')) !== null ? JSON.parse(window.localStorage.getItem('carts')) : []
  };

const cartSlice = createSlice({
    name: 'cart',
    initialState :initialState,
    reducers:{
        add(state, action){
            var cart = action.payload;
            var selectedProduct = state.listCarts.filter(value=> value._id.$oid === cart._id.$oid)[0];
            if (selectedProduct === undefined){
                state.listCarts.push(cart);
            }else{
                selectedProduct.qty = Number(selectedProduct.qty + Number(cart.qty));
            
            }
            
            window.localStorage.setItem('carts', JSON.stringify(state.listCarts));
        },
        update(state, action){
            var cart = action.payload;
            var selectedProducts = state.listCarts.filter(value=> value._id.$oid !== cart._id.$oid);
            state.listCarts = selectedProducts;
            state.listCarts.push(cart);
            window.localStorage.setItem('carts', JSON.stringify(state.listCarts));
        },
        delete(state,action){
            var cart = action.payload;
            var selectedProducts = state.listCarts.filter(value=> value._id.$oid !== cart._id.$oid);
            state.listCarts = selectedProducts;
            window.localStorage.setItem('carts', JSON.stringify(state.listCarts));
        },
    }
})
  
export const cartActions = cartSlice.actions;
export default cartSlice.reducer;