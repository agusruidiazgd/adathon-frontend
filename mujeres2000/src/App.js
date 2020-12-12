import React from 'react';
import './App.scss';
import Header from './Componentes/Header/Header';
import Footer from './Componentes/Footer/Footer';
import InputCalendar from './Componentes/InputCalendar/InputCalendar';
import InputLogin from './Componentes/InputLogin/InputLogin';
import Select from './Componentes/Select/Select';
// import Button from './Componentes/Button/Button';
// import Card from './Componentes/Card/Card';

function App() {
  return (
    <div>
      <Header name="Pepita" />
      <InputLogin />
      <InputCalendar />
      {/* <Button text='cargar' color='naranja' tamaño='chico'/> */}
      <Select />
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
