import React, { Component } from 'react';
import axios from 'axios';
import './TeamDash.css'

const allTeams = ["Atlanta Hawks","Boston Celtics","Brooklyn Nets","Charlotte Hornets","Chicago Bulls","Cleveland Cavaliers",
    "Dallas Mavericks","Denver Nuggets","Detroit Pistons","Golden State Warriors","Houston Rockets","Indiana Pacers","Los Angeles Clippers",
    "Los Angeles Lakers","Memphis Grizzlies","Miami Heat","Milwaukee Bucks","Minnesota Timberwolves","New Orleans Pelicans","New York Knicks",
    "Oklahoma City Thunder","Orlando Magic","Philadelphia 76ers","Phoenix Suns","Portland Trail Blazers","Sacramento Kings","San Antonio Spurs",
    "Toronto Raptors","Utah Jazz","Washington Wizards"]

//const teamCodes = [1,2,4,5,6,7,8,9,10,11,14,15,16,17,19,20,21,22,23,24,25,26,27,28,29,30,31,38,40,41]

var currentTeams = [...allTeams]

const allSeasons = ['2022', '2021', '2020', '2019', '2018']

var currentSeason = allSeasons[0]

class TeamDash extends Component {
    constructor(props){
        super(props);
        this.state = {stateSeason : currentSeason,
                      stateTeams : currentTeams,
                      seasonData : []}
        this.changeSeason = this.changeSeason.bind(this)
    }
    componentDidMount() {
        axios.get(`/getteamseason/${this.state.stateSeason}`)
            .then(response => {
            this.setState({
                seasonData: response.data,
            });
        })
        .catch(error => {
            console.error(error);
        });
    }
    changeSeason(newSeason) {
        currentSeason = newSeason;
        this.setState({
            stateSeason : newSeason
        });
        this.componentDidMount();
        this.render();
    }
    seasonDrop(){
        return(
            <div>
                <label>
                    Select Season to view:  
                    <select id = 'seasonDrop' classname = 'seasonDrop' onClick={e=>{this.changeSeason(e.target.value)}}>
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
    statsTable(){
        return(
            <table>
            <thead>
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
            </thead>
            <tbody>
                {allTeams.map(currTeam =>(
                    this.state.seasonData.map(teamSeason => (
                        <tr>
                            <td>{teamSeason.content[0][currTeam]['Per Game']['Team']}</td>
                            <td>{teamSeason.content[0][currTeam]['Advanced']['W']}</td>
                            <td>{teamSeason.content[0][currTeam]['Advanced']['L']}</td>
                            <td>{teamSeason.content[0][currTeam]['Advanced']['ORtg']}</td>
                            <td>{teamSeason.content[0][currTeam]['Advanced']['DRtg']}</td>
                            <td>{teamSeason.content[0][currTeam]['Per Game']['FG%']}</td>
                            <td>{teamSeason.content[0][currTeam]['Per Game']['2P%']}</td>
                            <td>{teamSeason.content[0][currTeam]['Per Game']['3P%']}</td>
                            <td>{teamSeason.content[0][currTeam]['Per Game']['FT%']}</td>
                            <td>{teamSeason.content[0][currTeam]['Per Game']['ORB']}</td>
                            <td>{teamSeason.content[0][currTeam]['Per Game']['DRB']}</td>
                            <td>{teamSeason.content[0][currTeam]['Per Game']['TRB']}</td>
                            <td>{teamSeason.content[0][currTeam]['Per Game']['AST']}</td>
                            <td>{teamSeason.content[0][currTeam]['Per Game']['TOV']}</td>
                            <td>{teamSeason.content[0][currTeam]['Per Game']['BLK']}</td>
                            <td>{teamSeason.content[0][currTeam]['Per Game']['STL']}</td>
                        </tr>
                        ))
                ))}
            </tbody>
            </table>
        )
    }
    render(){
        return(
            <div>
                <div className='TeamDashDrop'>
                    {this.seasonDrop()}
                </div>
                <p></p>
                <div className='TeamDashTable'>
                    {this.statsTable()}
                </div>
                <div>
                    {this.state.stateSeason}
                </div>
            </div>
        );
    }
}

export default TeamDash;