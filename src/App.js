import './App.css';
import React from 'react';
import 'macro-css';
import { Routes, Route } from "react-router-dom";


import NavBar from './pages/NavBar/NavBar';
import Catalog from './pages/Catalog/Catalog';
import Footer from './pages/Footer/Footer';
import Help from './pages/Help/Help';

function App() {
  return (
    <div className="App">
      <NavBar />



      <Routes>
        <Route path='/help' element={<Help />}/>
        <Route path='/' element={<Catalog />}/>
      </Routes>

      
      <Footer />
    </div>
  );
}



export default App;

