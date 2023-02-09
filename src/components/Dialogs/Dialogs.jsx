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
const Message = (props) => {
    
    return (
        <div>
            {`${props.id}  ${props.message}`}
        </div>
    )
}
const Dialogs = (props) => {
    
    let state = props.dialogsPage;
    // функция map
    // смысл в том создается новый массив из приобразованных старых элеентов и вызываются функции отрисовки(те что вверху)
    // по уроку у него dialogsPage(В app.js) называется state соответсвенно тут вызов будет props.state.messages (вроде как удобно) 
    let dialogsElements = state.dialogs.map(d => <DialogItem id={d.id} name={d.name} />);
    let messagesElements = state.messages.map(m => <Message id={m.id} message={m.message} />)
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () =>{
        props.sendMessage();
    }

    let onNewMessageChange =(e) =>{
        let body = e.target.value;
        props.updateNewMessageBody(body);    
    }

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