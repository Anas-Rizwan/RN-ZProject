import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from 'axios'

export const FetchMovieList = createAsyncThunk('fetchMovies', async () => {
    const response = await Axios.get('https://reactnative.dev/movies.json')
    return response;
})

const movieslice = createSlice({
    name: "movie",
    initialState: {
        isLoading: false,
        item: null,
        IsError: false
    },
    extraReducers: (builder) => {
        builder.addCase(FetchMovieList.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(FetchMovieList.fulfilled, (state, action) => {
            state.isLoading = false;
            state.item = action.payload
        });
        builder.addCase(FetchMovieList.rejected, (state, action) => {
            console.log('Error', action.payload);
            state.IsError = true
        });
    }

})

export default movieslice.reducer;