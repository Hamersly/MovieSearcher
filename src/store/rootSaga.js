import { all } from "redux-saga/effects";
import getFilmsSaga from "./movieLayer/saga";

export default function* rootSaga() {
  yield all([getFilmsSaga()]);
}
