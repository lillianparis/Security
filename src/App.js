import logo from './logo.svg';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

function App() {
  return (

 <Router>
<Route exact path="/" component={Home}/>
 </Router>

  )}

export default App;
