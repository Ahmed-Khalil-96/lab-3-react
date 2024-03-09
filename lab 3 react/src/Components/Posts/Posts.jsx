import React, { useContext } from "react";
import PostsContext from "./PostsContext";

function Posts() {
    const { posts } = useContext(PostsContext);

    return ( 
        <div>
            <h1>Posts</h1>
            {
                posts ? (
                    posts.map((post) => (
                        <div key={post.id}>
                            <h2>{post.title}</h2>
                        </div>
                    ))
                ) : (
                    <div>Loading</div>
                )
            }
        </div>
    );
}

export default Posts;
