import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
    name: 'productsCrud',
    initialState: {
        value: []
    },
    reducers: {
        getProducts: (state, action) => {
            state.value = action.payload
        },
        addProducts: (state, action) => {
            state = state.value.push(action.payload);
            console.log('add products', state.value)
        }
    }
});

export const {getProducts, addProducts} = productsSlice.actions;

export const selectProducts = state => state.productsCrud.value;

export default productsSlice.reducer;