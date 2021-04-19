import { Component, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
// import { ContactsView } from '../views/ContactsView';
import { MainPageView } from '../views/MainPageView';
// import RegisterView from '../views/RegisterView';
// import LoginView from '../views/LoginView';
import AppBar from '../components/AppBar';
import operations from '../redux/auth/auth-operations';
import { connect } from 'react-redux';
import PrivateRoute from '../components/PrivateRoute';
import PublicRoute from '../components/PublicRoute';
// import './App.css';

// const MainPageView = lazy(() => import('../views/MainPageView'));
const ContactsView = lazy(() => import('../views/ContactsView'));
const RegisterView = lazy(() => import('../views/RegisterView'));
const LoginView = lazy(() => import('../views/LoginView'));
class App extends Component {
  componentDidMount() {
    this.props.onRefreshUser();
  }

  render() {
    return (
      <>
        <AppBar />
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route exact path="/" component={MainPageView} />
            <PublicRoute
              exact
              path="/register"
              redirectTo="/"
              restricted
              component={RegisterView}
            />
            <PublicRoute
              exact
              path="/login"
              redirectTo="/contacts"
              restricted
              component={LoginView}
            />
            <PrivateRoute
              exact
              path="/contacts"
              component={ContactsView}
              redirectTo="/login"
            />
          </Switch>
        </Suspense>
      </>
    );
  }
}

const mapDispatchToProps = {
  onRefreshUser: operations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
