import { Component } from 'react';
import { connect } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import PropTypes from 'prop-types';
import { getAllContacts } from '../../redux/contacts/selectors';
import { Button, TextField } from '@material-ui/core';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const { onSubmit, items } = this.props;

    const isName = items.find(
      item => item.name.toLowerCase() === name.toLocaleLowerCase(),
    );
    const isNumber = items.find(item => item.number === number);

    if (isName || isNumber) {
      alert('contact is already in list');
      return;
    }
    const newContact = { name, number };
    onSubmit(newContact);
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <form className={s.form_edit} onSubmit={this.handleSubmit}>
        <h2>Create New Contact</h2>
        <TextField
          variant="outlined"
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          required
          label="name"
          size="small"
          margin="normal"
          placeholder="James Oliver"
          inputProps={{
            pattern:
              "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
            title:
              'Имя может состоять только из букв, апострофа, тире и пробелов',
          }}
        />
        <TextField
          variant="outlined"
          type="tel"
          name="number"
          value={this.state.number}
          onChange={this.handleChange}
          label="number"
          required
          size="small"
          margin="normal"
          placeholder="0001234567"
          inputProps={{
            pattern: '[0-9]{10,12}',
            title:
              'Номер телефона должен состоять из 10-12 цифр и может содержать только цифры',
          }}
        />
        <Button
          variant="outlined"
          color="primary"
          // fullWidth
          type="submit"
          className={s.form_edit_btn}
        >
          Add contact
        </Button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  items: getAllContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: contact => dispatch(addContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

// proptypes
ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onSubmit: PropTypes.func.isRequired,
};
