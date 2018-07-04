import React, { Component } from 'react';
import Parrafo from './components/Parrafo';

class Page extends React.Component {
    render(){
      return(
          <main className="App-main">
          <article>
          <Parrafo text= "El pingüino emperador (Aptenodytes forsteri) es una especie de ave esfenisciforme de la familia Spheniscidae."/>
          <Parrafo text= "Esta especie, endémica de la Antártida, es la de mayor tamaño y peso de todos los pingüinos; el macho y la hembra son similares en plumaje y tamaño, pueden superar los 120 cm de altura y pesan entre 20 y 45 kg. La espalda, las alas y la cabeza son de color negro, la parte anterior es blanca desde las patas hasta el vientre, con el pecho de un tono amarillo pálido y dos auriculares a la altura de los oídos de un llamativo amarillo brillante. Como todos los pingüinos no puede volar, pero tiene unas alas rígidas y planas y un cuerpo hidrodinámico particularmente adaptado para un hábitat marino."/>
          <Parrafo text= "Su dieta está compuesta principalmente de peces, pero también puede incluir crustáceos como el kril y cefalópodos como el calamar. Mientras caza puede permanecer sumergido hasta dieciocho minutos, buceando a una profundidad de más de quinientos metros. Ha desarrollado diversas adaptaciones para facilitar esta tarea, como una hemoglobina con una estructura que le permite trabajar eficazmente con un bajo nivel de oxígeno, unos huesos sólidos para reducir el barotraumatismo y la capacidad de retardar su metabolismo y pausar las funciones de órganos no esenciales."/>
          <Parrafo text= "El pingüino emperador es conocido principalmente por el singular ciclo reproductivo de los adultos, que repiten cada año un largo viaje para aparearse y para alimentar a sus crías. Es la única especie de pingüino que se reproduce durante el crudo invierno antártico, realizando caminatas de entre cincuenta y ciento veinte kilómetros sobre el hielo hasta las colonias de cría que pueden incluir a miles de individuos. La hembra pone un único huevo que es incubado inicialmente por el macho, mientras que ella regresa al mar para alimentarse; posteriormente los padres se turnan para alimentarse en el mar y el cuidado de sus polluelos en la colonia. Su esperanza de vida suele ser de unos veinte años en su hábitat natural, aunque hay datos que indican que algunos ejemplares pueden vivir hasta cincuenta años de edad."/>
        </article>
        </main>
      )
    }
  }

  export default Page;//default --> solo uno por ficheros


  /* 
   
  
  
  */