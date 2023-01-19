import React from "react";
import s from "./Post.module.css";

function Post(props) {
    return (
        <div className={s.post}> 
            <div>
                <div>
                    <p>POST {props.id}</p>
                    {props.message}
                </div>
                <div>
                    <span>like {props.likes} </span>
                </div>
            </div>
        </div>
    );
}

export default Post;