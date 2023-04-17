import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './slice/movieslice';


const store = configureStore({
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
    reducer: {
        movie: movieReducer,
    },
})

export default store;