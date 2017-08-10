import React, { Component } from 'react';
import { PittaFoods } from './foods';
import { Panel, Media } from 'react-bootstrap';
import Fire from '../images/fire.png';
import {Link} from 'react-router-dom';
import Exercise from '../images/exercise.jpeg';

class PittaPage extends Component {
    render(){
   
     
        return(
                <div className = "container">
                    
                  <img src = {Fire} alt="Pitta Dosha"style={{minwidth:"800px", minHeight: "262px", paddingBottom:"1em"}}/>
                  <h4>***Note: These traits probably describe you when you are healthy and at your best.</h4> <br />
                        <Panel header = {(<h2>Physical Traits</h2>)}  style={{maxWidth:"800px"}}>
                        <h4>
                        You are likely of an average build and height. You have a pretty good digestion system. You have luxurious skin.
                         You should have abundant energy and a strong appetite. Some pittas have red hair.</h4><br /></Panel>
                         <Panel header = {(<h2>Emotional Traits</h2>)}  style={{maxWidth:"800px"}}>
                         <h4>People tell you how great your focus is. 
                         You are likely a good decision maker. <br />
                         You are sharp, direct, and outspoken.</h4></Panel>
                         <div>
                        <Panel header = {(<h2>Preferred Foods</h2>)}  style={{maxWidth:"800px"}}>
                         <PittaFoods />
                         </Panel>
                             </div>
                              <div>
                            <Panel style={{maxWidth:"800px"}}>
                            <Media>
                                <Media.Left>
                                < Link to = {"/exercise"}><img src={Exercise} alt="Pitta Exercises"/></Link>
                                </Media.Left>
                                <Media.Body>
                                    <Media.Heading>What about exercises??</Media.Heading>
                                    <p>Your dosha type matters even in deciding what exercises <br/>
                                    are best for you. So just < Link to = {"/exercise"}>what exercises are good for Pittas?</Link></p>
                                </Media.Body>
                            </Media>
                            </Panel>
                        </div>
                    </div>
        )
    }
}
export default PittaPage;

