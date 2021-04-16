import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import selectors from '../redux/auth/auth-selectors';

function UserMenu({ name, avatar, onLogout }) {
  return (
    <>
      <div>
        <NavLink to="/">Main</NavLink>
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
  // onLogout: selectors.onLogout(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
