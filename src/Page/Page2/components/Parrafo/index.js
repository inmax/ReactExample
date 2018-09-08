import React, { Component } from 'react';

class Parrafo extends React.Component{
    render() {
        return(
            <p className="text--body">{this.props.text}</p>
        );
    }
}

export default Parrafo;//solo uno por ficheros cuando es por default´