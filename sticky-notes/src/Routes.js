import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import App from "./components/new-note/App";

import { ROUTES } from "./constants";

import NoteArea from "./components/NoteArea";
// import NewBaseArea from "./components/new-note/NewBaseArea";

export const Routes = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path={ROUTES.ROUTE_TO_NOTE_AREA} component={App} />
          <Redirect exact from="/" to="/notearea" />
        </Switch>
      </Router>
    </div>
  );
};
