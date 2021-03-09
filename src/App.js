import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Contents from './components/contents/Contents';
import Footer from './components/Footer';
import Popup from './components/popup/Popup';
import './scss/style.scss';

function App() {
  return (
    <div id="wrap">
      <Header />
      <Navigation />
      <Contents />
      <Footer />
      <Popup />
    </div>
  )
}

export default App;   
