import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { ROUTES } from "./constants";

import NoteArea from "./components/NoteArea";

export const Routes = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path={ROUTES.ROUTE_TO_NOTE_AREA} component={NoteArea} />
          <Redirect exact from="/" to="/notearea" />
        </Switch>
      </Router>
    </div>
  );
};
