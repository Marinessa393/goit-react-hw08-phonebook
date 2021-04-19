import { connect } from 'react-redux';
import selectors from '../redux/auth/auth-selectors';
import { AuthNav } from './AuthNav';
import UserMenu from './UserMenu';

function AppBar({ isAuth }) {
  return (
    <>
      <header>{isAuth ? <UserMenu /> : <AuthNav />}</header>
    </>
  );
}

const mapStateToProps = state => ({
  isAuth: selectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
