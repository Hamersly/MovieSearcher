import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CounterState {
	content: object;
	detail: object;
	format: string;
}

const initialState = {content: {page: 1}, detail: {}, format: "movie"} as CounterState;

const movieSlice = createSlice({
	name: "movie",
	initialState,
	reducers: {
		addContentList(state, action: PayloadAction<{ format: string, content: object }>) {
			const {format, content} = action.payload
			state.content = content;
			state.format = format;
		},
		addContentDetail(state, action: PayloadAction<object>) {
			console.log(action.payload)
			state.detail = action.payload
		},
		changeFormat(state, action: PayloadAction<string>) {
			state.format = action.payload
		}
	},
});

export const {addContentList, addContentDetail, changeFormat} = movieSlice.actions;
export default movieSlice.reducer;
