import {
  FETCH_FRIENDS_START,
  FETCH_FRIENDS_SUCCESS,
  FETCH_FRIENDS_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../actions';

const initialState = {
  friendsList: [],
  fetchingFriends: false,
  error: null,
  loggingIn: false,
  isLoggedIn: false
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true,
        error: ''
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        isLoggedIn: true,
        error: ''
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false,
        error: action.payload
      }
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

export default reducer;
