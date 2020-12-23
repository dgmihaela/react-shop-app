import { configureStore } from '@reduxjs/toolkit';
// import counter from '../features/counter/counterSlice';
import categoriesCrud from '../slices/categorySlice';
import {productsCrud} from '../slices/productsSlice';
export default configureStore({
    reducer: {
        categoriesCrud,
        productsCrud
    },
    devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
});