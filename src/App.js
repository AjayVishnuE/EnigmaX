import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Footer, Eventdetails, Ourteam } from './components';
import {Home } from "./containers"

const App = () =>  {
  return (
    <div className='App'>
        <Home/>
    </div>
  );
}

export default App;
