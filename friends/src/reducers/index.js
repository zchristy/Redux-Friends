import { combineReducers } from 'redux'

import addFriendReducer from './addFriendReducer'
import deleteFriendReducer from './deleteFriendReducer'
import fetchClickedFriendReducer from './fetchClickedFriendReducer'
import fetchFriendsReducer from './fetchFriendsReducer'
import loginReducer from './loginReducer'
import updateFriendReducer from './updateFriendReducer'

export default combineReducers({
  addFriendReducer,
  deleteFriendReducer,
  fetchClickedFriendReducer,
  fetchFriendsReducer,
  loginReducer,
  updateFriendReducer
})
