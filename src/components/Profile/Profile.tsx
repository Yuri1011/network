import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsType} from "../../redux/state";

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
    dispatch:(action:ActionsType)=>void
    newPostText:string
}

export const Profile = (props: PropsProfileType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     dispatch={props.dispatch}
                     newPostText={props.newPostText}
            />
        </div>
    )
}


