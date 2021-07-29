import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './componentes/navbar/navbar';
import Home from './componentes/home/home';
import Characters from './componentes/characters/characters';
import Episodes from './componentes/episodes/episodes';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/">
        <Home/>
        </Route>
        <Route exact path="/characters">
          <Characters/>
        </Route>
        <Route exact path="/episodes">
          <Episodes/>
        </Route>
     </Switch>
    </BrowserRouter>
  );
}

export default App;
