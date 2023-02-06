import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css";

function Profile(props) {
    return (
        <div>
            <div>
                CONTENT
                
                <MyPostsContainer />
            </div>
        </div>
    );
}

export default Profile;