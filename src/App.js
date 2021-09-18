import './App.css';
import React, { useState, useEffect } from 'react';
import Topbar from './components/topbar/TopBar'
import SideBar from './components/sidebar/SideBar'
import SignIn from './components/auth/login.component'
import { NavProvider } from './context/NavContext';
import Home from './components/home/Home';
import FieldMaster from './components/master/FieldMaster';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';


const App = () => {

  const [isLoggedIn, setisLoggedIn] = useState(false)
  const checkLogin = async () => {
    const localUser = await localStorage.getItem('user');
    if (localUser !== null) {
      setisLoggedIn(true)
    } else { setisLoggedIn(false) }
  }

  useEffect(() => {
    checkLogin()
  }, [])


  return (
    < div className="App" >

      <Router>
        {!isLoggedIn ?
          <SignIn setisLoggedIn={setisLoggedIn} /> :
          <NavProvider>
            <Topbar />
            <div className="app-container">
              <SideBar />
              <div className="other">
                <Switch>
                  <Route path="/dashboard">
                    <Home />
                  </Route>
                  <Route path="/master/field">
                    <FieldMaster />
                  </Route>
                </Switch>
              </div>
            </div>
          </NavProvider>
        }

      </Router>
    </div >




  )

}


export default App;
