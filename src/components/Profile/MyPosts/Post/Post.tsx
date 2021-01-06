import React from "react";
import s from './Post.module.css'


type PropsPostType = {
    message: string
    like: number
}

export const Post = (props: PropsPostType) => {
    return (
        <div>
            <div className={s.item}>
                <img
                    src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPIr14HmGjMdm0xA17mZ4-g_UrxeyU9T0ANw&usqp=CAU'}
                    alt="avatar owner"/>
                {props.message}
                <div>
                    <span>
                       like {props.like}
                    </span>
                </div>
            </div>
        </div>
    );
}


