import { configureStore  } from '@reduxjs/toolkit'
import authReducer from './features/authSlice'

//for using cofigure store function we are using redux
export const store = configureStore({
    reducer: {
        auth: authReducer
    }
})