import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchContacts, deleteContact } from '../redux/contacts/operations';
import PropTypes from 'prop-types';
import { getFilteredContacts, getLoading } from '../redux/contacts/selectors';

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
          <ul className="ContactList">
            {items.map(({ id, name, number }) => (
              <li key={id}>
                <p>
                  {name}: {number}
                </p>
                <button
                  type="button"
                  className="ContactList__btn"
                  onClick={() => onDelete(id)}
                >
                  Delete
                </button>
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
