import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Flux from './components/Flux';
import App from './components/App';
import Contacts from './components/Contacts';
import Home from './components/Home';
import Repos from './components/Repos';
import User from './components/User';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/repos/:name" component={Repos} />
    <Route path="/flux" component={Flux} />
    <Route path="/user" component={User} />
    <Route path="/contacts" component={Contacts} />
  </Route>
);

ReactDOM.render(
  <Router routes={routes} history={hashHistory} />,
  document.getElementById('app')
);
