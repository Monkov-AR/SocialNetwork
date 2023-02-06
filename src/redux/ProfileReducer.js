const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    posts: [
        { id: 1, message: 'first post', likesCount: 12 },
        { id: 2, message: 'second post', likesCount: 12 },
        { id: 3, message: '3th post', likesCount: 22 },
        { id: 4, message: '4th post', likesCount: 32 },
    ],
    newPostText: "defaultPostText"
}

const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST: 
            
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = "";
            return state;

        case UPDATE_NEW_POST_TEXT:
        
            console.log(state);
            state.newPostText = action.newText;
            return state;

        default: 
            return state;
    }
} 

export const addPostActionCreator = () =>{
    return {
        type:ADD_POST
    }
}
export const updateNewPostTextActionCreator = (text) =>{
    
    return {
        type:UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export default profileReducer;