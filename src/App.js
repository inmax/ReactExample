import React, { Component } from 'react';
import LogoInicio from './components/LogoInicio';
import Pageprueba from './Page/Page3';
import Titulo from './components/Titulo';
import MenuMain from './components/MenuMain';
import Sidebar from './components/Sidebar';
import './App.css';

class App extends
 Component {

  //estado inicial de la barra de navegación
  /*
  constructor (...args) { //definir estado
    super(...args)
    this.state = { tabActive: true}
  }*/

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Titulo mensaje="Hola mundo"/> 
          <LogoInicio />
        </header>

        <MenuMain/>

        <section>
          <Sidebar />
          <Pageprueba />
        </section>

      </div>
    );
  }
}

export default App;
