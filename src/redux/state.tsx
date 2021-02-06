import React from "react";
import profilePageReducer from "./profilePageReducer";
import dialogPageReducer from "./dialogPageReducer";

type Posts = {
    id: number
    message: string
    like: number
}
export type ProfilePageType = {
    posts: Array<Posts>
    newPostText: string

}
type Dialogs = {
    name: string
    id: number
}
type Messages = {
    message: string
    id: number
}
export type DialogsPageType = {
    dialogs: Array<Dialogs>
    messages: Array<Messages>
    newMessageBody: string
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
export type AddPostActionType = {
    type: 'ADD-POST'
    newPostText: string
}
export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
export type UpdateNewMessageActionBodyType = {
    type: 'UPDATE-NEW-MESSAGE-BODY'
    body: string
}
export type SendMessageActionType = {
    type: 'SEND_MESSAGE'
}
export type ActionsType =
    AddPostActionType
    | UpdateNewPostTextActionType
    | UpdateNewMessageActionBodyType
    | SendMessageActionType
export type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    getState: () => StateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsType) => void
}

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello bro!', like: 10},
            ],
            newPostText: '',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Marina'},
                {id: 2, name: 'Sergey'},
                {id: 3, name: 'Lyubov'},
                {id: 4, name: 'Brus'}
            ],
            messages: [
                {id: 1, message: 'Hello!!'},
                {id: 2, message: 'Hav are you?'},
                {id: 3, message: 'Good by!'},
                {id: 4, message: 'i`am Lox))'}
            ],
            newMessageBody: ''
        }
    },
    _callSubscriber() {
        console.log('HELLO');
    },
    getState() {
        return this._state;
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer;
    },
    dispatch(action: ActionsType) {
        this._state.profilePage = profilePageReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogPageReducer(this._state.dialogsPage, action);
        this._callSubscriber();
    }
}

export default store;