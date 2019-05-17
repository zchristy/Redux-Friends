import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import { getClickedFriend, deleteFriend } from '../actions'

class Friend extends Component {

  goBack = () => {
    this.props.history.goBack()
  }

  deleteHandler = e => {
    e.preventDefault();

    this.props.deleteFriend(this.props.clickedFriend.id)
    .then(() => {
      this.props.history.push('/')
    })
  }

  componentDidMount() {
    this.props.getClickedFriend(this.props.match.params.id)
  }

  render() {
    return (
      <div>
        <h1>{this.props.clickedFriend.name}</h1>
        <h4>{this.props.clickedFriend.age}</h4>
        <h4>{this.props.clickedFriend.email}</h4>
        <Link to='/update-friend' ><button>Update</button></Link>
        <button onClick={this.deleteHandler}>Delete</button>
        <h4 onClick={this.goBack}>Go Back</h4>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  clickedFriend: { ...state.fetchClickedFriendReducer.clickedFriend }
});

export default connect( mapStateToProps, { getClickedFriend, deleteFriend } )(Friend);
