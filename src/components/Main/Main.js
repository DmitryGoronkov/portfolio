import React from 'react';
import './Main.scss';
import backTop from '../../assets/maintopfinalx.jpg';
import backBottom from '../../assets/mainbottomfinalx.jpg';
import Sun from '../Sun/Sun.js'
import posed from 'react-pose'
import Typed from 'react-typed';
import Stars from '../Stars/Stars'
import down from '../../assets/svg/arrowdown.svg'


const Overlay = posed.div({
    start: {backgroundColor: "rgba(0,0,0,0.6)"},
    finish: {backgroundColor: "rgba(255, 150, 124, 0.6)",transition: { duration: 10000 }},
})
const Overlay2 = posed.div({
    start: {backgroundColor: "rgba(0,0,0,0.99)"},
    finish: {backgroundColor: "rgba(0,0,0,0.01)",transition: { duration: 5000 }},
})

const Buttons = posed.div({
    hidden: {opacity: 0, transition: { duration: 5000, }},
    visible: {opacity: 1, transition: { duration: 5000, } }
})
export default class Main extends React.Component{
    state = {
        light: false,
        isVisible: false,
        light2: false,
        isClosed: false,
        isMoving: false,
        imageStatus1: false,
        imageStatus2: false
    }
    handleImageLoaded1() {
        this.setState({ imageStatus1: true });
    }
    handleImageLoaded2() {
        this.setState({ imageStatus2: true });
    }
    // touchStart(e){
    //     this.firstClientX = e.touches[0].clientX;
    //     this.firstClientY = e.touches[0].clientY;
    // }
    
    // preventTouch(e){
    //     const minValue = 5; // threshold
    
    //     this.clientX = e.touches[0].clientX - this.firstClientX;
    //     this.clientY = e.touches[0].clientY - this.firstClientY;
    
    //     // Vertical scrolling does not work when you start swiping horizontally.
    //     if(Math.abs(this.clientX) > minValue){ 
    //         e.preventDefault();
    //         e.returnValue = false;
    //         return false;
    //     }
    // }
    componentDidMount(){
        
    }
    componentDidUpdate(){
        if (this.state.imageStatus1 && this.state.imageStatus2){
            // window.addEventListener('touchstart', this.touchStart);
            // window.addEventListener('touchmove', this.preventTouch, {passive: false});
            this.props.loadCheck();
            setInterval(()=> {
                this.setState({ light2: true, isMoving: true})
            }, 100);
            setInterval(()=> {
                this.setState({ light: true})
            }, 5000);
            setInterval(()=>{
                this.setState({isVisible: true})}, 3000)
            this.setState({imageStatus1:false})
        }

    }
    render(){
        let topStyle={
            width: "100vw",
            height: "80vh",
        }
        let bottomStyle={
            position: "relative",
            top: "-3px",
            width: "100vw",
            height: "20vh",
            zIndex: 2
        }
        
        let {light, light2, isVisible} = this.state;
        var Scroll = require('react-scroll');
        var scroll = Scroll.animateScroll;
       

        return(
            // <ScrollLocky>
            <div className="main" id="main">   
                <Overlay2 className="overlay2" pose={light2? 'finish':'start'}></Overlay2>         
                <Overlay className="overlay" pose={light? 'finish':'start'}></Overlay>
                <img onLoad={this.handleImageLoaded1.bind(this)} style={topStyle} src={backTop}></img>
                <Sun isMoving={this.state.isMoving}></Sun>
                <img onLoad={this.handleImageLoaded2.bind(this)} style={bottomStyle} src={backBottom}></img>
                <div className="projects">
                    <h1>Hello</h1>
                </div>
                <div className="heading--wrap">
                    <Typed 
                        strings={['Dmitry Goronkov Front/Back-end Web Developer','If you cannot do great things, do small things in a great way']} 
                        className="heading"
                        typeSpeed={80} 
                        smartBackspace={true}
                    /><br />
                </div>
                <div className="bird--wrap bird--wrap--one">
		            <div className="bird bird--one"></div>
	            </div>
                <div className="bird--wrap bird--wrap--two">
		            <div className="bird bird--two"></div>
	            </div>
	
	            <div className="bird--wrap bird--wrap--three">
		            <div className="bird bird--three"></div>
	            </div>
	
	            <div className="bird--wrap bird--wrap--four">
		            <div className="bird bird--four"></div>
	            </div>
                    <Buttons className="button--wrap" pose={isVisible? 'visible':'hidden'}>
                        <img onClick={()=>{scroll.scrollTo(window.innerHeight, {
  duration: 1500,
  delay: 100,
  smooth: true})}} className="arrow" src={down} alt="down arrow"/>
                    </Buttons>
            </div>
            // </ScrollLocky>
        )
    }
}