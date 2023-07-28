import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App';

const clientID = '443092135820-1houq8vav8j0cl6rso6tiit3312lcoi1.apps.googleusercontent.com';

ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <GoogleOAuthProvider clientId={clientID}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </GoogleOAuthProvider>,
  document.getElementById('root'),
);
