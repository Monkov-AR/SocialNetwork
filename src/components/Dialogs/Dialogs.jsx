import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css"

// функции для отрисвоки диалогов и сообщений
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
const MessageItem = (props) => {
    return (
        <div>
            {`${props.id}  ${props.message}`}
        </div>
    )
}
const Dialogs = (props) => {
    // debugger;
    // функция map
    // смысл в том создается новый массив из приобразованных старых элеентов и вызываются функции отрисовки(те что вверху)
    // по уроку у него dialogsPage(В app.js) называется state соответсвенно тут вызов будет props.state.messages (вроде как удобно) 
    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem id={d.id} name={d.name} />);
    let messagesElements = props.dialogsPage.messages.map(m => <MessageItem id={m.id} message={m.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {/* конкретно вывести новый массив диалогов */}
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;