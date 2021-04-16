import axios from 'axios';
import authActions from './auth-actions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

/*
 * POST @ /users/signup
 * body: {name, email, password}

 */

const register = user => async dispatch => {
  dispatch(authActions.registerRequest());

  try {
    const response = await axios.post('/users/signup', user);
    token.set(response.data.token);
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
    token.set(response.data.token);
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

const logOut = () => async dispatch => {
  dispatch(authActions.logOutRequest);
  try {
    await axios.post('/users/logout');
    token.unset();
    dispatch(authActions.logOutSuccess());
  } catch (error) {
    dispatch(authActions.logOutError(error.message));
  }
};

/*
 *  GET @ /users/current
 *  headers:
 *    Authorisation: Bearer token
 */

const getCurrentUser = () => (dispatch, getState) => {};

// eslint-disable-next-line import/no-anonymous-default-export
const operations = { token, register, logIn, logOut, getCurrentUser };
export default operations;
