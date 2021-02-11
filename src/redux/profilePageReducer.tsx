import {ActionsType, ProfilePageType} from "./state";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const profilePageReducer = (state: ProfilePageType, action: ActionsType) => {

    switch (action.type) {
        case ADD_POST:
            const newPost = {id: 2, message: state.newPostText, like: 0}
            state.posts.push(newPost);
            state.newPostText = '';
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            break;
    }
    return state;
}
export const addPostActionCreated = (): ActionsType =>
    ({
        type: ADD_POST
    })
export const updateNewPostTextActionCreated = (text: string): ActionsType =>
    ({
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    })
