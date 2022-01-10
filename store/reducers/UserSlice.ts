import {IUser} from "../../models/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchUsers} from "../Actions/userActions";

interface UserState {
    users: IUser[];
    isLoading: boolean;
    error: string;
    count: number;
}

const initialState:UserState = {
    users: [],
    isLoading: false,
    error: 'some error for test',
    count: 0
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchUsers.fulfilled.type] : (state, action: PayloadAction<IUser[]>) => {
            state.isLoading = false;
            state.users = action.payload;
            state.error = '';
        },
        [fetchUsers.pending.type] : (state) => {
            state.isLoading = true;
        },
        [fetchUsers.rejected.type] : (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export default userSlice.reducer