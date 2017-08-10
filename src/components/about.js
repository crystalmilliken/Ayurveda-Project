import React, { Component } from 'react';

export default class About extends Component {
    render(){
        return (
            <div>
            <div className="container" style={{paddingTop:"2em"}}>
                    <div className="jumbotron">
                    <p>This is a simple project that I put together to inform people about Ayurveda.
                        Sometimes the simple gets lost in many theories and fancy words. It doesn't have to 
                        be complicated to start something new. You should be able to quickly look over the site and 
                        decide if you want to take a step in. Baby steps count.
                    </p>
                    </div>
                </div>
            </div>
        );
    }
}