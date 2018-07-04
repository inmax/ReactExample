import React, { Component } from 'react';

class MenuMainItem extends React.Component {

    render(){
      return (
        <li className="main--menu__item" data-active={this.props.active}><a href={this.props.anchor}>{this.props.text}</a></li>
      )
    }
}

export default MenuMainItem;//default --> solo uno por ficheros
