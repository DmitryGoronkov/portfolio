import React from 'react'
import './Projects.scss'
import backgr from '../../assets/51.jpg'
import posed from 'react-pose'
import Typed from 'react-typed';
import { Link} from 'react-router-dom';
const Icons = posed.div({
    start: {opacity: 0, transition: { duration: 5000}},
    finish: {opacity: 1, transition: { duration: 5000} }
})
const Overlay = posed.div({
    start: {backgroundColor: "rgba(255,255,255,0.99)"},
    finish: {backgroundColor: "rgba(255, 255, 255, 0.21)",transition: { duration: 5000 }},
})
export default class Projects extends React.Component{
    state = {
        isHidden: false,
        isHidden2: false,
        light: false
    }
    componentDidMount(){
        setInterval(()=> {
            this.setState({ isHidden: true})
        }, 5000);
        setInterval(()=> {
            this.setState({ isHidden2: true})
        }, 10000);
        this.setState({light: true})
    }
    render(){
        const {isHidden,isHidden2, light} = this.state;
        return(
            <div className="main">
                <Overlay className="overlayPr" pose={light? 'finish':'start'}></Overlay>
                <img src={backgr} className="backgroundlight"></img>
                <div class="bird--wrap bird--wrap--one">
		            <div class="bird bird--one"></div>
	            </div>
                <div class="bird--wrap bird--wrap--two">
		            <div class="bird bird--two"></div>
	            </div>
	
	            <div class="bird--wrap bird--wrap--three">
		            <div class="bird bird--three"></div>
	            </div>
	
	            <div class="bird--wrap bird--wrap--four">
		            <div class="bird bird--four"></div>
	            </div>
                <div className="appvideo" ><iframe width="320" height="480" src="https://www.youtube.com/embed/OZMa_dqRO4c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
            </div>
        )
    }
} 