import React from "react";
import Header from './components/Header';
import User from './components/User';
import NewUser from './components/NewUser';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Redux
import { Provider } from 'react-redux';
import store from './store';
function App() {
  return (
      <Router>
        <Provider store={store}>
 
          <Header />
          <div className="container mt-5">
            <Switch>
              <Route exact path="/" component={User}/>
              <Route exact path="/user/new" component={NewUser} />
            </Switch>
          </div>
                 
      </Provider>
      </Router>
  );
}

export default App;
