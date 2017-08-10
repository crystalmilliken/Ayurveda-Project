import React, { Component } from 'react';
import  CompareLifestyle  from './compareLifestyle';
import  CompareFoods  from './compareFoods';
import Exercise from './exercise';

export default class CompareAll extends Component {
    render(){
        return(
            <div className = "container">
           <CompareLifestyle />
            <CompareFoods />
            <Exercise />
            </div>
        )
    }
}