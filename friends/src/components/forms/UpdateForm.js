import React, { Component } from 'react';
import { connect } from "react-redux";

import { updateFriend } from '../../actions';
import Loader from 'react-loader-spinner';

class UpdateForm extends Component {
  state = {
    friend: {
      id: this.props.clickedFriend.id,
      name: this.props.clickedFriend.name,
      age: this.props.clickedFriend.age,
      email: this.props.clickedFriend.email
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

    this.props.updateFriend(this.state.friend)
    .then(() => {
      this.props.history.push(`/friend/${this.props.clickedFriend.id}`)
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input type='text' name='name' value={this.state.friend.name} onChange={this.changeHandler} placeholder='name' required/>
          <input type='text' name='age' value={this.state.friend.age} onChange={this.changeHandler} placeholder='age' required/>
          <input type='email' name='email' value={this.state.friend.email} onChange={this.changeHandler} placeholder='email' required/>
          <button type='submit'>{this.props.updatingFriend ? <Loader type="ThreeDots" color="black" height={5} width={5} /> : 'Submit'}</button>
        </form>
        {this.props.error && <p>{this.props.error}</p>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  clickedFriend: { ...state.fetchClickedFriendReducer.clickedFriend },
  updatingFriend: state.updateFriendReducer.updatingFriend
});

export default connect( mapStateToProps , { updateFriend } )(UpdateForm);
