import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
// import { parseJwt, usuarioLogado } from './services/auth';


import './index.css';
// import App from './App';

import Login from './pages/login/login';

import reportWebVitals from './reportWebVitals';

const routing = (
  <Router>
    <div>
      <Switch>
        <Route patch="/login" component={Login}/>
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);
reportWebVitals();
