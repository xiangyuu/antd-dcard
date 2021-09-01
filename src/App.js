import React from 'react';
import Home from './Component/Home'
import LoginForm from "./Component/LoginForm";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App(props) {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/welcome'>
            <LoginForm/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;