import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import App from './components/app/app';
import {Provider} from 'react-redux';
import store from './store/store';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector(`#root`)
);

reportWebVitals();
