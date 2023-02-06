import profileReducer from "./profileReducer";

// константы к старому коду
// const ADD_POST = "ADD-POST";
// const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let store = {
    state: {
        profilePage: {
            posts: [
                { id: 1, message: 'first post', likesCount: 12 },
                { id: 2, message: 'second post', likesCount: 12 },
                { id: 3, message: '3th post', likesCount: 22 },
                { id: 4, message: '4th post', likesCount: 32 },
            ],
            newPostText: "defaultPostText"
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

    },
    getState() {
        return this.state;
    },
    rerenderEntireTree() {
        console.log("state was changed")
    },
    subscrube(observer) {
        this.rerenderEntireTree = observer;
    },

    // метод dispatch(action) единственный метод управления хранилищем, 
    // ювнутри метода кидается action в котором есть поле type (что сделать)
    dispatch(action) {  //{type: "ADD-POST"}
        
        // делегирование изменнение state'a редюсерам
        this.state.profilePage = profileReducer(this.state.profilePage, action)
        // другие редюсеры ....


        // оповещение обсерверов
        this.rerenderEntireTree(this.state);

// -----------------------------------------------------
        // старая логика без редюсеров
        // if (action.type === ADD_POST) {
        //     let newPost = {
        //         id: 5,
        //         // раньше было что значение нового поста приходило из вне, 
        //         // во второй редакции значение берется изнутри, 
        //         // т.к оно меняется постоянно в реалтайме через  функцию updateNewPost
        //         message: this.state.profilePage.newPostText,
        //         likesCount: 0
        //     };
        //     // пушит в конец масива новую запись
        //     this.state.profilePage.posts.push(newPost);
        //     this.rerenderEntireTree(this.state);
        // } else if (action.type === UPDATE_NEW_POST_TEXT) {
        //     this.state.profilePage.newPostText = action.newText;
        //     this.rerenderEntireTree(this.state);
        // }
    }


}

export default store;
window.store = store;

