import { all } from "redux-saga/effects";
import {getDetailsSaga, getMoviesSaga, searchSaga} from "./movieLayer/saga";

export default function* rootSaga() {
  yield all([getMoviesSaga(), getDetailsSaga(), searchSaga()]);
}
