import React from 'react';
import Login from '../Login';
import { Switch, Route } from 'react-router-dom';

const TopLevelRouter = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      {/* <Route path="/register" component={Register} /> */}
    </Switch>
  );
}

export default TopLevelRouter;