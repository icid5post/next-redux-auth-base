import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {userSlice} from "../store/reducers/UserSlice";

import {fetchUsers} from "../store/Actions/userActions";

const Index = () => {

    const {users, isLoading, error} = useAppSelector(s=>s.userReducer);
    const {} = userSlice.actions;
    const dispatch = useAppDispatch()

    useEffect(()=>{
       dispatch(fetchUsers());
    }, [])

    return (
        <div>
            {isLoading}
            {
                users.map(item=><div key={item.id}>{item.name}</div>)
            }
        </div>
    );
};

export default Index;