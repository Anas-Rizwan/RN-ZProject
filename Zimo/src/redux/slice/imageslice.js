import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const imageApi = axios.create({
    baseURL: 'https://zimopro.co.uk/api/zimo-app/',
  });


export const FetchImageList = createAsyncThunk('fetchImages', async () => {
    const response = await imageApi.get('listings?key=786ZM786&lat=37&lng=91&category=car&type=ENDINGSOON&country_id=174')
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