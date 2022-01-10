import React, {useEffect, useState} from 'react';
import {postAPI, useFetchAllPostsQuery} from "../../services/PostService";
import {useRouter} from "next/router";

const PostContainer = () => {
    const router = useRouter();
    const result = useFetchAllPostsQuery(5,
        {
            // If the page is not yet generated, router.isFallback will be true
            // initially until getStaticProps() finishes running
            skip: router.isFallback,
        }
    );
    const { isLoading, error, data, } = result;

    console.log(error,'error-rk')

    return (
        <div>
            {error ? (
                <>Oh no, there was an error</>
            ) : router.isFallback || isLoading ? (
                <>Loading...</>
            ) : data ? (
                <>
                    {
                        data.map(item=>(<div key={item.id}>{item.title}</div>))
                    }
                </>
            ) : null}
        </div>
    );
};

export default PostContainer;