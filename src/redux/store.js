
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import counterSliceReducer from './dogcounter-slice';
  
const store = configureStore({
    reducer: { counter : counterSliceReducer },
    // Additional middleware can be passed to this array
    middleware: [...getDefaultMiddleware()],
    devTools: process.env.NODE_ENV !== 'production',
    // Optional Redux store enhancers
    enhancers: [],
  });
  
export default store;