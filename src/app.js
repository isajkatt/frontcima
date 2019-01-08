"use strict";

import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux'

import { applyMiddleware, createStore } from "redux";

import reducers from './reducers/index';

import logger from 'redux-logger';

import MoviesList from './components/pages/moviesList';

// Create Store

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
  applyMiddleware(logger)
));

render(
  <Provider store={store}>
    <MoviesList />
  </Provider>, document.getElementById('app')
);