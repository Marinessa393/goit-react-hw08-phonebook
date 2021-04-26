import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchContacts, deleteContact } from '../../redux/contacts/operations';
import PropTypes from 'prop-types';
import {
  getFilteredContacts,
  getLoading,
} from '../../redux/contacts/selectors';
import s from './ContactList.module.css';
import { Button } from '@material-ui/core';
import { Delete } from '@material-ui/icons';

class ContactList extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { items, isLoading, onDelete } = this.props;
    return (
      <>
        {isLoading && <p className="loading">Loading...</p>}

        {items.length > 0 && (
          <ul className={s.ContactList}>
            {items.map(({ id, name, number }) => (
              <li key={id}>
                <p className={s.contact_name}>{name}</p>
                <p>{number}</p>
                <Button
                  type="button"
                  className="ContactList__btn"
                  onClick={() => onDelete(id)}
                  color="primary"
                  variant="contained"
                >
                  <Delete />
                </Button>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  items: getFilteredContacts(state),
  isLoading: getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(deleteContact(id)),
  fetchContacts: () => dispatch(fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

// proptypes
ContactList.propTypes = {
  items: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
