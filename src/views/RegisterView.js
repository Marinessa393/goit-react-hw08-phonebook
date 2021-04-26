import {
  Avatar,
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import LockIcon from '@material-ui/icons/Lock';
import { Component } from 'react';
import { connect } from 'react-redux';
import operations from '../redux/auth/auth-operations';

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    showPassword: false,
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: '', email: '', password: '' });
  };

  handleClickShowPassword = () => {
    this.setState(({ showPassword }) => ({ showPassword: !showPassword }));
  };

  handleMouseDownPassword = e => {
    e.preventDefault();
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit} className="login_form">
          <Avatar className="formAvatar">
            <LockIcon color="action" />
          </Avatar>

          <TextField
            id="name-reg"
            name="name"
            value={name}
            type="name"
            label="Name"
            margin="normal"
            required
            fullWidth
            autoComplete="name"
            autoFocus
            onChange={this.handleChange}
            color="primary"
          />
          <TextField
            id="email-reg"
            name="email"
            value={email}
            type="email"
            label="Email Address"
            margin="normal"
            required
            fullWidth
            autoComplete="email"
            onChange={this.handleChange}
            color="primary"
          />
          <TextField
            id="password-reg"
            name="password"
            value={password}
            type={this.state.showPassword ? 'text' : 'password'}
            label="Password"
            margin="normal"
            required
            fullWidth
            onChange={this.handleChange}
            color="primary"
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
            color="primary"
            fullWidth
          >
            Join
          </Button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = {
  onSubmit: operations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
