import React, { Component } from 'react';
import { connect } from "react-redux";

class Friend extends Component {

  render() {
    return (
      <div>
        <h1>{this.props.clickedFriend.name}</h1>
        <h4>{this.props.clickedFriend.age}</h4>
        <h4>{this.props.clickedFriend.email}</h4>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  clickedFriend: state.clickedFriend
});

export default connect( mapStateToProps, { } )(Friend);
