import {
  FETCH_FRIENDS_START,
  FETCH_FRIENDS_SUCCESS,
  FETCH_FRIENDS_FAILURE,
} from '../actions';

const initialState = {
  friendsList: [],
  fetchingFriends: false,
  error: null
};

const fetchFriendsReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_FRIENDS_START:
      return {
        ...state,
        fetchingFriends: true,
        error: ''
      }
    case FETCH_FRIENDS_SUCCESS:
      return {
        ...state,
        friendsList: action.payload,
        fetchingFriends: false,
        error: ''
      }
    case FETCH_FRIENDS_FAILURE:
      return {
        ...state,
        fetchingFriends: false,
        error: action.payload
      }
    default:
      return state
  }
}

export default fetchFriendsReducer;
