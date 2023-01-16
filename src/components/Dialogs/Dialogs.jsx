import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css"


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
    <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
        {/* в ссылке to используется кострукция javascript кода по этому нужны {} а в них 
        конкантинация строк (dialog) + (id), но можно использовать для этого отдельную переменную let
            <NavLink to={"/dialogs/"+ props.id}>{props.name}</NavLink> */}
    </div>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem id="1" name="Valera" />
                <DialogItem id="2" name="Dima"/>
                <DialogItem id="3" name="Igor"/>
                <DialogItem id="4" name="Masha"/>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    )
}

export default Dialogs;