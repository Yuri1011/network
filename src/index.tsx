import React from 'react';
import './index.css'
import ReactDOM from 'react-dom';
import App from './App';
import {StateType, store} from "./redux/state";
import {BrowserRouter} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

let renderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state}
                     dispatch={store.dispatch.bind(store)}
                     store={store}
                />
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

renderEntireTree(store.getState());
store.subscribe(renderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
