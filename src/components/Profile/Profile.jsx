import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

function Profile(props) {
    return (
        <div>
            <div>
                CONTENT
                
                <MyPosts posts = {props.profilePage.posts} newPostText={props.profilePage.newPostText} dispatch={props.dispatch}/>
            </div>
        </div>
    );
}

export default Profile;