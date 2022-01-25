import React from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { FilmsPage } from "./pages/FilmsPage";

export function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  // 	dispatch(getFilmsList("sdsd"));
  // }, []);

  return (
    <HashRouter>
      <Switch>
        <Route exact path="/movie">
          <FilmsPage />
        </Route>
        <Redirect to="/movie" />
      </Switch>
    </HashRouter>
  );
}
