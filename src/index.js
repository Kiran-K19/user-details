import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react'
import configureStore from './store'

const { persistor, store } = configureStore();

const main= (<Provider store={store}>
<PersistGate persistor={persistor}>
<App/>
</PersistGate>
</Provider>);

ReactDOM.render(main, document.getElementById('root'));
registerServiceWorker();
