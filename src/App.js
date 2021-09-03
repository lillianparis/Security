import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/navbar';
import Home from "./pages/Home"



function App() {
  return (

 <Router>
   <Navbar/>
<Route exact path="/" component={Home}/>
 </Router>

  )}

export default App;
