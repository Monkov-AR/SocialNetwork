import React from "react";
import { connect } from "react-redux";
import { followActionCreator, setCurrentPageActionCreator, setUsersActionCreator, unfollowActionCreator } from "../../redux/usersReducer";

import axios from "axios";
import Users from "./Users";

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
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)

        });
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {  
                this.props.setUsers(response.data.items)
    
            });
    }

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage= {this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        />
    }    
}
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        },
        setCurrentPage:(pageNumber) =>{
            dispatch(setCurrentPageActionCreator(pageNumber))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);