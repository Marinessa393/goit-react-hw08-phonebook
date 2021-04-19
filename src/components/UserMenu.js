import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import operations from '../redux/auth/auth-operations';
import selectors from '../redux/auth/auth-selectors';

function UserMenu({ name, avatar, onLogout }) {
  return (
    <>
      <div>
        <NavLink to="/">Main</NavLink>
        <button>
          <NavLink to="/contacts">Contacts</NavLink>
        </button>
        <img src={avatar} alt="" />
        <p>Hello, {name}</p>
        <button type="button" onClick={onLogout}>
          Logout
        </button>
      </div>
    </>
  );
}
const mapStateToProps = state => ({
  name: selectors.getUserName(state),
  // avatar:
});

const mapDispatchToProps = {
  onLogout: operations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
