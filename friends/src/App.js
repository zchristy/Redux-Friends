import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import FriendsList from './components/FriendsList';
import Friend from './components/Friend';
import Nav from './components/Nav';
import AddForm from './components/forms/AddForm';
import Login from './components/forms/Login';
import UpdateForm from './components/forms/UpdateForm';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route exact path='/' component={FriendsList} />
        <Route path='/friend/:id' component={Friend} />
        <Route path='/add-friend' component={AddForm} />
        <Route path='/login' component={Login} />
        <Route path='/update-friend' component={UpdateForm} />
      </div>
    </Router>
  );
}

export default App;
