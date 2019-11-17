import { createStore, applyMiddleware } from 'redux'
import { AppReducer, initialState } from './lib/reducer/AppReducer';
import thunkMiddleware from 'redux-thunk';

export const initializeStore = (preloadedState = initialState) => {
  return createStore(
    AppReducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware
    )
  )
}