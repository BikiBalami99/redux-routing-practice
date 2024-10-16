import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = { isLoading: false, posts: [] };

export const fetchPosts = createAsyncThunk(
  "postsSlice/fetchPosts",
  async () => {
    const response = await fetch(`${import.meta.env.VITE_MOCK_API_URL}/posts`);
    return response.json();
  }
);

const postsSlice = createSlice({
  name: "postsSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (currentState) => {
        currentState.isLoading = true;
      })
      .addCase(fetchPosts.fulfilled, (currentState, action) => {
        currentState.isLoading = false;
        currentState.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (currentState) => {
        currentState.isLoading = false;
        throw new Error("Failed to fetch posts data");
      });
  },
});

export default postsSlice.reducer;
