import React, { Component } from 'react';
import { Table, Panel } from 'react-bootstrap';
import { PittaLifestyle, KaphaLifestyle, VataLifestyle } from './lifestyles';


export default class CompareLifestyle extends Component {
    render(){
        const panelStyle = (<h1 style={{color:"red"}}>Lifestyles by Dosha Type</h1>)
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
                                <PittaLifestyle />
                            </td>
                            <td className = "col-sm-3">
                                <KaphaLifestyle />
                            </td>
                            <td className = "col-sm-3">
                                <VataLifestyle />
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}