
import {IPost} from "../models/IPost";
import { HYDRATE } from "next-redux-wrapper";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const postAPI = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com",
    }),
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath]
        }
    },
    tagTypes: [],

    endpoints: (builder) => ({
        fetchAllPosts: builder.query<IPost[], number>({
            query: (limit: number = 5) => ({
                url: '/posts',
                params: {
                    _limit: limit
                }
            })
        })
    })
})
// Export hooks for usage in functional components
export const {
    useFetchAllPostsQuery,
    util: { getRunningOperationPromises },
} = postAPI;


export const { fetchAllPosts } = postAPI.endpoints;