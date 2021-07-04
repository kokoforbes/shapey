import React from 'react';
import Header from './components/Header/Header'
import Filters from './components/Filters/Filters'
import View from './components/View/View'

function App() {
  return (
    <div className="container">
      <Header />
      <Filters />
      <View />
    </div>
  );
}

export default App;
