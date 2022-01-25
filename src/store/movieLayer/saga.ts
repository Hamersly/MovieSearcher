import {call, put, takeLeading} from "redux-saga/effects";
import {listApi} from "./api";
import {addContentList} from "./slise";
import {getContentList} from "./actions";

export default function* getFilmsSaga() {
	yield takeLeading(getContentList, getFilmsWorker);
}

function* getFilmsWorker(action: any) {
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
