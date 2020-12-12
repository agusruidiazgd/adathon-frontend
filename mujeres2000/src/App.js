import React,{useState} from 'react';
import './App.scss';
import Header from './Componentes/Header/Header';
import Footer from './Componentes/Footer/Footer';
import Login from './Pages/Login';
import Home from './Pages/Home';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import Select from './Componentes/Select/Select';
// import Button from './Componentes/Button/Button';
// import Card from './Componentes/Card/Card';


function App() {

  const [nameUser, setNameUser] = useState("");
  const [password,setPassword] = useState("");

  return (
    <div>
      <BrowserRouter>
      <Header nameUser={nameUser} />
        <Switch>
          <Route exact path="/login">
            <Login setNameUser={setNameUser} setPassword={setPassword} />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
    
  );
}

export default App;
