import React, { Component } from 'react';
import MenuMainItem from "./components/MenuMainItem";

class MenuMain extends React.Component {
//estado inicial pingüino emperador seleccionado por defecto 
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }
    render() {
      return (
        <nav className="main--menu">
          <ul>
              <MenuMainItem active= "true" anchor="#" text="Pingüino Emperador"/>
              <MenuMainItem active= "false" anchor="#" text="Pingüino de barbijo"/>
              <MenuMainItem active= "false" anchor="#" text="Pingüino de Humboldt"/>
              <MenuMainItem active= "false" anchor="#" text="Pingüino de galápagos"/>
              <MenuMainItem active= "false" anchor="#" text="Pingüino crestado"/>
          </ul>
        </nav>
      );
    }
  }

  export default MenuMain;//default --> solo uno por ficheros