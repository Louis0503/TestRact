import React from 'react';
import { Link, IndexLink } from 'react-router';
import styles from './appStyles';
import NavLink from '../NavLink';

const App = props => (
  <div>
    <h1>Tutorial</h1>
    <ul>
      <li>
        <IndexLink to="/" activeClassName="active">Home</IndexLink>
      </li>
      <li>
        <Link to="/flux" activeStyle={{ color: 'green' }}>Flux</Link>
      </li>
      <li>
        <Link to="/repos/ThankYou" activeStyle={styles.active}>Repos</Link>
      </li>
      <li>
        <Link to="/user" activeClassName="active">User</Link>
      </li>
      <li>
        <NavLink to="/contacts">Contacts</NavLink>
      </li>
    </ul>
    {props.children}
  </div>
);

App.PropTypes = {
	children: React.PropTypes.object,
};

export default App;
