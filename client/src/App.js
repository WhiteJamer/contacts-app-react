import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import ContactsPage from './pages/ContactsPage';
import AuthPage from './pages/AuthPage';

function App() {

  // const isAuth = localStorage.getItem('isAuth') && localStorage.getItem('isAuth') | false
  const isAuth = localStorage.getItem("isAuth")

  return (
    <BrowserRouter>
      <Switch>
        {isAuth ?
          <>
            <Route path="/" exact>
              <ContactsPage />
            </Route>
            <Redirect to="/" />
          </>
          :
          <>
            <Route path="/login" exact>
              <AuthPage />
            </Route>
            <Redirect to="/login" />
          </>
        }
      </Switch>
    </BrowserRouter >
  );
}

export default App;
