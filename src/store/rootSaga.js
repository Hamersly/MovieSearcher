import { all } from "redux-saga/effects";
import {getDetailsSaga, getMoviesSaga} from "./movieLayer/saga";

export default function* rootSaga() {
  yield all([getMoviesSaga(), getDetailsSaga()]);
}
