import './App.css';
import React from 'react';

import logo from './assets/logo.svg';
import Layout from './components/layout';
import Cart from './features/Cart';
import Counter from './features/Counter';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Cart {<Cart />}</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Layout>
          <p>This is a children</p>
          <Counter />
        </Layout>
      </header>
    </div>
  );
};

export default App;
