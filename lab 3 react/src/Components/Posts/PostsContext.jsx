import axios from "axios";
import { createContext, useEffect, useMemo, useState } from "react";

const PostsContext = createContext();

export const PostsContextProvider = (props) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getPosts = () => {
        axios.get("https://dummyjson.com/posts")
        .then(res => {
            setPosts(res.data.posts);
            setLoading(false);
        })
        .catch(err => {
            setError(err);
            setLoading(false);
        });
    };

    useEffect(() => {   
        getPosts();
    }, []);

    const contextValue = useMemo(() => ({ posts }), [posts]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <PostsContext.Provider value={contextValue}>
            {props.children}
        </PostsContext.Provider>
    );
}

export default PostsContext;
