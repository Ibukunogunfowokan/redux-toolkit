import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter/counterSlice'

const  store = configureStore({
    reducer :{
        counter:counterReducer, 
    }
})

export default store;
export const  RootState = store.getState;
export const AppDispatch = store.dispatch;