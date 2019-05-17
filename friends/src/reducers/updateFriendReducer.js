import {
  UPDATE_FRIEND_START,
  UPDATE_FRIEND_SUCCESS,
  UPDATE_FRIEND_FAILURE
} from '../actions';

const initialState = {
  updatingFriend: false,
  error: null
};

const updateFriendReducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_FRIEND_START:
      return {
        ...state,
        updatingFriend: true,
        error: ''
      }
    case UPDATE_FRIEND_SUCCESS:
      return {
        ...state,
        updatingFriend: false,
        error: ''
        }
    case UPDATE_FRIEND_FAILURE:
      return {
        ...state,
        updatingFriend: false,
        error: action.payload
        }
    default:
      return state
  }
}

export default updateFriendReducer;
