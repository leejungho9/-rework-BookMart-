import './App.css';

import Login from './components/Login';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Header from './components/Header';

function App() {
  return (

    <Router >   
        <Navbar/>
        <Header/>
        <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/signup" exact component={SignUp}></Route>
        </Switch>
      </Router>
  );
}

export default App;
