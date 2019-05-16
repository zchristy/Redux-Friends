import React, { Component } from 'react';
import { connect } from "react-redux";
import Loader from 'react-loader-spinner';

import { login } from '../../actions';

class Login extends Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  }

  changeHandler = e => {
    e.preventDefault();
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    }, console.log(this.state.credentials))
  }

  submitHandler = e => {
    e.preventDefault();

    this.props.login(this.state.credentials)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input type='text' name='username' value={this.state.credentials.username} onChange={this.changeHandler} placeholder='username' />
          <input type='password' name='password' value={this.state.credentials.password} onChange={this.changeHandler} placeholder='password' />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.error,
  loggingIn: state.loggingIn,
  isLoggedIn: state.isLoggedIn
});

export default connect( mapStateToProps, { login } )(Login);
