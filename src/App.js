import './App.css';
import React from 'react';
import Topbar from './components/topbar/TopBar'
import SideBar from './components/sidebar/SideBar'
import { NavProvider } from './context/NavContext';
import Home from './components/home/Home';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';



const App = () => {

  return (
    <Router>
      <div className="App">
        <NavProvider>
          <Topbar />
          <div className="app-container">
            <SideBar />
            <div className="other">
              <Switch>
                <Route exact path="/dashboard">
                  <Home />
                </Route>
                <Route exact path="/profile">
                  <div>test</div>
                </Route>
              </Switch>
            </div>
          </div>
        </NavProvider>
      </div >

    </Router>


  )

}


export default App;
