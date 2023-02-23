import { configureStore } from "@reduxjs/toolkit";
import modalReducer from './modal.js';
import authReducer from './auth.js';
import cartReducer from './cart.js';


// Create the Redux store
const store = configureStore({
  reducer: {
        modal: modalReducer,
        auth: authReducer,
        cart: cartReducer

            
  }});

export default store;
