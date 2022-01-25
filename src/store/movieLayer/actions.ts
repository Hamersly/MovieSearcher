import { createAction } from "@reduxjs/toolkit";

// export const getContentList = createAction<string | number>("GET_CONTENT_LIST");
export const getContentList =
  createAction<{ format: string; page: number }>("GET_CONTENT_LIST");