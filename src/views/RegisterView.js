import { Component } from 'react';
import { connect } from 'react-redux';
import operations from '../redux/auth/auth-operations';

// const { register } = operations;
// console.log(register);
// console.log(typeof register);

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
    // console.log(this.state);
    // console.log(typeof this.props.onRegister);
    this.props.onSubmit(this.state);
    this.setState({ name: '', email: '', password: '' });
  };
  render() {
    const { name, email, password } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit} autoComplete="off">
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
          <button type="submit">Join</button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = {
  onSubmit: operations.register,
};

// const mapDispatchToProps = dispatch => ({
//   onRegister: data => dispatch(operations.register(data)),
// });

export default connect(null, mapDispatchToProps)(RegisterView);
