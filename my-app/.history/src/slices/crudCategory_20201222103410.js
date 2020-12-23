import { createSlice } from '@reduxjs/toolkit';

export const categorySlice = createSlice({
    name : 'categoriesCrud',
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
        },
        deleteCategories: (state, action) => {
            console.log(state.value)
        }
    }
});

export const {addCategory, getCategories} = categorySlice.actions;

export const selectCategory = state => state.categoryc.value;

export default categorySlice.reducer;