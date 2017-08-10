import React, {Component} from 'react';

export default class Banner extends Component {
    render(){
        return(
            <div>
           
                <div className="container-fluid bannerPicDiv" style={{backgroundColor: "black"}}>
                    <div className="whiteFont" >
                            <div className="col-sm-4"></div>
                            <div className="card col-sm-2" style={{width: 40+"rem"} }>
                            <div className="card-block">
                                <h2 className="card-title">Real World Ayurveda</h2>
                                <h6 className="card-subtitle mb-2 text-muted">Learn. Apply. Grow.</h6>
                                {/*<p className="card-text">It doesn't have to be complicated, check out the below links
                                    to get started on your journey.
                                </p>*/}
                            
                            </div>
                            </div>
               </div>

            </div>
            
            </div>
        );
    }
}