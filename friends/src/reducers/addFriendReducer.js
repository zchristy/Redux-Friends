import {
  ADD_FRIEND_START,
  ADD_FRIEND_SUCCESS,
  ADD_FRIEND_FAILURE
} from '../actions';

const initialState = {
  savingFriend: false,
  error: null
};

const addFriendReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_FRIEND_START:
      return {
        ...state,
        savingFriend: true,
        error: ''
      }
    case ADD_FRIEND_SUCCESS:
      return {
        ...state,
        savingFriend: false,
        error: ''
        }
    case ADD_FRIEND_FAILURE:
      return {
        ...state,
        savingFriend: false,
        error: action.payload
        }
    default:
      return state
  }
}

export default addFriendReducer;
