import {
  Avatar,
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import { Component } from 'react';
import { connect } from 'react-redux';
import operations from '../redux/auth/auth-operations';

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: '', email: '', password: '' });
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
            type="password"
            label="Password"
            margin="normal"
            required
            fullWidth
            onChange={this.handleChange}
            color="primary"
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
