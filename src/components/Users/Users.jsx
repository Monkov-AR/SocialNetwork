import React from "react";
import { NavLink } from "react-router-dom";
import userPhoto from "../../assets/images/NullUser.png"
import style from "./Users.module.css"

// КЛАССОВАЯ КОМПОНЕНТА(PS. прям JAVA)
const Users = (props) => {

    //Math.ceil - округляет в большую сторону типа если количество элемтов не делется ровно на страницы
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        {/* <button onClick={getUsers}>Get Users</button> */}
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && style.selectedPage} onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
            })}
        </div>
        {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} />
                    </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                        : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
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


export default Users;