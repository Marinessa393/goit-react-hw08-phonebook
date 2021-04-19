import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ContactsView } from '../views/ContactsView';
import { MainPageView } from '../views/MainPageView';
import RegisterView from '../views/RegisterView';
import LoginView from '../views/LoginView';
import AppBar from '../components/AppBar';
import operations from '../redux/auth/auth-operations';
import { connect } from 'react-redux';
import PrivateRoute from '../components/PrivateRoute';

// import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.onRefreshUser();
  }

  render() {
    return (
      <>
        <AppBar />
        <Switch>
          <Route exact path="/" component={MainPageView} />
          <Route exact path="/register" component={RegisterView} />
          <Route exact path="/login" component={LoginView} />
          <PrivateRoute
            exact
            path="/contacts"
            component={ContactsView}
            redirectTo="/login"
          />
        </Switch>
      </>
    );
  }
}

const mapDispatchToProps = {
  onRefreshUser: operations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
