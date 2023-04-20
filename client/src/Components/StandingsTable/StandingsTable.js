import React, { Component } from 'react';
import { useTable } from 'react-table';
import './StandingsTable.css'

//const seasons = require('../../jsons/seasons.json');
const standings_json = require('../../jsons/standings.json');
const standings_data = standings_json.response[0]

class StandingsTable extends Component {

    //var conf_dict = { True : 'Western Conference', False : 'Eastern Conference'};

    constructor(props){
        super(props)

        // Set initial state
        this.state = {toggle : false}

        this.isClicked = this.isClicked.bind(this)
        // Binding this keyword
    }
    isClicked() {
        console.log(this.state.toggle)
        this.setState(prevState => ({
            toggle: !prevState.toggle
        }));
    }

    checkState(state) {
        if (state){
            return 'Western Conference'
        }
        else{
            return 'Eastern Conference'
        }
    }

    render()
    {
        return (
            <div className="StandingsTable">
                <button onClick={this.isClicked}>
                    {this.checkState(this.state.toggle)}
                </button>
                <table>
                    <tr className="Headers">
                        <th>#</th>
                        <th></th>
                        <th>Team</th>
                        <th>W</th>
                        <th>L</th>
                        <th>Pct</th>
                    </tr>
                    {standings_data.filter(obj => obj.group.name == this.checkState(this.state.toggle)).map((val, key) => {
                        return (
                            <tr className="Values" key={key}>
                                <td>{val.position}</td>
                                <td><img
                                    src={val.team.logo}
                                    width={50}
                                    height={'auto'}
                                    alt="new"
                                /></td>
                                <td>{val.team.name}</td>
                                <td>{val.games.win.total}</td>
                                <td>{val.games.lose.total}</td>
                                <td>{val.games.win.percentage}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        );
    }
}

    export default StandingsTable;