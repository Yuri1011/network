import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            My posts
            <div>
                <textarea/>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message= 'Hello bro' like ={5}/>
                <Post message='Please like my avatar' like ={25}/>
            </div>

        </div>
    );
}


