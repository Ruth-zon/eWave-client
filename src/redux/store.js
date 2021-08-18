import { createStore, combineReducers, applyMiddleware } from 'redux';
import { get10Movies, addMovieToServer } from './middlewares/crud';
import moviesReducer from './reducers/movies';
import constsReducer from './reducers/consts';

const reducer = combineReducers({ moviesReducer , constsReducer });

const store = createStore(reducer, applyMiddleware(get10Movies, addMovieToServer));
window.store = store

export default store;