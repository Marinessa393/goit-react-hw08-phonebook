import { Avatar, Button, TextField } from '@material-ui/core';
import { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import operations from '../redux/auth/auth-operations';
import LockIcon from '@material-ui/icons/Lock';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSumbit = e => {
    e.preventDefault();
    this.props.onLogin(this.state);
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;
    return (
      <>
        <form onSubmit={this.handleSumbit} className="login_form" noValidate>
          <Avatar className="formAvatar">
            <LockIcon color="action" />
          </Avatar>
          <TextField
            id="email"
            name="email"
            value={email}
            type="email"
            label="Email Address"
            margin="normal"
            required
            fullWidth
            autoComplete="email"
            autoFocus
            onChange={this.handleChange}
            color="secondary"
          />
          <TextField
            id="password-log"
            name="password"
            value={password}
            type="password"
            label="Password"
            margin="normal"
            required
            fullWidth
            onChange={this.handleChange}
            color="secondary"
          />
          <Button
            variant="contained"
            type="submit"
            className="btn"
            color="secondary"
            fullWidth
          >
            Login
          </Button>

          <NavLink
            to="/register"
            exact
            className="authRouterLink"
            activeClassName="authRouterLink_active"
          >
            Don't have an account? Sign Up
          </NavLink>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = {
  onLogin: operations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
