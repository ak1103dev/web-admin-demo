import React, { Component } from 'react';
import './App.css';
import { Admin, Resource } from 'react-admin';
import loopbackRestClient, {authClient} from 'aor-loopback';

import { UserList } from './resources/user';

class App extends Component {
  render() {
    return (
      <Admin
        dataProvider={loopbackRestClient('http://localhost:8080/api')}
        authProvider={authClient('http://localhost:8080/api/AppUsers/login')}
      >
        <Resource name="AppUsers" list={UserList} />
      </Admin>
    );
  }
}

export default App;
