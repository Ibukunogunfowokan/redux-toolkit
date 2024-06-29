import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: 0,
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers:{
        increment(state){
            state.value += 1;
        },
        decrement(state){
            state.value -=1;
        },
        incrementByAmount(state, action){
            state.value += action.payload
        },
        decrementByAmount(state, action){
            state.value -= action.payload
        }
    },
    extraReducers: (builder)=> {
        builder
        .addCase(incrementAsync.pending, (state)=>{
            console.log("incrementAsync.pending")
        })
        .addCase(incrementAsync.fulfilled, (state, action)=>{
            state.value += action.payload;
        })
        .addCase(decrementAsync.pending, (state)=>{
            console.log("decrementAsync.pending")
        })
        .addCase(decrementAsync.fulfilled,(state, action)=>{
            state.value -= action.payload;
        })

    },

})
const{actions, reducer} = counterSlice
export const incrementAsync = createAsyncThunk(
    'counter/incrementAsync',
    async(amount)=>{
        await new Promise((resolve)=>setTimeout(resolve, 2000));
        return amount;
    }
);

export const decrementAsync = createAsyncThunk(
    'counter/decrementAsync',
    async(amount)=>{
        await new Promise((resolve)=>setTimeout(resolve, 2000));
        return amount; 
    }
)
export const {increment, decrement, incrementByAmount,decrementByAmount} = actions;
export default reducer;