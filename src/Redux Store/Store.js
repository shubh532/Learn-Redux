import { configureStore } from "@reduxjs/toolkit"
import CounterReducer from "./Counter";
import AutheticationReducer from "./Authetication";
const Store = configureStore({
    reducer: {
        Counter: CounterReducer,
        Authentication: AutheticationReducer
    }
})



export default Store