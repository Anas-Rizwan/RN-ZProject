//import liraries
import React, { Component } from 'react';
import VideoContent from './src/Screens/Video/VideoContent'
import ImageSlide from './src/Screens/Image/ImageSlide';
import Card from './src/Screens/Cards/Card';
import { Provider } from 'react-redux';
import store from './src/redux/store';


const MyComponent = () => {
  return (
    <Provider store={store}>
      <VideoContent />
    </Provider>
  );
};

export default MyComponent;
