import { createSlice } from "@reduxjs/toolkit"


const initialCounterState = { counter: 0, ShowCounter: true }

const CounterSlice = createSlice({
    name: "Counter",
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        increase(state, action) {
            state.counter = state.counter + action.payload
        },
        toggleCounter(state) {
            state.ShowCounter = !state.ShowCounter
        }
    }
})
export const counterActions = CounterSlice.actions;
export default  CounterSlice.reducer;