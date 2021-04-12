import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeFilter } from '../redux/contacts/actions';
import { getFilter } from '../redux/contacts/selectors';

function Filter({ value, onChange }) {
  return (
    <div className="Filter">
      <p className="form__title ">Find Contacts By Name</p>
      <input type="text" value={value} onChange={onChange}></input>
    </div>
  );
}

Filter.defaultProps = {
  value: '',
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
