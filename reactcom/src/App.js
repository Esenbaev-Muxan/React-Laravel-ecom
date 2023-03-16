import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MasterLayout from './layouts/admin/MasterLayout';
import Dashboard from './components/admin/Dashboard';
import Profile from './components/admin/Profile';
import Home from './components/frontend/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path='/' component={Home} />          
          <Route path="/admin" name="Admin" render={(props) => <MasterLayout {...props} />} />

          {/* <Route path='/admin/dashboard' component={Dashboard} />
          <Route path='/admin/profile' component={Profile} /> */}


        </Switch>
      </Router>
    </div>
  );
}

export default App;
