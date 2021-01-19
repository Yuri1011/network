import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

type DialogType = {
    name: string
    id: number
}
type MessagesType = {
    message: string
}
type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessagesType>
}
type PropsDialogsType = {
    data: DialogsPageType
}

export const Dialogs = (props: PropsDialogsType) => {

    let dialogsUsers = props.data.dialogs.map(users => <DialogItem name={users.name} id={users.id}/>);
    let messageElements = props.data.messages.map(messages => <Message message={messages.message}/>);
    let sendNewMessage: any = React.createRef()
    let sendMessage = () => {
        let text = sendNewMessage.current.value
        alert(text);
    }
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsUsers}
                </div>
                <div className={s.messages}>
                    {messageElements}
                </div>
            </div>
            <div className={s.sendMessage}>
                <textarea ref={sendNewMessage}/>
                <button onClick={sendMessage}>SEND</button>
            </div>
        </div>
    )

}
