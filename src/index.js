import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {Provider} from 'react-redux';
import store from './store/store';
import './styles/common.scss';
import './assets/css/styles.scss';

ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <App/>
      </React.StrictMode>
    </Provider>,
    document.getElementById('root'),
);
