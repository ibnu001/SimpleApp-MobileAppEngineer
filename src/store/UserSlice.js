import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {}
    },
    reducers: {
        registration: (state, action) => {
            state.user = action.payload
        }
    }
})

export const { registration } = userSlice.actions

export default userSlice.reducer