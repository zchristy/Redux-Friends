import React, { Component } from 'react';
import { connect } from "react-redux";
import Loader from 'react-loader-spinner';

import { getFriends } from '../actions';

class FriendsList extends Component {

  componentDidMount() {
    this.props.getFriends()
  }

  render() {
    if(this.props.fetchingFriends) {
      return <Loader type="Rings" color="#00BFFF" height="90" width="60" />
    }

    return (
      <div>
        <div>{this.props.friendsList }</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  friendsList: state.friendsList,
  fetchingFriends: state.fetchingFriends,
  error: state.error
});

export default connect( mapStateToProps, { getFriends } )(FriendsList);
