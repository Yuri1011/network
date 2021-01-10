import React from "react";
import {NavLink} from "react-router-dom";
import s from './../Dialogs.module.css'

type PropsDialogType = {
    name: string
    id: number
}

export const DialogItem = (props: PropsDialogType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

