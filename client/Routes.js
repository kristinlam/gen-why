import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Login } from './components/AuthForm';
import AdminHome from './components/AdminHome';
import Home from './components/Home';
import SuggestForm from './components/SuggestForm';
import { me } from './store';

const Routes = () => {
  useEffect(() => {
    dispatch(me()); // load initial data
  }, []);

  const isLoggedIn = useSelector((state) => !!state.auth.id);
  const dispatch = useDispatch();

  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/suggestions" component={SuggestForm} />
        <Route path="/login">
          {isLoggedIn ? <Redirect to="/admin" /> : <Login />}
        </Route>
      </Switch>
      {isLoggedIn && (
        <Switch>
          <Route path="/admin" component={AdminHome} />
        </Switch>
      )}
    </div>
  );
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(Routes);
