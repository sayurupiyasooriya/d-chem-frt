import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from "./components/signin.component";
import SignUp from './components/signup.component';
import Navigation from "./components/navbar.component"
import React, { useState, Component } from 'react';


const App = () => {
  const [name, setName] = useState('test')


  console.log("setSate" + name)


  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/login">
            <SignIn />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </div>
    </Router >

  )

}


export default App;
