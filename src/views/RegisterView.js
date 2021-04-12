import { Component } from 'react';
import { connect } from 'react-redux';
import authOperations from '../redux/auth/auth-operations.js';

export class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSumbit = e => {
    e.preventDefault();
    this.props.onRegister(this.state);
    this.setState({ name: '', email: '', password: '' });
  };
  render() {
    const { name, email, password } = this.state;
    return (
      <>
        <form action="">
          <label>
            <p>E-mail:</p>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              autoComplete="off"
            />
          </label>
          <label>
            <p>Name:</p>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <p>Password:</p>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Join</button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
