import React, { Component } from 'react';
import { Accordion, Panel, Media } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//Component takes an array of objects that have 3 properties: name, picture, and directions.
//You will need to change these for your objects. You can also adjust picture size. 
//This component puts these into an accordion but you can return just the media tags if you 
//prefer. You could also add a media header.
//-------------
//The second part of this component allows you to add chosen objects to an array which you can then pass on.

class GenerateAccordion extends Component {
    constructor(props){
        super(props)
       this.state = {
            chosen : []
        }
       
        this.addToArray = this.addToArray.bind(this);
        this.generateAccordion = this.generateAccordion.bind(this);
        
    }
    
    addToArray(name){
         let currentState = this.state.chosen;
         currentState.push(name);
         this.setState({chosen : currentState});
            return console.log(currentState);
    }
    generateAccordion(data){
        let tempKey = 1;
        return (
             data.map((a)=>{
                    tempKey++;
                    return (
                    <Panel header={a.name} eventKey={tempKey}  key={tempKey}>
                         <Media>
                            <Media.Left>
                                <img width={128} height={128} src={a.picture} alt={a.name}/>
                            </Media.Left>
                            <Media.Body>
                               {a.directions}<br />
                               <button className="btn btn-primary" onClick={()=>{this.addToArray(a.name)}}>Add recipe</button>
                            </Media.Body>
                            </Media>
                    </Panel>
                    
                    )}))
                
    }
    render(){
        return(
             <div className="container">
            <Accordion>
            {this.generateAccordion(this.props.data)}
            </Accordion>
            <div><button className="btn btn-primary" id="submit" onClick={()=><Link to= "/testingStateAccordion">this.state.chosen</Link>}>Generate Menu</button></div>
                    </div>
        );
    }
}

export { GenerateAccordion };