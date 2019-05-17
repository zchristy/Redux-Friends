import {
  FETCH_FRIENDS_START,
  FETCH_FRIENDS_SUCCESS,
  FETCH_FRIENDS_FAILURE,
  FETCH_CLICKED_FRIEND_START,
  FETCH_CLICKED_FRIEND_SUCCESS,
  FETCH_CLICKED_FRIEND_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  ADD_FRIEND_START,
  ADD_FRIEND_SUCCESS,
  ADD_FRIEND_FAILURE,
  UPDATE_FRIEND_START,
  UPDATE_FRIEND_SUCCESS,
  UPDATE_FRIEND_FAILURE,
  DELETE_FRIEND_START,
  DELETE_FRIEND_SUCCESS,
  DELETE_FRIEND_FAILURE
} from '../actions';

const initialState = {
  friendsList: [],
  fetchingFriends: false,
  clickedFriend: null,
  fetchingClickedFriend: false,
  savingFriend: false,
  updatingFriend: false,
  deletingFriend:false,
  loggingIn: false,
  isLoggedIn: false,
  error: null
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
    case ADD_FRIEND_START:
      return {
        ...state,
        savingFriend: true,
        error: ''
      }
    case ADD_FRIEND_SUCCESS:
      return {
        ...state,
        friendsList: action.payload,
        savingFriend: false,
        error: ''
        }
    case ADD_FRIEND_FAILURE:
      return {
        ...state,
        savingFriend: false,
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
    case FETCH_CLICKED_FRIEND_START:
      return {
        ...state,
        fetchingClickedFriend: true,
        error: ''
      }
    case FETCH_CLICKED_FRIEND_SUCCESS:
      return {
        ...state,
        clickedFriend: action.payload,
        fetchingClickedFriend: false,
        error: ''
      }
    case FETCH_CLICKED_FRIEND_FAILURE:
      return {
        ...state,
        fetchingClickedFriend: false,
        error: action.payload
      }
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

export default reducer;
