import React from "react";
import NoteArea from "./components/NoteArea";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

export const Routes = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path={"/notearea"} component={NoteArea} />
          <Redirect exact from="/" to="/notearea" />
        </Switch>
      </Router>
    </div>
  );
};
