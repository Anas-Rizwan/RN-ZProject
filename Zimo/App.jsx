//import liraries
import React, { Component } from 'react';
import VideoContent from './src/Screens/Video/VideoContent'
import ImageSlide from './src/Screens/Image/ImageSlide';
import Card from './src/Screens/Cards/Card';
import { Provider } from 'react-redux';
// import store from './src/redux/store';
import ContactPage from './src/Screens/Contact/Contact';
import TypeWriterScreen from './src/Screens/TypreWriter/TypewriterScreen';
import Images from './src/Screens/Api_Image/Images';
import store from './src/redux-thunk/store';
import Object_array from './src/Screens/Test_object/Object_array';

const App = () => {
  return (
    <Provider store={store}>
      <Object_array />
    </Provider>
  );
};

export default App;
