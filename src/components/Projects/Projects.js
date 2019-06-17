import React from 'react'
import './Projects.scss'
import backgr from '../../assets/projectsfinalx.jpg'
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
    onClickDetails =()=>{
        this.setState({isHidden2:true})
    }
    componentDidMount(){
        setInterval(()=> {
            this.setState({ isHidden: true})
        }, 5000);
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
                <Icons className="backPro" pose={this.state.isHidden? "finish":"start"}>
                    <Link className="buttonProBack--link" to="/"><button className="buttonProBack">Back</button></Link>
                </Icons> 
                <Icons className="beagiver" pose={this.state.isHidden? "finish":"start"}>
                    <div className="appvideo" >
                        <iframe width="320" height="480" src="https://www.youtube.com/embed/IeIJ3_X8GBc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    </div>
                    <button onClick={this.onClickDetails} className="buttonPro">Details</button>
                </Icons>
                <Icons className="beagiver--description" pose={this.state.isHidden2? "finish":"start"}>
                    <div className="beagiver--description__text">
                        <p> <span style={{fontWeight:"bold"}}>BeAGiver</span> is a mobile app with the goal to reduce food waste. Over <span style={{fontWeight:"bold"}}> $31 billion </span> dollars worth of food is wasted in Canada each year. This is enough to feed  <span style={{fontWeight:"bold"}}>every Canadian for five month. </span> Tons of food are thrown out every night by grocery stores and restaurants due to not matching the organization’s high standards. This food could still be used elsewhere for consumption, in fact it is estimated that approximately <span style={{fontWeight:"bold"}}> 80% </span> of consumer food was once perfectly edible. BeAGiver attempts to solve this problem. The app connects charity organizations with grocery stores and restaurants and helps organize pick up of their extra food for further distribution to homeless and people in need.</p>
                    </div>
                </Icons>
                
            </div>
        )
    }
} 