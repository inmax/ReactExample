import React, { Component } from 'react';
import penguin from './../../penguin.svg';

class LogoInicio extends Component {
    render () {
        return (
            <img  key="imagen" src={penguin} className="App-logo" alt="logo" />
             
        ) //las "key" fuerzan el ciclo de vida
    }
}


export default LogoInicio;//solo uno por ficheros