import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeFilter } from '../../../redux/contacts/actions';
import { getFilter } from '../../../redux/contacts/selectors';
import s from './Filter.module.css';

function Filter({ value, onChange }) {
  return (
    <div className={s.Filter}>
      <TextField
        label="find by name.."
        variant="filled"
        multiline
        color="primary"
        fullWidth
        size="small"
        type="text"
        value={value}
        onChange={onChange}
      ></TextField>
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
