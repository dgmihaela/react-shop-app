import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
    name: 'productsCrud',
    initialState: [],
    reducers: {
        getProducts: (state, action) => {
            // state.value = action.payload;
            console.log('produsele venite pe get in slice', action.payload)
           return {
            ...state,
            payload: action.payload
           } 
        },
        addProducts: (state, action) => {
            state = state.push(action.payload);
            console.log('add products payload', action.payload)
            console.log('stateul', state)
        }
    }
});

export const {getProducts, addProducts} = productsSlice.actions;

export const selectProducts = state => state.productsCrud;

export default productsSlice.reducer;