import React from 'react';
import { Banner } from './Components/Banner';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Banner />
      </main>
      <Footer />
    </div>
  );
}

export default App;
