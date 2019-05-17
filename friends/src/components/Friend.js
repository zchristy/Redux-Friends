import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import { getClickedFriend } from '../actions'

class Friend extends Component {

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
        <button>Delete</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  clickedFriend: { ...state.clickedFriend }
});

export default connect( mapStateToProps, { getClickedFriend } )(Friend);
