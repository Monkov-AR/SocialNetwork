import React from "react";
import { connect } from "react-redux";
import { 
    follow, 
    setCurrentPage, 
    setUsers, 
    toggleIsFetching, 
    unfollow
} from "../../redux/usersReducer";
import axios from "axios";
import Users from "./Users";
import preloader from "../../assets/images/preloader.svg"

// смысл в чем 
// было две обертки вокруг презетационной компоненты Users
// первая это UsersAPIComponent(в последующемUsersContainer) она нужна для конекта к серверу и получения юзеров
// вторая обертка сделана через connect и нужна для работы со стором
// потом они все засунуты в один файл

class UsersContainer extends React.Component {

    constructor(props) {
        super(props);
        // тут по идее должен быть запрос к серверу
        // ну или нет, как выяснится позже
    }
    // метод для кнопки в Users'ах которая добавляет юзеров
    getUsers = () => {
        if (this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.props.setUsers(response.data.items)

            });

        }
    }
    // дефолтные методы жизненного цикла PS. типа есть у любой компоненты
    //  на колько понял при создание объекта выполняется mount
    // если объект умирает то просходит unmount функция 
    componentDidMount() {
        // когда пошел запрос на сервер устанавливает toggle(лоадер) в true типа крутись
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            // после загузки юзеров устанавливает загрузку в false
            this.props.toggleIsFetching(false)                
            this.props.setUsers(response.data.items)
        });
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false) 
            this.props.setUsers(response.data.items)
        });
    }

    render() {
        return <div>
            {this.props.isFetching ? <img src={preloader} /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users} />

        </div>

    }
}
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}
// новая фишка, не юзать mapDispatchToProps которая ретернит диспатчи
// и посылать в коннект сразу объект с экшинами
// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followActionCreator(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowActionCreator(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersActionCreator(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageActionCreator(pageNumber))
//         },
//         toggleIsFetching:(isFetching) =>{
//             dispatch(toggleIsFetchingActionCreator(isFetching))
//         }
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
// новый код с без mapDispatchToProps
// и еще одна фишка если убрать ActionCretaor отовсюду то можно вообще не исполльзовать 
// синтаксиск follow: followActionCreator, а сразу -> follow
// если в объекте есть одинаковые поля user = {name: name} то можно написать просто {name}
// урок 58
export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    toggleIsFetching
    })(UsersContainer);