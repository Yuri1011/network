import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

type PostsType = {
    id:number
    message:string
    like:number
}
type Posts = {
    posts:Array<PostsType>
}
type PropsProfileType = {
    profilePage: Posts
    addPost:()=>void
    newPostText:string
    updateNewPostText:(newText:string)=>void
}

export const Profile = (props: PropsProfileType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     addPost={props.addPost}
                     newPostText={props.newPostText}
                     updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}


