//import liraries
import React, { Component } from 'react';
import VideoContent from './src/Screens/Video/VideoContent'
import ImageSlide from './src/Screens/Image/ImageSlide';
import Card from './src/Screens/Cards/Card';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import ContactPage from './src/Screens/Contact/Contact';
import TypeWriterScreen from './src/Screens/TypreWriter/TypewriterScreen';


const App = () => {
  return (
    <Provider store={store}>
      <ContactPage />
    </Provider>
  );
};

export default App;
