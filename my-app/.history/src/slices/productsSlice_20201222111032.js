import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
    name: 'productsCrud',
    initialState: {
        value: []
    },
    reducers: {
        addProducts: (state, action) => {
            state = state.push(action.payload);
            console.log(state)
        }
    }
})