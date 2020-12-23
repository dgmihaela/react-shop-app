import { createSlice } from '@reduxjs/toolkit';

export const categorySlice = createSlice({
    name : 'categoriesCrud',
    initialState : {
        value : []
    },
    reducers: {
        addCategory : (state, action) => {
            state = state.value.push(action.payload)
            console.log(state)
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

export const {addCategory, getCategories, deleteCategories} = categorySlice.actions;

export const selectCategory = state => state.categoriesCrud.value;

export default categorySlice.reducer;