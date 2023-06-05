import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const imageApi = axios.create({
    baseURL: 'https://picsum.photos/',
  });


export const FetchImageList = createAsyncThunk('fetchImages', async () => {
    const response = await imageApi.get('v2/list?page=2&limit=10')
    return response;
})

const imageslice = createSlice({
    name: "image",
    initialState: {
        isLoading: false,
        item: null,
        IsError: false
    },
    extraReducers: (builder) => {
        builder.addCase(FetchImageList.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(FetchImageList.fulfilled, (state, action) => {
            state.isLoading = false;
            state.item = action.payload
        });
        builder.addCase(FetchImageList.rejected, (state, action) => {
            console.log('Error', action.payload);
            state.IsError = true
        });
    }

})

export default imageslice.reducer;