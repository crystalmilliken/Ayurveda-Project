import React, { Component } from 'react';
import { Table, Panel } from 'react-bootstrap';


export default class Exercise extends Component {
    render(){
        const panelStyle = (<h1 style={{color:"red"}}>Exercises by Dosha Type</h1>)
        return(
        <div className = "container">
            <Panel header = {panelStyle} style={{textAlign:"center",  marginBottom:"0"}}></Panel>
            <Table striped bordered condensed hover>
                <thead>
                    <tr>
                        <th>Pitta</th>
                        <th>Kapha</th>
                        <th>Vata</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className = "col-sm-3">
                            <ul>
                             <li>Endurance Sports</li>
                            <li>Winter Sports</li>
                            <li>Water Sports</li>
                            <li>Tennis</li>
                            <li>Hiking</li>
                            <li>Competitive Sports</li>
                            <li>Mountain Climbing</li>
                            </ul>
                        </td>
                        <td className = "col-sm-3">
                            <ul>
                            <li>Endurance Sports: All</li>
                            <li>Kaphas are great at most sports, <br/>they just need to work
                                on motivation!
                            </li>
                            </ul>
                        </td>
                        <td className = "col-sm-3"><ul>
                            <li>Yoga</li>
                            <li>Dance</li>
                            <li>Light Bicycling</li>
                            <li>Light Tennis</li>
                            <li>Short Hikes</li>
                            <li>Walking</li>
                            <li>Aerobics</li>
                            <li>Tai Chi</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </Table>
         </div>
        )
    }
}