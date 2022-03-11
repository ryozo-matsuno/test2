import React, { useState, useEffect } from 'react';
import './App.css';
import { API } from 'aws-amplify';
import AddNote from './AddNote';

import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);


function App() {


  return (
    <Authenticator>
      {({signOut, user }) => (

        <div className="App">
          <h1>My Notes App</h1>
          <button onClick={signOut}>Sign out</button>


          <AddNote />

        </div>
      )}

    </Authenticator>

  );
}

export default App;