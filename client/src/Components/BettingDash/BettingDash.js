import React, { Component } from 'react';
import axios from 'axios';
import './BettingDash.css'

class BettingDash extends Component {
    constructor(props){
        super(props);
        this.state = {oddsData : []}
    }
    async getData(){
        await axios.get(`/getbettingodds/`)
        .then(response => {
        this.setState({
            oddsData: response.data,
        });
    })
    .catch(error => {
        console.error(error);
    });
    this.render();
    }
    oddsTable(){
        return(
            <table>
                <thead>
                    <th></th>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        )
    }
    render(){
        this.getData();
        return(
            []
        )
    }
}

export default BettingDash;