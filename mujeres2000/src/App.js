import React,{useState} from 'react';
import './App.scss';
import Header from './Componentes/Header/Header';
import Footer from './Componentes/Footer/Footer';
import Login from './Pages/Login';
import Home from './Pages/Home';
import CargaVentas from './Pages/CargaVentas';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';


function App() {

  const [nameUser, setNameUser] = useState("");
  const [password,setPassword] = useState("");

  return (
    <div>
      <BrowserRouter>
      <Header nameUser={nameUser} />
      <CargaVentas /> 
        <Switch>
          <Route exact path="/login">
            <Login setNameUser={setNameUser} setPassword={setPassword} />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          {/* <Route exact path="/carga-producto">
            <CargaProducto />
          </Route> */}
          {/* <Route exact path="/carga-ventas">
            <CargaVentas />
          </Route> */}
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
    
  );
}

export default App;
