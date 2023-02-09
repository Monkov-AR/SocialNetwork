const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
     users: []
    //     { id: 1, followed: false, fullName: 'Dmitry', status: "I am a boss",location:{city: "Minsk", country: "Belarus"}},
    //     { id: 2, followed: true, fullName: 'Andrey', status: "I am a boss too",location:{city: "Moskov", country: "Russia"}},
    //     { id: 3, followed: false, fullName: 'Vasya', status: "I am a boss too",location:{city: "Kiev", country: "Ukrane"}}
    // ],
    
}

const usersReducer = (state = initialState, action) => {
    switch(action.type){
        case FOLLOW: {
            // без переменных сразу возвращаем объект с новым стейтом
            return {
                ...state,
                // users:[...state.users], - запись идентичная нижней с мапом
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return {...u, followed: true}    
                    }
                    return u;
                })
            }
        }            
        case UNFOLLOW: {
            return {
                ...state,
                // users:[...state.users], - запись идентичная нижней с мапом
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return {...u, followed: false}    
                    }
                    return u;
                })
            }
        }
        case SET_USERS:{
            //пока не понятная хуета, типа приходят новые пользователи мы их сетим,(при убирании хардкода)
            //return { ...state, users: action.users}

            //а пока берем текущий стейт и склеиваем с новым из action
            debugger
            return { ...state, users: [...state.users, ...action.users]}
        }
        default: 
            return state;
    }
} 

export const followActionCreator = (userId) =>({type: FOLLOW, userId})

export const unfollowActionCreator = (userId) =>({type: UNFOLLOW, userId})
export const setUsersActionCreator = (users) =>({type:SET_USERS, users})
export default usersReducer;