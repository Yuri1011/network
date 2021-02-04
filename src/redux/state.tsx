import React from "react";

type Posts = {
    id: number
    message: string
    like: number
}
type ProfilePageType = {
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
type DialogsPageType = {
    dialogs: Array<Dialogs>
    messages: Array<Messages>
    newMessageBody: string
}
type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
type AddPostActionType = {
    type: 'ADD-POST'
    newPostText: string
}
type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
type UpdateNewMessageActionBodyType = {
    type: 'UPDATE-NEW-MESSAGE-BODY'
    body: string
}
type SendMessageActionType = {
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

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

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
        if (action.type === ADD_POST) {
            const newPost = {id: 2, message: action.newPostText, like: 0}
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber();
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber();
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber();
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id: 5, message: body});
            this._callSubscriber();
        }
    }

}

export const addPostActionCreated = (newPostText: string): AddPostActionType =>
    ({
        type: ADD_POST,
        newPostText: newPostText
    })
export const updateNewPostTextActionCreated = (text: string): UpdateNewPostTextActionType =>
    ({
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    })
export const updateNewMessageBodyCreated = (text:string): UpdateNewMessageActionBodyType =>
    ({
        type: UPDATE_NEW_MESSAGE_BODY,
        body: text
    })
export const sendMessageCreated = (): SendMessageActionType =>
    ({
        type: SEND_MESSAGE
    })

export default store;