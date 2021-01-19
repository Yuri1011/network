import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";


type PostsType = {
    message: string
    like: number
}
type PropsProfileType = {
    posts: Array<PostsType>
}

export const Profile = (props: PropsProfileType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    )
}


