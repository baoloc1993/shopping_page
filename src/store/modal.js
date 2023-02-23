import { createSlice } from "@reduxjs/toolkit";

// Define initial state
const initialState = {
    isShowModal: false,
    productDetail: {}
  };

const modalSlice = createSlice({
    name: 'modal',
    initialState :initialState,
    reducers:{
        showModal(state, action){
            state.isShowModal = true;
            state.productDetail = action.payload;
        },
        hideModal(state){
            state.isShowModal = false;
        },
    }
})
  
export const modalActions = modalSlice.actions;
export default modalSlice.reducer;