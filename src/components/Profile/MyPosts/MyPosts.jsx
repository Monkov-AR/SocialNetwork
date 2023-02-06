import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {
    
    // создаем ссылку на объект
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () =>{
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
        
        // разделена логика и отдельно вынесена в переменную action
        // let action = updateNewPostTextActionCreator(text);
        // props.dispatch(action);
    }

    let postsElements = props.posts.map(p => <Post id={p.id} message={p.message} likes={p.likesCount} />); 

    return (
        <div className={s.posts}>
            <h3>new post</h3>
            
            {/* ссылка приязывается к textarea (2)  */}
            <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>

            <button onClick={onAddPost}>
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