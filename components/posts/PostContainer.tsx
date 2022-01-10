import React, {useEffect, useState} from 'react';
import {postAPI} from "../../services/PostService";

const PostContainer = () => {
    const [limit, setLimit] = useState(10);
    const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(limit)

    useEffect(()=>{
        setTimeout(()=>{
            setLimit(3)
        }, 2000)
    }, [])

    return (
        <div>
            {error && 'oshibka'}
            {
                isLoading ? <div>Loading</div>
                :
                posts?.map(item=>(<div key={item.id}>{item.title}</div>))
            }

        </div>
    );
};

export default PostContainer;