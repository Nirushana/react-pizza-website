import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/Hero';
import Products from './components/Products/index';
import { GlobalStyle } from './globalStyles';
import { productData } from './components/Products/data'
 
function App() {
  return (
    <Router>
      <GlobalStyle />
     <Hero />
     <Products heading='Choose your favorite' data={productData}/>
    </Router>
  );
}

export default App;
