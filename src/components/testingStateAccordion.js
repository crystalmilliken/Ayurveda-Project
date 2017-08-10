import React, { Component } from 'react';
import GenerateAccordion from 'generateAccordion';

export default class TestingStateAccordion extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(<div>
            {this.props.current}
        </div>)
    }
}