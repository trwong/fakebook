import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

// imports for window testing
import { logout } from './actions/session';

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

    const store = configureStore(preloadedState);
    ReactDOM.render(<Root store={store}/>, root);


    // window testing
   window.logout = logout;
});