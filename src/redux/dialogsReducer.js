

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



    return state;
}

export default dialogsReducer;