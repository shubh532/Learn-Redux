import { createSlice } from "@reduxjs/toolkit"

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

export const AuthencationAction = AuthenticateSlice.actions
export default AuthenticateSlice.reducer
