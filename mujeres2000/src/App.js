import React from 'react';
import './App.scss';
import Header from './Componentes/Header/Header';
import Footer from './Componentes/Footer/Footer';
import Card from './Componentes/Card/Card';
import InputCalendar from './Componentes/InputCalendar/InputCalendar';
import InputLogin from './Componentes/InputLogin/InputLogin';

function App() {
  return (
    <div>
      <Header name="Pepita" />
      <InputLogin />
      {/* <Card 
          title='Ganancias'
          numero='$0'
          icon='faTrophy'
      /> */}
      <Footer />
    </div>
    
  );
}

export default App;
