import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';


// imports for window testing
import {
    createNewUser,
    login,
    logout
} from './actions/session';
import { fetchPosts } from "./actions/post";
import { fetchUser } from "./actions/user";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    
    let preloadedState = undefined;
    if (window.currentUser) {
        preloadedState = {
            session: {
                currentUser: window.currentUser
            }
        };
    }
    // TODO delete window current user after testing

    const store = configureStore(preloadedState);
    ReactDOM.render(<Root store={store}/>, root);


    // window testing
    // TODO delete after testing
    window.getState = store.getState;
    window.createNewUser = createNewUser;
    window.login = login;
    window.logout = logout;
    window.dispatch = store.dispatch;
    window.fetchPosts = fetchPosts;
    window.fetchUser = fetchUser;
});