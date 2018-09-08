import React, { Component } from 'react';

class IntroTest extends React.Component {
render(){
    return(
    <div className={"intro step " + (this.props.showIntro === true ? " show " : "")}>
        {/* // <div className={"intro step " }> */}
    <p>INTRODUCIÓN</p>
    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit fusce enim mauris consequat porta justo nam eros, magnis donec ridiculus fringilla platea cum dui nisl lobortis ad curabitur id viverra. Eleifend turpis proin potenti nascetur vehicula vel a vestibulum duis, per est felis semper blandit enim tincidunt. Commodo mauris molestie dui congue dignissim diam inceptos dis conubia ac, platea imperdiet cras lobortis fames mi tellus volutpat montes habitant, hac curabitur vehicula malesuada himenaeos scelerisque arcu nostra fringilla.</p>

    <button onClick={this.startTest} >Empezar</button>
</div>
)}

}
export default IntroTest;