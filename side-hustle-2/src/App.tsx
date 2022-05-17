import React from "react";
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "components/Home";;
import { routes } from "utils/enum";

const App = () => {
  return (
      <Routes>
            <Route path={routes.HOME} element={ <Home /> } /> 
    
      </Routes>
  )
}

export default App
