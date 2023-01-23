import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

function Profile(props) {
    return (
        <div>
            <div>
                CONTENT
                
                <MyPosts posts = {props.profilePage.posts} newPostText={props.profilePage.newPostText} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
            </div>
        </div>
    );
}

export default Profile;