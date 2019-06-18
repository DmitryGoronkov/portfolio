import React from 'react'
import './Profile.scss'
import starsbg from '../../assets/profilefinalx.jpg'
import Stars from '../Stars/Stars'
import html5 from '../../assets/svg/html5-original-wordmark.svg'
import css from '../../assets/svg/css3-original-wordmark.svg'
import sass from '../../assets/svg/sass-original.svg'
import javascript from '../../assets/svg/javascript-original.svg'
import react from '../../assets/svg/react-original-wordmark.svg'
import express from '../../assets/svg/express-original-wordmark.svg'
import mongo from '../../assets/svg/mongodb-original-wordmark.svg'
import nodeicon from '../../assets/svg/nodejs-original-wordmark.svg'
import posed, { PoseGroup } from 'react-pose'
import Typed from 'react-typed';
import face from '../../assets/face.jpg'
import linkedin from '../../assets/svg/linkedin-original.svg'
import { Link} from 'react-router-dom';
const Icons = posed.div({
    start: {opacity: 0, transition: { duration: 5000}},
    finish: {opacity: 1, transition: { duration: 5000} }
})
const Overlay = posed.div({
    start: {backgroundColor: "rgba(0,0,0,0.99)"},
    finish: {backgroundColor: "rgba(0, 0, 0, 0.21)",transition: { duration: 5000 }},
})
const Modal = posed.div({
    enter: {
      y: 0,
      opacity: 1,
      delay: 300,
      transition: {
        y: { type: 'spring', stiffness: 1000, damping: 15 },
        default: { duration: 300 }
      }
    },
    exit: {
      y: 50,
      opacity: 0,
      transition: { duration: 150 }
    }
  });
export default class Profile extends React.Component{
    state = {
        isHidden: false,
        isHidden2: false,
        light: false,
        isVisible: false
    }
    componentDidMount(){
        setInterval(()=> {
            this.setState({ isHidden: true})
        }, 5000);
        setInterval(()=> {
            this.setState({ isHidden2: true})
        }, 7000);
        this.setState({light: true})
        setInterval(() => {
            this.setState({
              isVisible: true
            });
          }, 3000);
    }
    render(){
        const {isHidden,isHidden2, light, isVisible} = this.state;
        return(
            <div className="mainprof">
                <Overlay className="overlayPr" pose={light? 'finish':'start'}></Overlay>
                <img src={starsbg} className="backgroundStars"></img>
                <Stars left="5vw"></Stars>
                <PoseGroup>
                {isVisible && [
                <Modal key="modal" className="icons--wrap">
                    <Icons className="icons" pose={isHidden? 'finish':'start'} >
                        <img className="icons__item" src={html5}></img>
                        <img className="icons__item" src={css}></img>
                        <img className="icons__item" src={sass}></img>
                        <img className="icons__item" src={javascript}></img>
                    </Icons>
                    <Icons className="icons" pose={isHidden? 'finish':'start'} >
                        <img className="icons__item" src={react}></img>
                        <img className="icons__item" src={express}></img>
                        <img className="icons__item" src={mongo}></img>
                        <img className="icons__item" src={nodeicon}></img>
                    </Icons>
                    <Icons className="headingPr--wrap" pose={isHidden2? 'finish':'start'}>
                    <p className="headingP">I strive to do everything with love and attention. Raised in the family of a programmer, since childhood I developed passion for digital technologies and beautiful designs. Later my commitment to continuous self-growth and passion to make a meaningful difference in people’s lives led me to work in multiple non-profit organizations and even seek a life of a monk. Now as I broadened my skillset with the newest web technologies I am excited for the new opportunities to make a positive difference in people lives through digital realm.</p>
                    <Typed 
                        strings={[' &nbsp; &nbsp;Personal motto: "I live to be corrected."']} 
                        className="headingPr"
                        typeSpeed={150} 
                    /><br /></Icons>
                    <Icons className="face--wrap" pose={isHidden2? 'finish':'start'}>
                        <img className="face" src={face} ></img>
                        <a className="linkedin--wrap" href="https://www.linkedin.com/in/dmitry-goronkov/"><img className="linkedin" src={linkedin}></img></a>
                        <Link className="buttonProf--link" to="/"><button className="buttonProf">Back</button></Link>

                    </Icons>
                    
                </Modal>
                ]}
                </PoseGroup>
            </div>
        )
    }
} 