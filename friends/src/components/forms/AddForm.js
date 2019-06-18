import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router'

import { addFriend } from '../../actions';
import Loader from 'react-loader-spinner';

class AddForm extends Component {
  state = {
    friend: {
      name: '',
      age: '',
      email: ''
    }
  }

  changeHandler = e => {
    e.preventDefault()

    this.setState({
      friend: {
        ...this.state.friend,
        [e.target.name]: e.target.value
      }
    })
  }

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state.friend)
    this.props.addFriend(this.state.friend)
    .then(() => {
      this.props.history.push('/')
    })
    this.setState({
      friend: {
        name: '',
        age: '',
        email: ''
      }
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input type='text' name='name' value={this.state.friend.name} onChange={this.changeHandler} placeholder='name' required/>
          <input type='text' name='age' value={this.state.friend.age} onChange={this.changeHandler} placeholder='age' required/>
          <input type='email' name='email' value={this.state.friend.email} onChange={this.changeHandler} placeholder='email' required/>
          <button type='submit'>{this.props.savingFriend ? <Loader type="ThreeDots" color="black" height={5} width={5} /> : 'Submit'}</button>
        </form>
        {this.props.error && <p>{this.props.error}</p>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  savingFriend: state.addFriendReducer.savingFriend,
  savedFriend: state.addFriendReducer.savedFriend,
  error: state.addFriendReducer.error
});

export default connect( null, { addFriend } )(AddForm);
