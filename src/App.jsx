import React from 'react';
import './App.css';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <header>
        <h1>E-commerce Website</h1>
      </header>
      <main>
        <ProductList />
      </main>
      <footer>
        <p>&copy; 2023 E-commerce Website</p>
      </footer>
    </div>
  );
}

export default App;
