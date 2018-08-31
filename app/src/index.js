import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Hello from './Components/Hello/Hello';
import registerServiceWorker from './registerServiceWorker';

//Store
import {createStore} from 'redux';
import myReducer from './ReduxWorkingManagement/reducers/index';
import {Provider} from 'react-redux';
const store = createStore(myReducer);

ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>, 
        document.getElementById('root')
);
registerServiceWorker();
