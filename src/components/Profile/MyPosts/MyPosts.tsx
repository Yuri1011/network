import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {addPostActionCreated, updateNewPostTextActionCreated} from "../../../redux/profilePageReducer";
import {ActionsType} from "../../../redux/state";

type PostsType = {
    id: number
    message: string
    like: number
}
type PropsMyPosts = {
    posts: Array<PostsType>
    dispatch: (action: ActionsType) => void
    newPostText: string
}

export const MyPosts = (props: PropsMyPosts) => {

    let postsUsers = props.posts.map(postUser => <Post message={postUser.message} like={postUser.like}/>);
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => props.dispatch(addPostActionCreated(props.newPostText));
    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            props.dispatch(updateNewPostTextActionCreated(text));
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


