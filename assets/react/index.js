import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import app from './reducers';
import App from './components/App';

ReactDOM.render(
    <App store={createStore(app)} />,
    document.getElementById('root')
);
