import { ThemeProvider } from '@material-ui/styles';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import theme from '../../../palette';
import selectors from '../../../redux/auth/auth-selectors';
import { AuthNav } from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import s from './AppBar.module.css';

function AppBar({ isAuth }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <header className={s.header}>
          <div>
            <NavLink
              to="/"
              exact
              className={s.navlink_main}
              activeClassName={s.activenavlink}
            >
              Main
            </NavLink>
            {isAuth && (
              <NavLink
                to="/contacts"
                exact
                className={s.navlink_contacts}
                activeClassName={s.activenavlink}
              >
                Contacts
              </NavLink>
            )}
          </div>
          {isAuth ? <UserMenu /> : <AuthNav />}
        </header>
      </ThemeProvider>
    </>
  );
}

const mapStateToProps = state => ({
  isAuth: selectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
