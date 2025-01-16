import React from 'react';
import Header from './components/header/header';
import './App.css';

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div className="flex-grow-1">
      </div>
      <Footer />
    </div>
  );
};

export default App;
