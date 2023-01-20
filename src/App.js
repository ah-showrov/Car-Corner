import React from 'react';
import Categories from './components/Categories';
import Header from "./components/Header"
import Navigation from './components/Navigation';
import SpecialOffers from './components/SpecialOffers';
function App() {
  return (
    <div >
      <Navigation/>
      <Header/>
      <Categories/>
      <SpecialOffers/>
    </div>
  );
}

export default App;
