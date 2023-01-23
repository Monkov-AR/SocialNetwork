import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

// создаем ссылку на объект
let newPostElement = React.createRef();


function MyPosts(props) {
    let addPost = () => {
        // обращаемся к элементу этой ссылки (3)
        let text = newPostElement.current.value;
        props.dispatch({type:"ADD-POST"});
        props.updateNewPostText("");
    }
    let onPostChange = () =>{
        let text = newPostElement.current.value;
        props.dispatch({type:"UPDATE-NEW-POST-TEXT", newText:text});
        // console.log(text);  
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