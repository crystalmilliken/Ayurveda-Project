import React, { Component } from 'react';
import GenerateList from './generateList';
import GenerateProgress from './generateProgress';

export default class TestList extends Component {
    render(){
        const currentList = ["a","b","c"];
        const currentPercentage = [30,20,10,30];
        return(
        <div>
            <GenerateList list = { currentList } />
            <GenerateProgress properties = { currentPercentage } />
        </div>)
    }
}