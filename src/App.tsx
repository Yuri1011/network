import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from "./components/Settings/Settings";

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
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
type PropsAppType = {
    state: StateType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

const App = (props: PropsAppType) => {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path={'/profile'}
                       render={() => <Profile profilePage={props.state.profilePage}
                                              addPost={props.addPost}
                                              newPostText={props.state.profilePage.newPostText}
                                              updateNewPostText={props.updateNewPostText}
                       />}/>
                <Route path={'/dialogs'} render={() => <Dialogs data={props.state.dialogsPage}/>}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
            </div>
        </div>
    );
}
export default App;
