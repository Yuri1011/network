import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {

    let posts = [
        {message: 'Hello bro!', like: 10},
        {message: 'Please like my avatar!!', like: 25}
    ]
    let postsUsers = posts.map(postUser => <Post message={postUser.message} like={postUser.like}/>);

    return (
        <div className={s.postsBlock}>
            <div>
                <h4>My posts</h4>
            </div>
            <div>
                <textarea/>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                {postsUsers}
            </div>
        </div>
    );
}


