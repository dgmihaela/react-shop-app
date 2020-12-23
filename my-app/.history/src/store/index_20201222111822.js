import { configureStore } from '@reduxjs/toolkit';
// import counter from '../features/counter/counterSlice';
import categoriesCrud from '../slices/categorySlice.js';
import {productsCrud} from '../slices/productsSlice.js';
export default configureStore({
    reducer: {
        categoriesCrud,
        productsCrud
    },
    devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
});