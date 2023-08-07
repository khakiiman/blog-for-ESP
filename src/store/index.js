// Packages
import { configureStore } from '@reduxjs/toolkit';

// Files
import postsReducer from './postsSlice';

// Codes
const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

export default store;
