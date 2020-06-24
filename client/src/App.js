import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import ContactsPage from './pages/ContactsPage';
import AuthPage from './pages/AuthPage';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <ContactsPage />
        </Route>
        <Route path="/login" exact>
          <AuthPage />
        </Route>
        <Redirect path="/login" />
      </Switch>
    </BrowserRouter >
  );
}

export default App;
