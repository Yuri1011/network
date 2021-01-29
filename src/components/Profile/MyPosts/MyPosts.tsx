import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

type PostsType = {
    message: string
    like: number
}
type PropsMyPosts = {
    posts: Array<PostsType>
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

export const MyPosts = (props: PropsMyPosts) => {

    let postsUsers = props.posts.map(postUser => <Post message={postUser.message} like={postUser.like}/>);
    let newPostElement = React.createRef<HTMLTextAreaElement>();
    let addPost = () => newPostElement.current ? props.addPost() : {};
    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            props.updateNewPostText(text);
        }
    }

    return (
        <div className={s.postsBlock}>
            <div>
                <h4>My posts</h4>
            </div>
            <div>
                <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsUsers}
            </div>
        </div>
    );
}


