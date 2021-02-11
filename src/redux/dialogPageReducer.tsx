import {ActionsType, DialogsPageType, UpdateNewMessageActionBodyType} from "./state";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';


export const dialogPageReducer = (state: DialogsPageType, action: ActionsType) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            break;
        case SEND_MESSAGE:
            let newMessage = state.newMessageBody;
            state.messages.push({id: 5, message: newMessage});
            state.newMessageBody = '';
            break;
    }
    return state;
}
export const updateNewMessageBodyCreated = (text: string): UpdateNewMessageActionBodyType =>
    ({
        type: UPDATE_NEW_MESSAGE_BODY,
        body: text
    })
export const sendMessageCreated = (): ActionsType =>
    ({
        type: SEND_MESSAGE
    })
