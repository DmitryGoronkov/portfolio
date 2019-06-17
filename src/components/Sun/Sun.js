import React from 'react';
import './Sun.scss';
import posed from 'react-pose'

const SunAnim = posed.div({
    start: {top: "40vh", transition: { duration: 30000 }},
    finish: {top: "70vh"},
    
})
export default class Sun extends React.Component {
    state = {isMoving: false}
    componentDidMount(){
        setInterval(()=> {
            this.setState({ isMoving: true})
        }, 1000);
    }
    render() {
        const {isMoving} = this.state;
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