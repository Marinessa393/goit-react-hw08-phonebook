import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import authActions from './auth-actions';

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [authActions.registerSuccess]: (_, { payload }) => payload.user,
  [authActions.logInSuccess]: (_, { payload }) => payload.user,
});

const token = createReducer(null, {
  [authActions.registerSuccess]: (_, { payload }) => payload.token,
  [authActions.logInSuccess]: (_, { payload }) => payload.token,
});

const error = createReducer(null, {
  [authActions.registerError]: (_, { payload }) => payload,
  [authActions.logInError]: (_, { payload }) => payload,
});

export default combineReducers({
  user,
  token,
  error,
});
