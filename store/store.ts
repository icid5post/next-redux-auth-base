import {combineReducers} from "redux"
import {Action, configureStore, ThunkAction} from "@reduxjs/toolkit";

import userReducer from './reducers/UserSlice'
import {postAPI} from "../services/PostService";


const rootReducer = combineReducers({
    userReducer,
    [postAPI.reducerPath]: postAPI.reducer
})

export const store = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(postAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof store>
export type AppDispatch = AppStore['dispatch']
