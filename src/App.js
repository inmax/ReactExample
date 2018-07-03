import React, { Component } from 'react';
import logo2 from './penguin.svg';
import Pageprueba from './Page/Page1';
import './App.css';


class Titulo extends Component {
  render () {
      return (
              <h1>{this.props.mensaje}</h1> //crear propiedad
      )
  }
}

class LogoInicio extends Component {
  render () {
      return (
          <img  key="imagen" src={logo2} className="App-logo" alt="logo" />
           
      )
  }
}

class MenuMain extends React.Component {
  render() {
    return (
      <nav className="main--menu">
        <ul>
            <MenuMainItem />
        </ul>
      </nav>
    );
  }
}


class MenuMainItem extends React.Component {
  render(){
    return (
      <li className="main--menu__item" data-active={this.props.active}><a href={this.props.anchor}>{this.props.text}</a></li>
    )
  }
}

class Sidebar extends React.Component {
  render() {
    return (
      <aside className="sidebar--features">

        <ul className="sidebar--features__ul">
          <li className="sidebar--features__item"><strong>Nombre Científico:</strong></li>
          <li className="sidebar--features__item"><strong><a href="">Características</a></strong></li>
          <li className="sidebar--features__item"><strong><a href="">Hábitat</a></strong></li>
          <li className="sidebar--features__item"><strong><a href="">Alimentación:</a></strong></li>
          <li className="sidebar--features__item"><strong>Longevidad:</strong> </li>
          <li className="sidebar--features__item"><strong>Reproducción:</strong></li>
        </ul>
      </aside>
    );
  }
}




//menu
//sidebar lista enlaces 


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
