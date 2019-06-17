import React from 'react'
import './Stars.scss'


export default class Stars extends React.Component{
    
    render(){
        return(
            <div className="bodystar" style={{left: this.props.left}}>
                <div className="sky">
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div> 
                    <div className="star"></div>
                    <div className="star"></div>
                </div>
            </div>
        )
    }
} 