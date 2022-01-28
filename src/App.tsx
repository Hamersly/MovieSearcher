import React from "react";
import { HashRouter, Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import { MoviePage } from "./pages/MoviePage";
import {DetailPage} from "./pages/DetailPage";
import {TvPage} from "./pages/TvPage";
import {Header} from "./components/Header";

export function App() {

  return (
    <HashRouter>
      <Header/>
      <Switch>
        <Route exact path="/">
          <MoviePage />
        </Route>
        <Route path="/movie">
          <MoviePage />
        </Route>
        <Route path="/tv">
          <TvPage />
        </Route>
        <Route path={"/:info"}>
          <DetailPage />
        </Route>
        {/*<Redirect to="/" />*/}
      </Switch>
    </HashRouter>
  );
}
