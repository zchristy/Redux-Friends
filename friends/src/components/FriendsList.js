import React, { Component } from 'react';
import { connect } from "react-redux";
import Loader from 'react-loader-spinner';
import { Link } from 'react-router-dom';

import { getFriends } from '../actions';


class FriendsList extends Component {

  componentDidMount() {
    this.props.getFriends()
  }

  render() {
    console.log(this.props)
    if(this.props.fetchingFriends) {
      return <Loader type="Rings" color="#00BFFF" height="90" width="60" />
    } else {
      return (
        <div>
          <div>
            {this.props.friendsList.map(friend => {
              return (
                <div key={friend.id}>
                  <Link to={`/friend/${friend.id}`} ><h1>{friend.name}</h1></Link>
                  <h4>Age: {friend.age}</h4>
                  <h4>{friend.email}</h4>
                </div>
              )
              })}
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  friendsList: state.fetchFriendsReducer.friendsList,
  fetchingFriends: state.fetchFriendsReducer.fetchingFriends,
  error: state.fetchFriendsReducer.error
});

export default connect( mapStateToProps, { getFriends } )(FriendsList);
