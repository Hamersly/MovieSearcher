import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  content: object;
  format: string;
}

const initialState = { content: {}, format: "movie" } as CounterState;

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addContentList(state, action: PayloadAction<{format:string, content:object }>) {
      const {format, content} = action.payload
      state.content = content;
      state.format = format;
    },
  },
});

export const { addContentList } = movieSlice.actions;
export default movieSlice.reducer;
