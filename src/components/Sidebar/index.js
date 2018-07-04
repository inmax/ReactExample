import React, { Component } from 'react';

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


  export default Sidebar;//default --> solo uno por ficheros