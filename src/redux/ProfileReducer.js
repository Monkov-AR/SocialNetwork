const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE"

let initialState = {
    posts: [
        { id: 1, message: 'first post', likesCount: 12 },
        { id: 2, message: 'second post', likesCount: 12 },
        { id: 3, message: '3th post', likesCount: 22 },
        { id: 4, message: '4th post', likesCount: 32 },
    ],
    newPostText: "defaultPostText",
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USER_PROFILE: {
            return{
                ...state, profile:action.profile
            }
        }
        case ADD_POST: {
            let newPost = {
                    id: 5,
                    message: state.newPostText,
                    likesCount: 0
                };
    
                let stateCopy = {...state};
                stateCopy.posts = [...state.posts];
    
                stateCopy.posts.push(newPost);
                stateCopy.newPostText = "";
               
                return stateCopy;
        } 
        case UPDATE_NEW_POST_TEXT: {
            // console.log(state);
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;

            return stateCopy;
        }
        default: 
            return state;
    }
} 
export const setUserProfile = (profile) =>({type:SET_USER_PROFILE, profile})
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