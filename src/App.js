import React, { createContext, useState } from 'react';
import './App.css';
import Home from './Componants/Home/Home';
import Login from './Componants/Login/Login';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Menu from './Componants/Menu/Menu';
import NotFound from './Componants/NotFound/NotFound';
import Register from './Componants/Register/Register';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    // <Menu></Menu>
    //     <Home></Home>
    //     <Login></Login>
    //     <Register></Register>
    //     <RegisterDetails></RegisterDetails>
    //     <Admin></Admin>
    //     <AddEvent></AddEvent>

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <p>Name: {loggedInUser.name}</p>
    <Router>
        {/* <Menu/> */}
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          {/* <PrivateRoute path="/book/:bedType">
            <Book />
          </PrivateRoute> */}
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
