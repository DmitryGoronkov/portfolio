import React, { Component } from 'react'
import Popup from "reactjs-popup";
import "./demo.scss";
import beagiverscreen from '../../assets/beagiverscreen.png'
import bandsitescreen from '../../assets/Bandsitescreen.png'
import brainflixscreen from '../../assets/brainflixscreen.png'
import instockscreen from '../../assets/merchtrackscreen.png'
import volunteerscreen from '../../assets/volunteerscreen.png'
import posed from 'react-pose';

const Box = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
    boxShadow: '0px 0px 0px rgba(0,0,0,0.1)'
  },
  hover: {
    scale: 1.2,
    zIndex: 1000,
    boxShadow: '0px 5px 10px rgba(0,0,0,0.3)'
  },
  press: {
    scale: 1.1,
    boxShadow: '0px 2px 5px rgba(0,0,0,0.2)'
  }
});
export default class Demo extends Component {
  render() {
    return (
      <>
      <div id="beagiver" className="demo demo1">
        <img className="demo__image demo1__image1" src={beagiverscreen} alt="beagiver"></img>
        <div className="demo__title">BeAGiver</div>
        <div className="demo__subtitle">React / Node.JS / Express / MongoDB / Google API</div>
        <div className="demo__subsubtitle">Mobile App which connects charity organizations with grocery stores and restaurants by orchestrating the pick up of extra food by those serving community members in need</div>
        <Popup trigger={<Box className="demo__button demo1__button1"> Demo </Box>} 
                      modal
                      closeOnDocumentClick
                      position="center center">
                      <iframe title="beagiver" src="https://www.youtube.com/embed/IeIJ3_X8GBc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen" ></iframe>
        </Popup> 
      </div>
      <div  id="bandsite" className="demo demo2">
      <img className="demo__image demo2__image2" src={bandsitescreen} alt="beagiver"></img>
      <div className="demo__title">Animal Shelter Fundraiser</div>
      <div className="demo__subtitle">HTML/SCSS/JS</div>
      <div className="demo__subsubtitle">Helping not-for-profit organizations is my passion. This is a fully responsive website I build for an animal shelter. Users are able to leave a donation and add comments.   </div>
      <Popup trigger={<Box className="demo__button demo2__button2"> Demo </Box>} 
                    modal
                    closeOnDocumentClick
                    position="center center">
                    <iframe title="shelter" src="https://www.youtube.com/embed/V0RA3Wav0tg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen" ></iframe>
      </Popup> 
    </div>
    <div id="brainflix" className="demo demo3">
        <img className="demo__image demo2__image2" src={brainflixscreen} alt="beagiver"></img>
        <div className="demo__title">TravelTube</div>
        <div className="demo__subtitle">React/Node.JS/Express</div>
        <div className="demo__subsubtitle">This project features a Node.JS/Express RESTful API and a fully responsive Front-end. The project mimics the Youtube UI and provides a means for Users to watch videos, add a video and comment on existing videos.</div>
        <Popup trigger={<Box className="demo__button demo3__button3"> Demo </Box>} 
                      modal
                      closeOnDocumentClick
                      position="center center">
                      <iframe title="traveltube" src="https://www.youtube.com/embed/EPcKsFzzhj8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen" ></iframe>
        </Popup> 
      </div>
      <div id="instock" className="demo demo4">
        <img className="demo__image demo2__image2" src={instockscreen} alt="beagiver"></img>
        <div className="demo__title">MerchTrack</div>
        <div className="demo__subtitle">React/Node.JS/Express/SQL</div>
        <div className="demo__subsubtitle">Simple Stock Management software that I have built in collaboration with a team of other passionate developers. </div>
        <Popup trigger={<Box className="demo__button demo4__button4"> Demo </Box>} 
                      modal
                      closeOnDocumentClick
                      position="center center">
                      <iframe title="merchtrack" src="https://www.youtube.com/embed/HWptygtbCeI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen" ></iframe>
        </Popup> 
      </div>
      <div id="volunteer" className="demo demo5">
        <img className="demo__image demo5__image5" src={volunteerscreen} alt="beagiver"></img>
        <div className="demo__title">Volunteer network</div>
        <div className="demo__subtitle">React/Node.JS/Redux/Firebase</div>
        <div className="demo__subsubtitle">The project I am currently working now. It is a full stack event management platform featuring a user login system, integrated google maps, and live chat.</div>
        {/* <Popup trigger={<Box className="demo__button demo5__button5"> Demo </Box>} 
                      modal
                      closeOnDocumentClick
                      position="center center">
                      <iframe title="beagiver" src="https://www.youtube.com/embed/IeIJ3_X8GBc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen" ></iframe>
        </Popup>  */}
      </div>
    </>
    )
  }
}



