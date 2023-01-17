import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css"

// функция для отрисвоки диалогов, каждый диалог это (реактовская NavLink)ссылка для перехода на подкатегорию
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
// функция для отрисовки сообщений на вход подаются сообщения эта хрень их отрисовывает
const MessageItem = (props) => {
    return (
        <div>
            {`${props.id}  ${props.message}`}
        </div>
    )
}

const Dialogs = () => {
    // массивы с данными нихуя интересного
    let dialogs = [
        { id: 1, name: 'Valera' },
        { id: 2, name: 'Andrew' },
        { id: 3, name: 'Dima' },
        { id: 4, name: 'Igor' },
        { id: 5, name: 'Sveta' }
    ]
    let messages = [
        { id: 1, message: 'hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' }
    ]

    // функция map
    // смысл в том создается новый массив из приобразованных старых элеентов и вызываются функции отрисовки(те что вверху)
    let dialogsElements = dialogs.map(d => <DialogItem id={d.id} name={d.name} />);
    let messagesElements = messages.map(m => <MessageItem id={m.id} message={m.message} />);

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