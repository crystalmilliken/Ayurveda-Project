import React, { Component } from 'react';
//import Component, pass in array like <GenerateList list = {someArray} />

export default class GenerateList extends Component{
    constructor(props){
        super(props)
       this.generate = this.generate.bind(this);
    }
    generate(currentList){
        let randomNum = 0;
        return(
        currentList.map((a)=>{
            randomNum ++;
            let keyName = `${a}${randomNum}`;
            return <li key={keyName}>{a}</li>
        }));
    }
    render(){
        const currentList = this.props.list;
        return(<div>
            <ul>
            {this.generate(currentList)}
            </ul>
            </div>)
    }

}