import React, { Component } from 'react';
import { Table, Panel } from 'react-bootstrap';
import { PittaFoods, VataFoods, KaphaFoods } from './foods';


export default class CompareFoods extends Component {
    render(){
        const panelStyle = (<h1 style={{color:"red"}}>Preferred Foods by Dosha Type</h1>)
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
                            <PittaFoods />
                        </td>
                        <td className = "col-sm-3">
                           
                            <KaphaFoods />
                         
                        </td>
                        <td className = "col-sm-3">
                           <VataFoods />
                            
                        </td>
                    </tr>
                </tbody>
            </Table>
         </div>
        )
    }
}