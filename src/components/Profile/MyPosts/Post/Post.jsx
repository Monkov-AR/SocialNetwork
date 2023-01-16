import React from "react";
import s from "./Post.module.css";

function Post(props) {
    // debugger;
    // console.log(props.message);
    return (
        <div className={s.post}>
            <div>
                <div>
                    <p>POST {props.number}</p>
                </div>
                <div>
                    <span>like </span>
                </div>
            </div>
        </div>
    );
}

export default Post;