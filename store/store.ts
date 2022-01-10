import {combineReducers} from "redux"
import {configureStore} from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import {postAPI} from "../services/PostService";

export const makeStore = () =>
    configureStore({
        reducer: {
            [postAPI.reducerPath]: postAPI.reducer,
        },
        middleware: (gDM) => gDM().concat(postAPI.middleware),
    });


// const rootReducer = combineReducers({
//     [postAPI.reducerPath]: postAPI.reducer
// })
//
// export const store = () => {
//     return configureStore({
//         reducer: rootReducer,
//         middleware: (getDefaultMiddleware) =>
//             getDefaultMiddleware().concat(postAPI.middleware)
//     })
// }
// const AppStore = store();

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });