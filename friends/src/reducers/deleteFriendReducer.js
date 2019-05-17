import {
  DELETE_FRIEND_START,
  DELETE_FRIEND_SUCCESS,
  DELETE_FRIEND_FAILURE
} from '../actions';

const initialState = {
  deletingFriend:false,
  error: null
};

const deleteFriendReducer = (state = initialState, action) => {
  switch(action.type) {
    case DELETE_FRIEND_START:
      return {
        ...state,
        deletingFriend: true,
        error: ''
      }
    case DELETE_FRIEND_SUCCESS:
      return {
        ...state,
        deletingFriend: false,
        error: ''
        }
    case DELETE_FRIEND_FAILURE:
      return {
        ...state,
        deletingFriend: false,
        error: action.payload
        }
    default:
      return state
  }
}

export default deleteFriendReducer;
