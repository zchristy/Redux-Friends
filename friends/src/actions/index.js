import axios from 'axios';
import { axiosWithAuth } from '../axiosWithAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  axios
    .post('http://localhost:5000/api/login', creds)
    .then(res => {
      localStorage.setItem('token', res.data.payload);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
    })
    .catch(err => {
      dispatch({
        type: LOGIN_FAILURE,
        payload: `${err}`
      });
    });
};

export const FETCH_FRIENDS_START = 'FETCH_FRIENDS_START';
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const FETCH_FRIENDS_FAILURE = 'FETCH_FRIENDS_FAILURE';

export const getFriends = () => dispatch => {
  dispatch({ type: FETCH_FRIENDS_START });
  axiosWithAuth()
    .get('/api/friends')
    .then(res => {
      dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: [...res.data] });
    })
    .catch(err => {
      dispatch({
        type: FETCH_FRIENDS_FAILURE,
        payload: `${err}`
      });
    });
};

export const FETCH_CLICKED_FRIEND_START = 'FETCH_CLICKED_FRIEND_START';
export const FETCH_CLICKED_FRIEND_SUCCESS = 'FETCH_CLICKED_FRIEND_SUCCESS';
export const FETCH_CLICKED_FRIEND_FAILURE = 'FETCH_CLICKED_FRIEND_FAILURE';

export const getClickedFriend = id => dispatch => {
  console.log(id)
  dispatch({ type: FETCH_CLICKED_FRIEND_START });
  axiosWithAuth()
    .get(`/api/friends/${id}`)
    .then(res => {
      console.log(res.data)
      dispatch({ type: FETCH_CLICKED_FRIEND_SUCCESS, payload: {...res.data} });
    })
    .catch(err => {
      dispatch({
        type: FETCH_CLICKED_FRIEND_FAILURE,
        payload: `${err}`
      });
    });
};

export const ADD_FRIEND_START = 'ADD_FRIEND_START';
export const ADD_FRIEND_SUCCESS = 'ADD_FRIEND_SUCCESS';
export const ADD_FRIEND_FAILURE = 'ADD_FRIEND_FAILURE';
export const ADD_FRIEND_END = 'ADD_FRIEND_END';

export const addFriend = friend => dispatch => {
  dispatch({ type: ADD_FRIEND_START });
  return axiosWithAuth()
    .post('/api/friends', friend)
    .then(res => {
      dispatch({ type: ADD_FRIEND_SUCCESS, payload: [...res.data] });
    })
    .catch(err => {
      dispatch({
        type: ADD_FRIEND_FAILURE,
        payload: `${err}`
      });
    });
};

export const UPDATE_FRIEND_START = 'UPDATE_FRIEND_START';
export const UPDATE_FRIEND_SUCCESS = 'UPDATE_FRIEND_SUCCESS';
export const UPDATE_FRIEND_FAILURE = 'UPDATE_FRIEND_FAILURE';
export const UPDATE_FRIEND_END = 'UPDATE_FRIEND_END';

export const updateFriend = friend => dispatch => {
  dispatch({ type: UPDATE_FRIEND_START });
  return axiosWithAuth()
    .put(`/api/friends/${friend.id}`, friend)
    .then(res => {
      dispatch({ type: UPDATE_FRIEND_SUCCESS, payload: [...res.data] });
    })
    .catch(err => {
      dispatch({
        type: UPDATE_FRIEND_FAILURE,
        payload: `${err}`
      });
    });
};
