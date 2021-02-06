import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {sendMessageCreated, updateNewMessageBodyCreated} from "../../redux/dialogPageReducer";
import {StoreType} from "../../redux/state";

type PropsDialogsType = {
    store: StoreType
}

export const Dialogs = (props: PropsDialogsType) => {

    let state = props.store.getState().dialogsPage

    let dialogsUsers = state.dialogs.map(users => <DialogItem name={users.name} id={users.id}/>);
    let messageElements = state.messages.map(messages => <Message message={messages.message}/>);
    let newMessageBody = state.newMessageBody;
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreated());

    }
    let onNewMessageChange = (event: any) => {
        let body = event.target.value;
        props.store.dispatch(updateNewMessageBodyCreated(body));
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsUsers}
                </div>
                <div className={s.messages}>
                    <div>{messageElements}</div>
                    <div>
                        <div className={s.sendMessage}>
                            <textarea value={newMessageBody} onChange={onNewMessageChange} placeholder='Message'/>
                            <button onClick={onSendMessageClick}>SEND</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
