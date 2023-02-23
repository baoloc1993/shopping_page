import { createSlice } from "@reduxjs/toolkit";

// Define initial state
const initialState = {
    isLoggedIn: JSON.parse(window.localStorage.getItem('userLoggedIn')),
  };

const authSlice = createSlice({
    name: 'auth',
    initialState :initialState,
    reducers:{
        logIn(state, action){
            state.isLoggedIn = true;
            window.localStorage.setItem('userLoggedIn', JSON.stringify(action.payload));
        },
        logOut(state){
            state.isLoggedIn = false;
            window.localStorage.removeItem('userLoggedIn');
        },
    }
})
  
export const authActions = authSlice.actions;
export default authSlice.reducer;