import React from 'react';
import './App.scss';
import Header from './Componentes/Header/Header';
import Footer from './Componentes/Footer/Footer';
import InputCalendar from './Componentes/InputCalendar/InputCalendar';
import InputLogin from './Componentes/InputLogin/InputLogin';
<<<<<<< HEAD
import Login from './Pages/Login';
=======
import Select from './Componentes/Select/Select';
// import Button from './Componentes/Button/Button';
// import Card from './Componentes/Card/Card';
>>>>>>> 49d279736b482a9147b87f653122f0aa9c85a8d1

function App() {
  return (
    <div>
      <Header name="Pepita" />
<<<<<<< HEAD
      <Login />
=======
      <InputLogin />
      <InputCalendar />
      {/* <Button text='cargar' color='naranja' tamaño='chico'/> */}
      <Select />
>>>>>>> 49d279736b482a9147b87f653122f0aa9c85a8d1
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
