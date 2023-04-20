import React, { Component, useState, useEffect} from 'react';
//import { useTable } from 'react-table';
import './TeamDash.css'

const allTeams = ["Atlanta Hawks","Boston Celtics","Brooklyn Nets","Charlotte Hornets","Chicago Bulls","Cleveland Cavaliers",
    "Dallas Mavericks","Denver Nuggets","Detroit Pistons","Golden State Warriors","Houston Rockets","Indiana Pacers","Los Angeles Clippers",
    "Los Angeles Lakers","Memphis Grizzlies","Miami Heat","Milwaukee Bucks","Minnesota Timberwolves","New Orleans Pelicans","New York Knicks",
    "Oklahoma City Thunder","Orlando Magic","Philadelphia 76ers","Phoenix Suns","Portland Trail Blazers","Sacramento Kings","San Antonio Spurs",
    "Toronto Raptors","Utah Jazz","Washington Wizards"]

var currentTeams = [...allTeams]

const allSeasons = ['2022', '2021', '2020']

var currentSeason = allSeasons[0]

const getData = {
    getStat(team, stat, season){
        const teamjson = require('../../jsons/teamstats/teamstats' + season + '.json');
        return teamjson.stats[team]['Per Game'][stat];
    },
    getTeamStats(team, season){
        const teamjson = require('../../jsons/teamstats/teamstats' + season + '.json');
        return(
            <tr className="TeamDashValues">
                <td></td>
                <td>{getData.getStat(team, 'Team', season)}</td>
                <td>{teamjson.stats[team]['Advanced']['W']}</td>
                <td>{teamjson.stats[team]['Advanced']['L']}</td>
                <td>{teamjson.stats[team]['Advanced']['ORtg']}</td>
                <td>{teamjson.stats[team]['Advanced']['DRtg']}</td>
                <td>{getData.getStat(team, 'FG%', season)}</td>
                <td>{getData.getStat(team, '2P%', season)}</td>
                <td>{getData.getStat(team, '3P%', season)}</td>
                <td>{getData.getStat(team, 'FT%', season)}</td>
                <td>{getData.getStat(team, 'ORB', season)}</td>
                <td>{getData.getStat(team, 'DRB', season)}</td>
                <td>{getData.getStat(team, 'TRB', season)}</td>
                <td>{getData.getStat(team, 'AST', season)}</td>
                <td>{getData.getStat(team, 'TOV', season)}</td>
                <td>{getData.getStat(team, 'STL', season)}</td>
                <td>{getData.getStat(team, 'BLK', season)}</td>
            </tr>
        )
    },
    getTeamsStatsTable(teams, season){
        return(
            <table>
                <tr className="TeamDashHeaders">
                    <th></th>
                    <th>Team</th>
                    <th>W</th>
                    <th>L</th>
                    <th>ORT</th>
                    <th>DRT</th>
                    <th>FG%</th>
                    <th>2P%</th>
                    <th>3P%</th>
                    <th>FT%</th>
                    <th>ORB</th>
                    <th>DRB</th>
                    <th>TRB</th>
                    <th>AST</th>
                    <th>TOV</th>
                    <th>STL</th>
                    <th>BLK</th>
                    <th></th>
                </tr>
                <tbody>
                    {allTeams.map((val) => {
                        return (
                            getData.getTeamStats(val, currentSeason)
                        )
                    })}
                </tbody>
            </table>
        )
    }
};

class TeamDash extends Component {
    constructor(props){
        super(props);
        this.state = {stateSeason : currentSeason,
                      stateTeams : currentTeams}
        this.changeSeason = this.changeSeason.bind(this)
    }
    changeSeason(newSeason) {
        currentSeason = newSeason;
        this.promisedSetState(prevState => ({
            stateSeason : newSeason,
            stateTeams : prevState.state.stateTeams
        },() => {
            if(prevState.getStateSeason() !== this.getStateSeason()){
                window.location.reload(false);
                this.forceUpdate();
                console.log(this.getStateSeason())
            }
        }));
        this.render();
    }
    promisedSetState = (newState) => new Promise(resolve => this.setState(newState, resolve));
    getStateSeason(){
        return (this.state.stateSeason);
    }
    getStateTeams(){
        return (this.state.stateTeams);
    }
    getStat(team, stat, season){
        const teamjson = require('../../jsons/teamstats/teamstats' + season + '.json');
        return teamjson.stats[team]['Per Game'][stat];
    }
    getTeamStats(team, season){
        const teamjson = require('../../jsons/teamstats/teamstats' + season + '.json');
        return(
            <tr className="TeamDashValues">
                <td></td>
                <td>{getData.getStat(team, 'Team', season)}</td>
                <td>{teamjson.stats[team]['Advanced']['W']}</td>
                <td>{teamjson.stats[team]['Advanced']['L']}</td>
                <td>{teamjson.stats[team]['Advanced']['ORtg']}</td>
                <td>{teamjson.stats[team]['Advanced']['DRtg']}</td>
                <td>{getData.getStat(team, 'FG%', season)}</td>
                <td>{getData.getStat(team, '2P%', season)}</td>
                <td>{getData.getStat(team, '3P%', season)}</td>
                <td>{getData.getStat(team, 'FT%', season)}</td>
                <td>{getData.getStat(team, 'ORB', season)}</td>
                <td>{getData.getStat(team, 'DRB', season)}</td>
                <td>{getData.getStat(team, 'TRB', season)}</td>
                <td>{getData.getStat(team, 'AST', season)}</td>
                <td>{getData.getStat(team, 'TOV', season)}</td>
                <td>{getData.getStat(team, 'STL', season)}</td>
                <td>{getData.getStat(team, 'BLK', season)}</td>
            </tr>
        )
    }
    getTeamsStatsTable(teams, season){
        return(
            <table>
                <tr className="TeamDashHeaders">
                    <th></th>
                    <th>Team</th>
                    <th>W</th>
                    <th>L</th>
                    <th>ORT</th>
                    <th>DRT</th>
                    <th>FG%</th>
                    <th>2P%</th>
                    <th>3P%</th>
                    <th>FT%</th>
                    <th>ORB</th>
                    <th>DRB</th>
                    <th>TRB</th>
                    <th>AST</th>
                    <th>TOV</th>
                    <th>STL</th>
                    <th>BLK</th>
                    <th></th>
                </tr>
                <tbody>
                    {this.state.stateTeams.map((val) => {
                        return (
                            getData.getTeamStats(val, this.getStateSeason())
                        )
                    })}
                </tbody>
            </table>
        )
    }
    seasonDrop(){
        return(
            <div>
                <label>
                    Select Season to view:  
                    <select id = 'seasonDrop' classname = 'seasonDrop' value = {this.getStateSeason} onClick={e=>{this.changeSeason(e.select.value)}}>
                        {allSeasons.map((val) => {
                            return(
                                <option value = {val}>{val}</option>
                            )
                        })}
                    </select>
                </label>
            </div>
        )
    }
    render(){
        return(
            <div>
                <div className='TeamDash'>
                    {this.seasonDrop()}
                    </div>
                <div className='TeamDashTable'>
                    {this.getTeamsStatsTable(this.state.stateTeams, this.state.stateSeason)}
                </div>
            </div>
        );
    }
}

export default TeamDash;