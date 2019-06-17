import React from 'react';
import './Sun.scss';
import posed from 'react-pose'

const SunAnim = posed.div({
    start: {top: "40vh", transition: { duration: 30000 }},
    finish: {top: "70vh"},
    // start2: {top: "10vh", left:"80vw", transition: { duration: 30000 }}, 
    // finish2: {top: "1vh", left:"50vw"}
})
export default class Sun extends React.Component {
    render() {
        const {isMoving} = this.props;
        let stylesun = {
            width: "70%",
            height: "70%",
            position: "absolute",
            zIndex: 1,
        }
        return (
            <SunAnim style={stylesun} pose={isMoving? 'start':'finish'}>
                <div className="circle">
                    <div className="circle">
                         <div className="circle">
                            <div className="circle">
                                <div className="circle">
                                    <div className="circle">
                                        <div className="circle">
                                            <div className="circle">
                                                <div className="circle"> 
                                                    <div className="circle ">
                                                        <div className="circle">
                                                            <div className="circle">
                                                                <div className="circle">
                                                                    
                                                                        
                                                                                    
                                                              

                                                                                     
                                                                                 
                                                                                
                                                                            
                                                                        
                                                                    
                                                                </div>
                                                            </div>
                                                        </div> 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </SunAnim> 
          
        )
    }
}