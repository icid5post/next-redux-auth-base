import {combineReducers} from "redux"
import {Action, configureStore, ThunkAction} from "@reduxjs/toolkit";

import userReducer from './reducers/UserSlice'


const rootReducer = combineReducers({
    userReducer
})

export const store = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof store>
export type AppDispatch = AppStore['dispatch']
