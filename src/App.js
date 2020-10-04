import React, { createContext, useState } from 'react';
import './App.css';
import Home from './Componants/Home/Home';
import Login from './Componants/Login/Login';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './Componants/NotFound/NotFound';
import Register from './Componants/Register/Register';
import RegisterDetails from './Componants/RegisterDetails/RegisterDetails';
import VolunteerRegisterList from './Componants/VolunteerRegisterList/VolunteerRegisterList';
import AddEvent from './Componants/AddEvent/AddEvent';
import PrivateRoute from './Componants/PrivateRoute/PrivateRoute';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
  
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <p>Name: {loggedInUser.name}</p>
    <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>

          <Route path="/login">
            <Login />
          </Route>
          
          <PrivateRoute path="/registerDetails">
            <RegisterDetails name= {loggedInUser.name}/>
          </PrivateRoute>

          <PrivateRoute path="/VolunteerRegisterList">
            <VolunteerRegisterList/>
          </PrivateRoute>

          <PrivateRoute path="/addEvent">
            <AddEvent></AddEvent>
          </PrivateRoute>

          <PrivateRoute path="/register">
          <Register name={loggedInUser.name} email={loggedInUser.email} />
          </PrivateRoute>
          
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
    </Router>
  </UserContext.Provider>

  );
}

export default App;
