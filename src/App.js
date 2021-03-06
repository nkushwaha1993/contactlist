import React from 'react';
import './App.css';
import ListContactComponent from './component/ListContactComponent';
import AddContactComponent from './component/AddContactComponent';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom'
function App() {
  return (
    <div className="App">
       <Router >
       <ul> 
       <li> 
        <Link className='text-link' to="/contactlist">Home</Link> 
      </li> 
      <li> 
        <Link className='text-link' to="/Tablelist">Material UI</Link> 
      </li> 
    </ul> 
      <Switch>
          <Route exact path="/contactlist">
            <AddContactComponent />
          </Route>
          <Route exact path="/Tablelist" component={ListContactComponent} />
        </Switch>
       
        </Router>
       
    </div>
  );
}

export default App;
