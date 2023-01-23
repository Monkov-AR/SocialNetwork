import { rerenderEntireTree } from "../render";

let state = {
    profilePage:{
        posts: [
            { id: 1, message: 'first post', likesCount: 12 },
            { id: 2, message: 'second post', likesCount: 12 },
            { id: 3, message: '3th post', likesCount: 22 },
            { id: 4, message: '4th post', likesCount: 32 },
        ]
    },
    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Valera' },
            { id: 2, name: 'Andrew' },
            { id: 3, name: 'Dima' },
            { id: 4, name: 'Igor' },
            { id: 5, name: 'Sveta' }
        ],
        messages: [
            { id: 1, message: 'hi' },
            { id: 2, message: 'How are you?' },
            { id: 3, message: 'Yo' },
            { id: 4, message: 'Yo' },
            { id: 5, message: 'Yo' }
        ]
    }

}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    // пушит в конец масива новую запись
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}
export default state;
