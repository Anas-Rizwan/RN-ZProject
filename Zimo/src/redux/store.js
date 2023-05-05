import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './slice/movieslice';
import imageReducer from './slice/imageslice';


const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
  reducer: {
    movie: movieReducer,
    image: imageReducer,
  },
})

export default store;