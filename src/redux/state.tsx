import React from "react";

type PostsType = {
    message: string
    like: number
}
type ProfilePageType = {
    posts: PostsType[]
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
            {message: 'Hello bro!', like: 10},
            {message: 'Please like my avatar!!', like: 25}
        ]
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

export default state;