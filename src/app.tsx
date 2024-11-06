// src/index.tsx hoặc src/App.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './App';
import Login from './components/Login';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" component={App} />
    </Switch>
  </Router>,
  document.getElementById('root'),
);
