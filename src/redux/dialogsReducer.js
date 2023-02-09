const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY"
const SEND_MESSAGE = "SEND_MESSAGE"

let intialState = {
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

const dialogsReducer = (state = intialState, action) => {
    // есть вариант не использовать эту переменную а сразу ретурнить новый объект "return {...state, другиеПоля}"
    let stateCopy;

    switch (action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            stateCopy = {
                ...state,
                newMessageBody: action.body
            };
            return stateCopy;
        
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            stateCopy = {
                ...state,
                newMessageBody: "",
                messages: [...state.messages, {id: 6, message: body}]
            }
            
            return stateCopy;
        default:
            return state;
    }
}
export const sendMessageCreator = () => ({type:SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;