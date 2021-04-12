import axios from 'axios';
import {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './actions';

axios.defaults.baseURL = 'http://localhost:4040';

export const fetchContacts = () => dispatch => {
  dispatch(fetchContactRequest());

  axios
    .get('phonebook')
    .then(({ data }) => dispatch(fetchContactSuccess(data)))
    .catch(error => dispatch(fetchContactError(error)));
};

export const addContact = ({ name, number }) => dispatch => {
  const newContact = {
    name,
    number,
  };

  dispatch(addContactRequest());

  axios
    .post('/phonebook', newContact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
};

export const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/phonebook/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactError(error)));
};
