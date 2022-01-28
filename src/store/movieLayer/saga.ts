import {call, put, takeLeading} from "redux-saga/effects";
import {listApi, detailApi} from "./api";
import {addContentList, addContentDetail} from "./slise";
import {getContentList, getMovieDetails} from "./actions";

export function* getMoviesSaga() {
	yield takeLeading(getContentList, getMoviesWorker);
}

function* getMoviesWorker(action: any) {
	const {format, page} = action.payload
	try {
		const movies: object = yield call(
			listApi,
			format,
			page
		);
		yield put(addContentList({format, content: movies}));
	} catch (err) {
		console.log(err);
	}
}

export function* getDetailsSaga() {
	yield takeLeading(getMovieDetails, getDetailsWorker);
}

function* getDetailsWorker(action: any) {
	console.log(action.payload)
	const {format, id} = action.payload
	try {
		const detail: object = yield call(detailApi, format, id);
		yield put(addContentDetail(detail));
	} catch (err) {
		console.log(err);
	}
}