import React from 'react';
import './App.scss';
// import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';
import Main from './components/Main/Main'
import ReactGA from 'react-ga';
import technology from './assets/svg/innovation.svg'
import colaboration from './assets/svg/team.svg'
import ps from './assets/svg/problem-solving.svg'
import love from './assets/svg/care.svg'
import github from './assets/svg/github-logo.svg'
import linkedin from './assets/svg/linkedin-logo.svg'
import curly from './assets/svg/curly-hair.svg'
import wordpress from './assets/svg/wordpress.svg'
import Demo from './components/Demo/Demo'
import {Link} from 'react-scroll'
import Projects from './components/Projects/Projects'
var Scroll = require('react-scroll');
    var Events = Scroll.Events;
    var scrollSpy  = Scroll.scrollSpy;
const Modal = posed.div({
  enter: {
    x: 0,
    opacity: 1,
    delay: 300,
    transition: {
      x: { type: 'spring', stiffness: 1000, damping: 15 },
      default: { duration: 300 }
    }
  },
  exit: {
    x: 500,
    opacity: 0,
    transition: { duration: 150 }
  }
});
const Navbar = posed.div({
  hidden: {opacity: 0, transition: { duration: 5000, }},
  visible: {opacity: 1, transition: { duration: 5000, } }
})
function initializeReactGA() {
  ReactGA.initialize('UA-142705554-1');
  ReactGA.pageview('/homepage');
}
class App extends React.Component {
  state = {
    iconsMov: false,
    scrollStarted: false,
    navbar: false,
    navbarColor: "white",
    navbarBackgroundColor: "rgba(255,255,255,0.3)",
    componentLoaded: false,
  }
  listenScrollEvent = e => {
    if (window.scrollY > 100){
        this.setState({
          iconsMov: true
        });
    } else {
      this.setState({
        iconsMov: false
      });
    }
    if (window.scrollY >= (window.innerHeight)) {
      this.setState({navbarColor: 'black', navbarBackgroundColor: "white"})
    } else {
      this.setState({navbarColor: 'white', navbarBackgroundColor: "rgba(255,255,255,0.3)"})
    }
  }
  loadCheck=()=>{
    this.setState({componentLoaded:true})
  }
  componentDidMount(){
    document.title = "Dmitry Goronkov Portfolio"
    initializeReactGA();
    window.addEventListener('scroll', this.listenScrollEvent)
    // Events.scrollEvent.register('begin', function(to, element) {
      
    // });
    // scrollSpy.update();
  }
  componentDidUpdate (){
    if (this.state.componentLoaded){
      setInterval(()=>{
        this.setState({navbar: true, componentLoaded: false})}, 3000)

    }
  }
  render(){
    
  
  return (
    <div>
        <Navbar pose={this.state.navbar? 'visible':'hidden'} className="navbar" style={{backgroundColor: this.state.navbarBackgroundColor}}>
                 <Link className="li" style={{color: this.state.navbarColor}}
                        activeClass="active"
                        to="main"
                        spy={true}
                        smooth={true}
                        // offset={-70}
                        duration= {500}
                 ><span style={{fontWeight:"bold"}}>Dmitry Goronkov</span> Web Developer.</Link>
                 <Link className="li" style={{color: this.state.navbarColor}} 
                        activeClass="active"
                        to="bio"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration= {500}>Bio</Link>
                  <Link className="li" style={{color: this.state.navbarColor}}
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration= {500}>Projects</Link>
        </Navbar>
        <Main loadCheck={this.loadCheck}></Main>
        <div className="bio" >
        <Projects></Projects>
          <Demo></Demo>
          <div id="bio">
          <div className="bio__title">What can I bring to the team:</div>
          <Modal pose={this.state.iconsMov? 'enter':'exit'}className="bio__icons" >
            <div className="bio__icons__item">
              <img src={technology} alt="technology"/>
              <div className="label">I am proficient in most up-to-date technologies like <span>React</span>, <span>Redux</span>, <span>Express</span> and <span>cloud</span> databases</div>
            </div>
            <div className="bio__icons__item">
              <img src={colaboration} alt="colaboration"/>
              <div className="label">I <span>collaborate</span> effectively to get things done, building and nurturing strong relationships</div>
            </div>
            <div className="bio__icons__item">
              <img src={ps} alt="problem-solving"/>
              <div className="label">I embrace <span>challenges</span> and implement the most viable <span>solutions</span></div>
            </div>
            <div className="bio__icons__item">
              <img src={love} alt="done with love"/>
              <div className="label">Everything that I do is done with <span>love</span> and <span>attention</span></div>
            </div>
          </Modal>
          {/* <div className="bio__intro">
            <img className="bio__intro__logo" src={curly} alt="logo"/>
            <div className="bio__intro__greeting">
              <span>Hi! My name is Dmitry Goronkov. I am a Full Stack Web Developer from Toronto, Canada. I am also an author of the blog <span className="bold"><a href="https://webdevsnippets.home.blog/">Web Development Snippets. </a></span> My personal motto: "I live to be corrected."</span>
              <div className="bio__intro__greeting__links">
                <a href="https://www.linkedin.com/in/dmitry-goronkov/"><img src={linkedin} alt="linkedin"/></a>
                <a href="https://github.com/DmitryGoronkov"><img src={github} alt="github"/></a>
                <a href="https://webdevsnippets.home.blog/"><img src={wordpress} alt="blog"/></a>
              </div>
            </div> 
            <div className="bio__intro__details">Raised in the family of a programmer, since childhood I developed passion for digital technologies and beautiful designs. Later my commitment to continuous self-growth and passion to make a meaningful difference in people’s lives led me to work in multiple non-profit organizations and even seek a life of a monk. Now as I broadened my skillset with the newest web technologies I am excited for the new opportunities to make a positive difference in people lives through digital realm. </div>
          </div> */}
          </div>
        </div>
        
    </div>
  );
  }
}

export default App;
