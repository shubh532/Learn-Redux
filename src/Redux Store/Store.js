import { createSlice, configureStore } from "@reduxjs/toolkit"

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
const intialAuthState = { isAuthencate: false }
const AuthenticateSlice = createSlice({
    name: "Authencation",
    initialState: intialAuthState,
    reducers: {
        IsLogin(state) {
            state.isAuthencate = true
        },
        IsLogout(state) {
            state.isAuthencate = false
        }
    }
})


const Store = configureStore({
    reducer: {
        Counter: CounterSlice.reducer,
        Authentication: AuthenticateSlice.reducer
    }
})

export const counterActions = CounterSlice.actions;
export const AuthencationAction = AuthenticateSlice.actions

export default Store