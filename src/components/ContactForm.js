import { Component } from 'react';
import { connect } from 'react-redux';
import { addContact } from '../redux/contacts/operations';
import PropTypes from 'prop-types';
import { getAllContacts } from '../redux/contacts/selectors';

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
      <form className="form" onSubmit={this.handleSubmit}>
        <label className="form__label">
          <h3 className="form__title">Name</h3>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label>
          <h3 className="form__title">Phone</h3>
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            required
          />
        </label>
        <button type="submit" className="form__btn">
          Add contact
        </button>
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
