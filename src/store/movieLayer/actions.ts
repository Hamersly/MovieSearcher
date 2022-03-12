import {createAction} from "@reduxjs/toolkit";

// export const getContentList = createAction<string | number>("GET_CONTENT_LIST");
export const getContentList =
	createAction<{ format: string; page: number }>("getContentList");

export const getContentDetails = createAction<{ format: string; id: string }>("getContentDetails")

export const searchValue = createAction<{ query: string; page: number }>("searchValue")
