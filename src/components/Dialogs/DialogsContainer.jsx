import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css"



let mapStateToProps = (state) =>{
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) =>{
    return {
        updateNewMessageBody: () =>{
            dispatch(sendMessageCreator());
        },
        sendMessage: (body)=>{
            dispatch(updateNewMessageBodyCreator(body));
        }
    }
}

// функция коннектит к диалогам 2 функции 
// 1я mapStateToProps - передает state
// 2я apDispatchToProps передает диспатчи
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;