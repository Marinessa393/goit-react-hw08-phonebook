import { Component } from 'react';
import { connect } from 'react-redux';
import operations from '../redux/auth/auth-operations';

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
        <form onSubmit={this.handleSumbit}>
          <label>
            <p>E-mail:</p>
            <input
              type="email"
              name="email"
              value={email}
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
          <button type="submit">Login</button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = {
  onLogin: operations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
