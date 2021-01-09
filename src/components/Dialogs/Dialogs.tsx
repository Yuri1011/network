import React from "react";
import {NavLink} from "react-router-dom";
import s from './Dialogs.module.css'

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Marina' id={1}/>
                <DialogItem name='Sergey' id={2}/>
                <DialogItem name='Lyubov' id={3}/>
            </div>
            <div className={s.messages}>
                <Message message='Hello!!'/>
                <Message message='Hav are you?'/>
                <Message message='Good by!'/>
            </div>
        </div>
    )
}
type PropsDialogType = {
    name: string
    id: number
}
const DialogItem = (props: PropsDialogType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}
type PropsMessageType = {
    message: string
}
const Message = (props: PropsMessageType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}