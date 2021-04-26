import {
  Avatar,
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from '@material-ui/core';
import { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import operations from '../redux/auth/auth-operations';
import LockIcon from '@material-ui/icons/Lock';
import { Visibility, VisibilityOff } from '@material-ui/icons';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
    showPassword: false,
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSumbit = e => {
    e.preventDefault();
    this.props.onLogin(this.state);
    this.setState({ name: '', email: '', password: '' });
  };

  handleClickShowPassword = () => {
    this.setState(({ showPassword }) => ({ showPassword: !showPassword }));
  };

  handleMouseDownPassword = e => {
    e.preventDefault();
  };

  render() {
    const { email, password } = this.state;
    return (
      <>
        <form onSubmit={this.handleSumbit} className="login_form">
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
            type={this.state.showPassword ? 'text' : 'password'}
            label="Password"
            margin="normal"
            required
            fullWidth
            onChange={this.handleChange}
            color="secondary"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={this.handleClickShowPassword}
                    onMouseDown={this.handleMouseDownPassword}
                  >
                    {this.state.showPassword ? (
                      <Visibility />
                    ) : (
                      <VisibilityOff />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
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
