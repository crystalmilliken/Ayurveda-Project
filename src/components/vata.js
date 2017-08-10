import React, { Component } from 'react';
import { VataFoods } from './foods';
import { Panel, Media } from 'react-bootstrap';
import Sky from '../images/sky.png';
import {Link} from 'react-router-dom';
import Exercise from '../images/exercise.jpeg';

class VataPage extends Component {
    render(){
   
     
        return(
                <div className = "container">
                    
                  <img src = {Sky} alt="Vata Dosha"style={{minwidth:"800px", minHeight: "211px", paddingBottom:"1em"}}/>
                  <h4>***Note: These traits probably describe you when you are healthy and at your best.</h4> <br />
                        <Panel header = {(<h2>Physical Traits</h2>)}  style={{maxWidth:"800px"}}>
                        <h4>
                        You have likely have a thin frame. Your energy comes in bursts. You have dry skin and hair. You likely
                        have a cold intolerance.</h4><br /></Panel>
                         <Panel header = {(<h2>Emotional Traits</h2>)}  style={{maxWidth:"800px"}}>
                         <h4>You love excitement and new experiences. You are quick to ander but also quick to forgive
                         You take initiative and are a great conversationalist.</h4></Panel>
                         <div>
                        <Panel header = {(<h2>Preferred Foods</h2>)}  style={{maxWidth:"800px"}}>
                         <VataFoods />
                         </Panel>
                             </div>
                        <div>
                            <Panel style={{maxWidth:"800px"}}>
                            <Media>
                                <Media.Left>
                                < Link to = {"/exercise"}><img src={Exercise} alt="Vata Exercises"/></Link>
                                </Media.Left>
                                <Media.Body>
                                    <Media.Heading>What about exercises??</Media.Heading>
                                    <p>Your dosha type matters even in deciding what exercises <br/>
                                    are best for you. So just < Link to = {"/exercise"}>what exercises are good for Vatas?</Link></p>
                                </Media.Body>
                            </Media>
                            </Panel>
                        </div>
                    </div>
        )
    }
}
export default VataPage;
