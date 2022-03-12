import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import movieSlice from "./movieLayer/slise";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
	reducer: {movie: movieSlice},
	middleware: [...getDefaultMiddleware(), sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
