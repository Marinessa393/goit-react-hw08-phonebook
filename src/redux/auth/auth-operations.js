import axios from 'axios';
import authActions from './auth-actions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {};

/*
 * POST @ /users/signup
 * body: {name, email, password}

 */

const register = user => async dispatch => {
  dispatch(authActions.registerRequest());

  try {
    const response = await axios.post('/users/signup', user);

    dispatch(authActions.registerSuccess(response.data));
  } catch (error) {
    dispatch(authActions.registerError(error.message));
  }
};

/*
 * POST @ /users/login
 * body: {email, password}
 */

const logIn = user => async dispatch => {
  dispatch(authActions.logInRequest());

  try {
    const response = await axios.post('/users/login', user);

    dispatch(authActions.logInSuccess(response.data));
  } catch (error) {
    dispatch(authActions.logOutError(error.message));
  }
};

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

// eslint-disable-next-line import/no-anonymous-default-export
const operations = { register, logIn, logOut, getCurrentUser };
export default operations;
