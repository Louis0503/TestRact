import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Main from './components/Main';
import HomePageContainer from './containers/HomePageContainer';
import ResultPageContainer from './containers/ResultPageContainer';
import store from './store';
// Import react-tap-event-plugin to avoid material-ui onTouchTap event error
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941

injectTapEventPlugin();

// Use react-redux Provider to pack the store and pass store to the children-components
// browserHistory is used to be history
// MuiThemeProvider in material-ui is used to decorate the whole component
// Main : the master model
// HomePageContainer :
// ResultPageContainer :

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={browserHistory}>
        <Route path="/" component={Main} />
        <IndexRoute component={HomePageContainer} />
        <Route path="/result" component={ResultPageContainer} />
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
);
