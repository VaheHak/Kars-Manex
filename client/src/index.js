import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import reducers from "./store/reducers";
import watchers from "./store/sagas";
import createSagaMiddleware from 'redux-saga';
import './assets/CSS/style.css';
import './assets/CSS/header.css';
import './assets/CSS/footer.css';
import './assets/CSS/components/product.css';

const saga = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(saga))
);

window.store = store;

saga.run(watchers);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
