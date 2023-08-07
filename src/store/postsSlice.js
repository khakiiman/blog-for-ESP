// Packages
import { createSlice } from '@reduxjs/toolkit';

// Codes
const initialState = {
  posts: [], // Initialize with your default posts data
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    addPost: (state, action) => {
      state.posts = [action.payload, ...state.posts];
    },
    removePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
  },
});

export const { setPosts, addPost, removePost } = postsSlice.actions;

export default postsSlice.reducer;
