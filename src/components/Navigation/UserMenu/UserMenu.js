import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import operations from '../../../redux/auth/auth-operations';
import selectors from '../../../redux/auth/auth-selectors';
import s from './UserMenu.module.css';

function UserMenu({ name, onLogout }) {
  return (
    <>
      <div className={s.userMenu}>
        <p className={s.greeting}>Hello, {name}</p>
        <Button
          type="button"
          onClick={onLogout}
          color="primary"
          variant="contained"
        >
          Logout
        </Button>
      </div>
    </>
  );
}
const mapStateToProps = state => ({
  name: selectors.getUserName(state),
});

const mapDispatchToProps = {
  onLogout: operations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
