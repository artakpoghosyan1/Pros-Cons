import * as React from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import combinedReducer from '../data/reducers'
import {ProsConsComponent} from './ProsConsComponent';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combinedReducer,
    composeEnhancers(applyMiddleware(thunk))
);

function App() {
    return (
        <Provider store={store}>
            <ProsConsComponent />
        </Provider>
    );
}

export default App;
