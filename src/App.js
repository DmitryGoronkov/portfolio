import React from 'react';
import './App.scss';
// import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';
import Main from './components/Main/Main'
import Profile from './components/Profile/Profile'
import Projects from './components/Projects/Projects'
import ReactGA from 'react-ga';
import technology from './assets/svg/innovation.svg'
import colaboration from './assets/svg/hands.svg'
import ps from './assets/svg/problem-solving.svg'
import love from './assets/svg/care.svg'
import github from './assets/svg/github-logo.svg'
import linkedin from './assets/svg/linkedin-logo.svg'
import curly from './assets/svg/curly-hair.svg'
import wordpress from './assets/svg/wordpress.svg'
import mockup from './assets/mockup.png'
import Popup from "reactjs-popup";

function initializeReactGA() {
  ReactGA.initialize('UA-142705554-1');
  ReactGA.pageview('/homepage');
}
class App extends React.Component {
  componentDidMount(){
    document.title = "Dmitry Goronkov Portfolio"
    initializeReactGA();
  }
  
  render(){
  return (
    <div>
       {/* <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/profile" component={Profile} />
            <Route path="/projects" component={Projects} />
          </Switch>
        </BrowserRouter> */}
        <Main></Main>
        <div className="projects">
          <div className="projects__icons">
            <div className="projects__icons__technology">
              <img src={technology} alt="technology"/>
              <div className="label">I am proficient in most up-to-date technologies like <span>React</span>, <span>Redux</span>, <span>Express</span> and <span>cloud</span> databases</div>
            </div>
            <div className="projects__icons__colaboration">
              <img src={colaboration} alt="colaboration"/>
              <div className="label">I <span>collaborate</span> effectively to get things done, building and nurturing strong relationships</div>
            </div>
            <div className="projects__icons__ps">
              <img src={ps} alt="problem-solving"/>
              <div className="label">I embrace <span>challenges</span> and implement the most viable <span>solutions</span></div>
            </div>
            <div className="projects__icons__love">
              <img src={love} alt="done with love"/>
              <div className="label">Everything that I do is done with <span>love</span> and <span>attention</span></div>
            </div>
          </div>
          <div className="projects__intro">
            <img className="projects__intro__logo" src={curly} alt="logo"/>
            <div className="projects__intro__greeting">
              <span>Hi! My name is Dmitry Goronkov. I am a Full Stack Web Developer from Toronto, Canada. I am also an author of the blog <span className="bold"><a href="https://webdevsnippets.home.blog/">Web Development Snippets. </a></span> My personal motto: "I live to be corrected."</span>
              <div className="projects__intro__greeting__links">
                <a href="https://www.linkedin.com/in/dmitry-goronkov/"><img src={linkedin} alt="linkedin"/></a>
                <a href="https://github.com/DmitryGoronkov"><img src={github} alt="github"/></a>
                <a href="https://webdevsnippets.home.blog/"><img src={wordpress} alt="blog"/></a>
              </div>
            </div> 
            <div className="projects__intro__details">Raised in the family of a programmer, since childhood I developed passion for digital technologies and beautiful designs. Later my commitment to continuous self-growth and passion to make a meaningful difference in people’s lives led me to work in multiple non-profit organizations and even seek a life of a monk. Now as I broadened my skillset with the newest web technologies I am excited for the new opportunities to make a positive difference in people lives through digital realm. </div>
          </div>
          <div className="demo">
          <div className="demo__title">My Projects</div>
          <div className="demo__beagiver">
            <img src={mockup} alt="beagivermockup"/>
            <div className="demo__beagiver__description"> <span style={{fontWeight:"bold"}}>BeAGiver</span> is a mobile app with the goal to reduce food waste. Over <span style={{fontWeight:"bold"}}> $31 billion </span> dollars worth of food is wasted in Canada each year. This is enough to feed  <span style={{fontWeight:"bold"}}>every Canadian for five month. </span> The app connects charity organizations with grocery stores and restaurants and helps organize pick up of their extra food for further distribution to homeless and people in need.
              <div style={{fontWeight:"bold", marginTop:"1rem"}}>Technologies used: <span>React</span>, <span>Express</span>, <span>MongoDB</span>, <span>Google API</span></div>
              <Popup trigger={<button> Demo </button>} 
                      modal
                      closeOnDocumentClick
                      position="center center">
                      <iframe title="beagiver" src="https://www.youtube.com/embed/IeIJ3_X8GBc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen" ></iframe>
              </Popup>
            </div>
          </div>
        </div>
        </div>
    </div>
  );
  }
}

export default App;
