import React, {Component} from 'react';

export default class Footer extends Component {
    render(){
        return(
            <div style={{marginTop:"3em"}}>
           
                <div className="container-fluid" style={{backgroundColor: "black"}}>
                    <div className="whiteFont" >
                            
                            <div className="card col-sm-2" style={{width: "40em"} }>
                            <div className="card-block">
                                <h4 className="card-title">Milliken Consulting</h4>
                                <h6 className="card-subtitle mb-2 text-muted">crystal@millikenconsulting.com</h6>
                              </div>
                            </div>
               </div>

            </div>
            
            </div>
        );
    }
}