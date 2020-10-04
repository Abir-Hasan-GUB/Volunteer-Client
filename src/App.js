import React from 'react';
import './App.css';
import AddEvent from './Componants/AddEventByAdmin/AddEvent';
import Admin from './Componants/Admin/Admin';
import Home from './Componants/Home/Home';
import Login from './Componants/Login/Login';
import Menu from './Componants/Menu/Menu';
import Register from './Componants/Register/Register';
import RegisterDetails from './Componants/RegisterDetails/RegisterDetails';

function App() {
  return (
   <div>
        <Menu></Menu>
        <Home></Home>
        <Login></Login>
        <Register></Register>
        <RegisterDetails></RegisterDetails>
        <Admin></Admin>
        <AddEvent></AddEvent>
   </div>
  );
}

export default App;
