
import './Projects.scss'
import React from 'react'
import bandsite from '../../assets/logos/Logo-bandsite.png'
import instock from '../../assets/logos/Logo-instock.svg'
import brainflix from '../../assets/logos/Logo-brainflix.svg'
import volunteer from  '../../assets/logos/hhlogo2.png'
import beagiver from '../../assets/logos/logo.png'
import posed from 'react-pose';
import curly from '../../assets/svg/curly-hair.svg'
import {Link} from 'react-scroll'

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

export default function Projects() {
    return (
        <div className="Projectsmain">
            <img className="face" src={curly} alt="logo"/>
            <div className="title">Hi, I'm Dmitry Goronkov</div>
            <div className="subtitle">Full-Stack web developer dedicated to delivering products with <span>integrity</span></div>
            <div className="subsubtitle">I build ideas into experience. <span>What shall we build together?</span></div>
            <div className="contacts"><a href="https://github.com/DmitryGoronkov">Github</a> &nbsp; &nbsp; <a href="https://www.linkedin.com/in/dmitry-goronkov/">LinkedIn</a> &nbsp; &nbsp; <a href="mailto:goronkov.dev@gmail.com" target="_top">Email</a> &nbsp; &nbsp; <a href="https://webdevsnippets.home.blog/">Blog</a></div>
            <div className="myproj">Most recent projects </div>
           

            <div className="box--wrap">
                <Link  className="link1" activeClass="active"
                        to="beagiver"
                        spy={true}
                        smooth={true}
                        // offset={-70}
                        duration= {500}>
                    <Box className="box box5">
                        <img src={beagiver} alt="beagiver"/>
                    </Box>
                </Link>
                <Link  className="link2" activeClass="active"
                        to="bandsite"
                        spy={true}
                        smooth={true}
                        // offset={-70}
                        duration= {500}>
                    <Box className="box box1">
                        <img src={bandsite} alt="bandsite"/>
                    </Box>
                </Link>
                <Link  className="link3" activeClass="active"
                        to="instock"
                        spy={true}
                        smooth={true}
                        // offset={-70}
                        duration= {500}>
                    <Box className="box box2">
                        <img src={instock} alt="instock"/>
                    </Box>
                </Link>
            </div>
            <div className="box--wrap">
                <Link  className="link4" activeClass="active"
                        to="volunteer"
                        spy={true}
                        smooth={true}
                        // offset={-70}
                        duration= {500}>
                    <Box className="box box4">
                        <img src={volunteer} alt="volunteer"/>
                    </Box>
                </Link>
                <Link  className="link5" activeClass="active"
                        to="brainflix"
                        spy={true}
                        smooth={true}
                        // offset={-70}
                        duration= {500}>
                    <Box className="box box3">
                        <img src={brainflix} alt="brainflix"/>
                    </Box>
                </Link>
                
            </div>  
        
        </div>
    )
}
