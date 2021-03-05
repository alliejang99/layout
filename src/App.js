import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Contents from './components/contents/Contents';
import './scss/style.scss';

function App() {
  return (
    <div id="wrap">
      <Header />
      <Navigation />
      <Contents />
    </div>
  )
}

export default App;   
