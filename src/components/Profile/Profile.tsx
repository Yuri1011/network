import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div className={s.content}>
            <div className={`${s.item} ${s.img}`}>
                <img src={'https://pm1.narvii.com/6754/54232927f53aa2b664d36dfd7348b5edadc6f10c_00.jpg'} alt=""/>
            </div>
            <div className={s.item}>
                ava + dicription
            </div>
            <MyPosts/>
        </div>
    )
}


