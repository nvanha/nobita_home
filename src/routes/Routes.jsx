import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./../pages/HomePage";
import CollectionsPage from "./../pages/CollectionsPage";
import NotFoundPage from "./../pages/NotFoundPage";

import * as Config from "./../constants/Config";

const Routes = () => (
  <Switch>
    <Route path={`/${Config.HOME_PAGE}`} exact component={HomePage} />
    <Route
      path={`/${Config.HOME_PAGE}/collections/:slug`}
      component={CollectionsPage}
    />
    <Route path={``} component={NotFoundPage} />
  </Switch>
);

export default Routes;
