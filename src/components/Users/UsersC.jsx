import axios from "axios";
import React from "react";
import userPhoto from "../../assets/images/NullUser.png"
import style from "./Users.module.css"

// КЛАССОВАЯ КОМПОНЕНТА(PS. прям JAVA)

class Users extends React.Component {

    constructor(props) {
        super(props);
        // тут по идее должен быть запрос к серверу
    }
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
        //Math.ceil - округляет в большую сторону типа если количество элемтов не делется ровно на страницы
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        debugger
        return <div>
            <button onClick={this.getUsers}>Get Users</button>
            <div>
                {pages.map(p => {
                    return <span className={this.props.currentPage === p && style.selectedPage} onClick={(e) => { this.onPageChanged(p) }}>{p}</span>
                })}
            </div>
            {this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>

                    </span>
                </span>
            </div>)}
        </div>
    }
}

export default Users;