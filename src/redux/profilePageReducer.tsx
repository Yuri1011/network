import {ActionsType, AddPostActionType, ProfilePageType, UpdateNewPostTextActionType} from "./state";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profilePageReducer = (state: ProfilePageType, action: ActionsType) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {id: 2, message: action.newPostText, like: 0}
            state.posts.push(newPost);
            state.newPostText = '';
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            break;
    }
    return state;
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
export default profilePageReducer;