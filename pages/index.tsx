import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {userSlice} from "../store/reducers/UserSlice";
import { wrapper } from "../store/store";
import {getRunningOperationPromises, postAPI} from "../services/PostService";
import { useRouter } from 'next/router';
import PostContainer from "../components/posts/PostContainer";

const Index = () => {

    return <PostContainer/>
};

export default Index;


export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async (context) => {

        store.dispatch(postAPI.endpoints.fetchAllPosts.initiate(5));

        await Promise.all(getRunningOperationPromises());

        return {
            props: {},
        };
    }
);