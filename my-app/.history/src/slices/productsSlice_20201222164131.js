import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
    name: 'productsCrud',
    initialState: {
        value: {
            
        }
    },
    reducers: {
        getProducts: (state, action) => {
            // state.value = action.payload;
           state.value[action.payload.id] = action.payload.products;
           console.log(state.value)
        },
        addProducts: (state, action) => {
            state = state.value.[action.payload.products].push(action.payload);
            console.log('add products payload', action.payload)
            console.log('stateul', state)
        }
    }
});

export const {getProducts, addProducts} = productsSlice.actions;

export const selectProducts = state => state.productsCrud.value;

export default productsSlice.reducer;