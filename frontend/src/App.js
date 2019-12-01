import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MainHomePage from './components/MainHomePage'
import AddItem from './components/AddItem'
import UpdateItem from './components/UpdateItem'
import ErrorPage from './components/ErrorPage'
import ShowOne from './components/ShowOne'

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <MainHomePage/>
          </Route>
          <Route path="/add" exact>
            <AddItem/>
          </Route>
          <Route path="/one/:id" component={ShowOne} exact>
          </Route>
          <Route path="/update/:id" component={UpdateItem} exact>
          </Route>
          <Route path="/">
            <ErrorPage/>
          </Route>
          
        </Switch>
      </Router>

    </div>
  );
}

export default App;
