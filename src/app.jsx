import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import HomePage from './pages/HomePage';

configureStore().then(store => {
    const App = () => (
        <Provider store={store}>
            <HomePage />
        </Provider>
    );

    ReactDOM.render(<App />, document.getElementById('content'));
});
