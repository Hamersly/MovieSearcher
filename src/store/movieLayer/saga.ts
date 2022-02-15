import {call, put, takeLeading} from "redux-saga/effects";
import {listApi, detailApi, searchApi} from "./api";
import {addContentList, addContentDetail, addSearchList, addSearchValue} from "./slise";
import {getContentList, getContentDetails, searchValue} from "./actions";

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
	yield takeLeading(getContentDetails, getDetailsWorker);
}

function* getDetailsWorker(action: any) {
	// console.log(action.payload)
	const {format, id} = action.payload
	try {
		const detail: object = yield call(detailApi, format, id);
		yield put(addContentDetail(detail));
	} catch (err) {
		console.log(err);
	}
}

export function* searchSaga() {
	yield takeLeading(searchValue, searchWorker);
}

function* searchWorker(action: any) {
	console.log(action.payload)
	const {query, page} = action.payload
	try {
		const searchList: object = yield call(searchApi, query, page);
		yield put(addSearchValue(query));
		yield put(addSearchList(searchList));
	} catch (err) {
		console.log(err);
	}
}