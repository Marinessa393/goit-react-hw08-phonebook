import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import authActions from './auth-actions';

const initialuserState = { name: null, email: null };

const user = createReducer(initialuserState, {});

const token = createReducer(null, {});

const error = createReducer(null, {});

export default combineReducers({
  user,
  error,
  token,
});
