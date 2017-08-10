import React, { Component } from 'react';
import { KaphaFoods } from './foods';
import { Panel, Media } from 'react-bootstrap';
import Water from '../images/water.png';
import {Link} from 'react-router-dom';
import Exercise from '../images/exercise.jpeg';
 
class KaphaPage extends Component {
    render(){
   
     
        return(
                <div className = "container">
                    
                  <img src = {Water} alt="Kapha Dosha"style={{minwidth:"800px", minHeight: "253px", paddingBottom:"1em"}}/>
                  <h4>***Note: These traits probably describe you when you are healthy and at your best.</h4> <br />
                        <Panel header = {(<h2>Physical Traits</h2>)}  style={{maxWidth:"800px"}}>
                        <h4>
                        You have a strong build and are likely good at endurance sports. You sleep well and don't have too many digestion
                        issues. You have large eyes and great skin.</h4><br /></Panel>
                         <Panel header = {(<h2>Emotional Traits</h2>)}  style={{maxWidth:"800px"}}>
                         <h4>You are very thoughtful.
                         You may find that people describe you as very loving. <br />
                         You genuinely enjoy life.</h4></Panel>
                         <div>
                        <Panel header = {(<h2>Preferred Foods</h2>)}  style={{maxWidth:"800px"}}>
                         <KaphaFoods />
                         </Panel>
                             </div>
                              <div>
                            <Panel style={{maxWidth:"800px"}}>
                            <Media>
                                <Media.Left>
                                < Link to = {"/exercise"}><img src={Exercise} alt="Kapha Exercises"/></Link>
                                </Media.Left>
                                <Media.Body>
                                    <Media.Heading>What about exercises??</Media.Heading>
                                    <p>Your dosha type matters even in deciding what exercises <br/>
                                    are best for you. So just < Link to = {"/exercise"}>what exercises are good for Kaphas?</Link></p>
                                </Media.Body>
                            </Media>
                            </Panel>
                        </div>
                    </div>
        )
    }
}
export default KaphaPage;
