import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';

//import into component, pass in array of numbers.. <GenerateProgress = {sommArray} />
export default class GenerateProgress extends Component{
    constructor(props){
        super(props)
        this.generate = this.generate.bind(this);
    }
    generate(properties){
            let tempNum = 0;
            let styleOfBar ="danger";
        return (
             properties.map((a)=>{
                tempNum ++;
                if (styleOfBar === "success"){
                    styleOfBar ="warning";
                    return (<ProgressBar striped bsStyle="warning" now = {a} key = {tempNum}/>)
                }else if (styleOfBar === "warning"){
                    styleOfBar ="danger";
                    return (<ProgressBar striped bsStyle="danger" now = {a} key = {tempNum}/>)
                }else{
                    styleOfBar ="success";
                    return (<ProgressBar striped bsStyle="success" now = {a} key = {tempNum}/>)
                }
        }))
    }
    render(){
        return(
             <ProgressBar>
                        {this.generate(this.props.properties)}
            </ProgressBar>
        )
    }
}