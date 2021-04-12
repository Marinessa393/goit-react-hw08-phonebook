import axios from 'axios';
import authActions from './auth-actions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {};

/*
 * POST @ /users/signup
 * body: {name, email, password}
 */

const register = credentials => async dispatch => {
  dispatch(authActions.registerRequest());

  try {
    const response = axios.post('/users/signup', credentials);
    dispatch(authActions.registerSuccess(response.data));
  } catch (error) {
    dispatch(authActions.registerError(error));
  }
};

/*
 * POST @ /users/login
 * body: {email, password}
 */

const logIn = credentials => dispatch => {};

/*
 * POST @ /users/logout
 * headers:
 *    Authorisation: Bearer token
 */

const logOut = () => dispatch => {};

/*
 *  GET @ /users/current
 *  headers:
 *    Authorisation: Bearer token
 */

const getCurrentUser = () => (dispatch, getState) => {};

export { register, logIn, logOut, getCurrentUser };
