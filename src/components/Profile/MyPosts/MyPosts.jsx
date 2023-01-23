import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/ProfileReducer";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

// создаем ссылку на объект
let newPostElement = React.createRef();

function MyPosts(props) {
    
    let addPost = () => {
        // обращаемся к элементу этой ссылки (3)
        let text = newPostElement.current.value;
        props.dispatch(addPostActionCreator());
        props.updateNewPostText("");
    }

    let onPostChange = () =>{
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    let postsElements = props.posts.map(p => <Post id={p.id} message={p.message} likes={p.likesCount} />); 

    return (
        <div className={s.posts}>
            <h3>new post</h3>
            
            {/* ссылка приязывается к textarea (2)  */}
            <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>

            <button onClick={addPost}>
                AddPost
            </button>

            <div>
                <p>ALL POSTS</p>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;