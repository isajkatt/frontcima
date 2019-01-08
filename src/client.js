"use strict";

import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux'

import { applyMiddleware, createStore } from "redux";

import reducers from './reducers/index';

import logger from 'redux-logger';

import NavBar from './components/pages/navBar';
import MoviesList from './components/pages/moviesList';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import thunk from 'redux-thunk';

// Create Store

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
  applyMiddleware(logger, thunk)
));

const Routes = (  
  <Provider store={store}>
      <BrowserRouter>
        <div>
        <NavBar />
         <Switch>
            <Route exact path="/" component={MoviesList}/>
         </Switch>
        </div>
      </BrowserRouter>
  </Provider>
)

render(
  Routes, document.getElementById('app')
);