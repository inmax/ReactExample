import React, { Component } from 'react';
import IntroTest from './components/IntroTest';
import Swiper from "react-id-swiper";

let goNextDelay;
var times=0;

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
			showTest: false,
			showIntro: true,
			showResult: false,
			activeOption: false
        };
 
    }
    startTest = () => {
		this.setState({
			showTest : true,
            showIntro: false,
            showResult: false,
        });
        
	}
	finishTest = () =>{
        //condición para que finalice el test setTimeOut
                this.setState({
                    showTest : false,
                    showIntro: false,
                    showResult: true,
                });   
	}
	againTest = () => {
        this.timesRepeat();
		//Condición de cuantas veces se puede repetir el test
        //resetear todos los campos
        if (this.swiper) {
            this.swiper.slideTo(0,0,false);
            this.setState({
                showTest : true,
                showIntro: false,
                showResult: false,
            });
            
        };
    }
    
    goNext = () => {
        if (this.swiper) {
            let _this = this;

            goNextDelay = setTimeout(function() {
                if(_this.swiper.activeIndex == _this.swiper.slides.length -1){
                    _this.finishTest();
                }else{
                    _this.swiper.slideNext();
                }
			}, 1500);
        }
    };
    
    timesRepeat = () => {
        this.swiper.on('fromEdge', function () {
            times = times +1 ;
            console.log(times);
        });
    } 

   
    
     ComponentDidMount(){
        clearTimeout(goNextDelay);
        console.log('acabo ejecutar clearTimeout');
     }

        
    render(){


        
		//https://www.npmjs.com/package/react-id-swiper
        const params = {
            pagination: {
              el: '.swiper-pagination',
              type: 'fraction',
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }
          };

        console.log(this);
        return(
            <div className="test">
                <div className={"intro step " + (this.state.showIntro === true ? " show " : "")}>
                    <p>INTRODUCIÓN</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit fusce enim mauris consequat porta justo nam eros, magnis donec ridiculus fringilla platea cum dui nisl lobortis ad curabitur id viverra. Eleifend turpis proin potenti nascetur vehicula vel a vestibulum duis, per est felis semper blandit enim tincidunt. Commodo mauris molestie dui congue dignissim diam inceptos dis conubia ac, platea imperdiet cras lobortis fames mi tellus volutpat montes habitant, hac curabitur vehicula malesuada himenaeos scelerisque arcu nostra fringilla.

Sapien facilisis eleifend platea nascetur curabitur eros, dapibus primis vulputate etiam felis ultrices, maecenas molestie feugiat montes eu. Accumsan et curabitur taciti condimentum pulvinar varius lectus magnis rhoncus, magna ultrices hendrerit rutrum placerat urna blandit suscipit, luctus facilisi viverra turpis commodo auctor habitant aliquam. Massa maecenas potenti ultricies rutrum feugiat inceptos eget ac est, platea gravida quam per luctus dictumst nibh ante neque, magna condimentum pulvinar urna tincidunt commodo metus montes.</p>
                    <button onClick={this.startTest} >Empezar</button>
                </div>

                <div className={"preguntas step" + (this.state.showTest === true ? " show " : "")}>
                    SLIDES DE PREGUNTAS
                    <Swiper {...params} ref={(node) => (node ? (this.swiper = node.swiper) : "")}>
                        <div><div className="item" onClick="this.goNext">
                            Slide 1
                            <div className="">
                                <label className="container-radio">
                                    Texto de la respuesta
                                    <input name="campo" type="radio" />
                                    <span className="checkmark" />
                                </label>
                            </div>
                            <div className="answers__item" onClick="this.goNext">
                                <div className="">
                                <label className="container-radio">
                                    Texto de la respuesta
                                    <input  name="campo" type="radio" />
                                    <span className="checkmark" />
                                </label>
                            </div>
                            </div>

                            </div></div>
                        <div><div className="item">Slide 2</div></div>
                        <div><div className="item">Slide 3</div></div>
                        <div><div className="item">Slide 4</div></div>
                        <div><div className="item">Slide 5</div></div>
                    </Swiper>
                    <button onClick={this.goNext}>Next</button>
                    <button onClick={this.goPrev}>Prev</button>
                    
                    <button onClick={this.finishTest} >Resultado</button>
                </div>

                <div className={"result step" + (this.state.showResult === true ? " show " : "")}>
                    SLIDES FINAL
                    <button onClick={this.againTest} >Volver a Empezar</button>
                </div>
            </div>            
        )
    }
}

export default Page;//default --> solo uno por ficheros