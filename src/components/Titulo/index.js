import React, { Component } from 'react';

class Titulo extends Component {
    render () {
        return (
                <h1>{this.props.mensaje}</h1> //crear propiedad
        )
    }
  }

export default Titulo;