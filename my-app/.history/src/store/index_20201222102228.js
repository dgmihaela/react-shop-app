import { configureStore } from '@reduxjs/toolkit';
// import counter from '../features/counter/counterSlice';
import categoryc from './../slices/crudCategory';
export default configureStore({
    reducer: {
        categoryc
    },
    devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
});