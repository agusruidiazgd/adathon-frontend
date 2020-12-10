import React from 'react';
import './App.scss';
import Header from './Componentes/Header/Header';
import Footer from './Componentes/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      {/* 
        Hacer router con pages de:
          <Login /> 
          <Home />
          <CargaVentas />
          <CargaGastos />
       */}
      <Footer />
    </div>
    
  );
}

export default App;
