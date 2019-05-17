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
    if(this.props.fetchingFriends) {
      return <Loader type="Rings" color="#00BFFF" height="90" width="60" />
    } else {
      return (
        <div>
          <div>
            {this.props.friendsList.map(friend => {
              return (
                <ul key={friend.id}>
                  <Link to={`/friend/${friend.id}`} ><li>{friend.name}</li></Link>
                  <li>Age: {friend.age}</li>
                  <li>{friend.email}</li>
                </ul>
              )
              })}
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  friendsList: state.friendsList,
  fetchingFriends: state.fetchingFriends,
  error: state.error
});

export default connect( mapStateToProps, { getFriends } )(FriendsList);
