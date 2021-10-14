import './App.css';
import React, { useState, useEffect } from 'react';
import Topbar from './components/topbar/TopBar'
import SideBar from './components/sidebar/SideBar'
import SignIn from './components/auth/login.component'
import { NavProvider } from './context/NavContext';
import Home from './components/home/Home';
import FieldMaster from './components/master/FieldMaster';
import CoursePage from './components/coursePage/CoursePage';
import CourseMaster from './components/master/CourseMaster';
import { Route, BrowserRouter as Router, Switch, useLocation } from 'react-router-dom';
import { FieldProvider } from './context/FieldContext';


const App = (props) => {

  const [isLoggedIn, setisLoggedIn] = useState(false)
  const [fieldName, setFieldName] = useState([])
  const location = useLocation();
  const field = "jhjfhjfh"
  const checkLogin = async () => {
    const localUser = await localStorage.getItem('user');
    if (localUser !== null) {
      setisLoggedIn(true)
    } else { setisLoggedIn(false) }
  }

  useEffect(() => {
    checkLogin()
    console.log(location.state)

  }, [])

  console.log(location.state)
  return (
    < div className="App" >

      <Router>
        {!isLoggedIn ?
          <SignIn setisLoggedIn={setisLoggedIn} /> :
          <NavProvider>
            <FieldProvider >
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
                    <Route path="/field/course">
                      <CoursePage />
                    </Route>
                    <Route path="/master/course">
                      <CourseMaster />
                    </Route>
                  </Switch>
                </div>
              </div>
            </FieldProvider>
          </NavProvider>
        }

      </Router>
    </div >




  )

}


export default App;
