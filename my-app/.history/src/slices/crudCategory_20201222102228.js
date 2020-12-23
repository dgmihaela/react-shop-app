import { createSlice } from '@reduxjs/toolkit';

export const categorySlice = createSlice({
    name : 'categoryc',
    initialState : {
        value : []
    },
    reducers: {
        addCategory : (state, action) => {
            state = state.value.push(action.payload)
        },
        getCategories : (state, action) => {
            console.log('action payload: ', action.payload);
            state.value = action.payload
        }
    }
});

export const {addCategory, getCategories} = categorySlice.actions;

export const selectCategory = state => state.categoryc.value;

export default categorySlice.reducer;