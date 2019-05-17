import {
  FETCH_CLICKED_FRIEND_START,
  FETCH_CLICKED_FRIEND_SUCCESS,
  FETCH_CLICKED_FRIEND_FAILURE,
} from '../actions';

const initialState = {
  clickedFriend: null,
  fetchingClickedFriend: false,
  error: null
};

const fetchClickedFriendReducer = (state = initialState, action) => {
  switch(action.type) {
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
    default:
      return state
  }
}

export default fetchClickedFriendReducer;
