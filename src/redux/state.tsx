import React from "react";
import {renderEntireTree} from "../render";

type PostsType = {
    id: number
    message: string
    like: number
}
type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}
type DialogsType = {
    name: string
    id: number
}
type MessagesType = {
    message: string
}
type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}
type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

let state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hello bro!', like: 10},
        ],
        newPostText: '',
    },
    dialogsPage: {
        dialogs: [
            {name: 'Marina', id: 1,},
            {name: 'Sergey', id: 2,},
            {name: 'Lyubov', id: 3},
            {name: 'Brus', id: 4}
        ],
        messages: [
            {message: 'Hello!!'},
            {message: 'Hav are you?'},
            {message: 'Good by!'},
            {message: 'i`am Lox))'}
        ]
    }
}

export const addPost = () => {
    const newPost = {id: 2, message: state.profilePage.newPostText, like: 0}
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree(state);
}
export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
}

export default state;