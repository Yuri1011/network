import React from "react";
import {NavLink} from "react-router-dom";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

export const Dialogs = () => {
    let usersData = [
        {name: 'Marina', id: 1,},
        {name: 'Sergey', id: 2,},
        {name: 'Lyubov', id: 3},
        {name: 'Brus', id: 5}
    ]
    let dialogsUsers = usersData.map(users => <DialogItem name={users.name} id={users.id}/>);
    let messageDate = [
        {message: 'Hello!!'},
        {message: 'Hav are you?'},
        {message: 'Good by!'},
        {message: 'i`am Lox))'}
    ]
    let messageElements = messageDate.map(messages => <Message message={messages.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsUsers}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}
