import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost, updateNewPostText} from "./redux/state";
import {StateType} from "./App";

export let renderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

