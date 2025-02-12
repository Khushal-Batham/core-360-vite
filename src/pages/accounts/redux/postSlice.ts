// src/pages/accounts/redux/postSlice.ts

import type { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';

interface PostState {
  posts: any[]; // Replace 'any[]' with a proper type
  postLoading: boolean;
  postError: string | null;
}

const initialState: PostState = {
  posts: [],
  postLoading: false,
  postError: null,
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    fetchPostsRequest: (state) => {
      state.postLoading = true;
    },
    fetchPostsSuccess: (state, action: PayloadAction<any[]>) => {
      state.postLoading = false;
      state.posts = action.payload;
    },
    fetchPostsReset: (state) => {
      state.postLoading = false;
      state.posts = [];
    },
    fetchPostsFailure: (state, action: PayloadAction<string>) => {
      state.postLoading = false;
      state.postError = action.payload;
    },
  },
});

export const { fetchPostsRequest, fetchPostsSuccess, fetchPostsFailure, fetchPostsReset } =
  postSlice.actions;
export default postSlice.reducer;
