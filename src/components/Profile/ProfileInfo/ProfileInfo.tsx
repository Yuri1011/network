import React from "react";
import s from './ProfileInfo.module.css'


export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src={'https://pm1.narvii.com/6754/54232927f53aa2b664d36dfd7348b5edadc6f10c_00.jpg'} alt=""/>
            </div>
            <div className={s.discription}>
                ava + discription
            </div>
        </div>
    )
}


