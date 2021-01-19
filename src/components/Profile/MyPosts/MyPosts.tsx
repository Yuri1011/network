import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

type PostsType = {
    message: string
    like: number
}
type PropsMyPosts = {
    posts: Array<PostsType>
}

export const MyPosts = (props: PropsMyPosts) => {

    let postsUsers = props.posts.map(postUser => <Post message={postUser.message} like={postUser.like}/>);
    let newPostElement : any = React.createRef();
    let addPost = () => {
        let  text = newPostElement.current.value;
        alert(text);
    }

    return (
        <div className={s.postsBlock}>
            <div>
                <h4>My posts</h4>
            </div>
            <div>
                <textarea ref={newPostElement}/>
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


