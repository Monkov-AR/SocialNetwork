import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts() {
    return (
        <nav className={s.posts}>
            <div>
                <p>POSTS</p>

                <Post number="1" message="Hi, how are you?" />
                <Post number="2" message="it's my first post" />
            </div>
        </nav>
    );
}

export default MyPosts;