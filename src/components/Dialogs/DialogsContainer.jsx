import React from "react";
import { connect } from "react-redux";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";



let mapStateToProps = (state) =>{
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) =>{
    return {
        updateNewMessageBody: (body) =>{
            dispatch(updateNewMessageBodyCreator(body));
        },
        sendMessage: ()=>{
            dispatch(sendMessageCreator());
        }
    }
}

// функция коннектит к диалогам 2 функции 
// 1я mapStateToProps - передает state
// 2я apDispatchToProps передает диспатчи
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;