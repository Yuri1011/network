import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsType, StoreType} from "../../redux/state";

type PropsProfileType = {
    dispatch: (action: ActionsType) => void
    store: StoreType
}

export const Profile = (props: PropsProfileType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts store={props.store}
                     dispatch={props.dispatch}
            />
        </div>
    )
}


