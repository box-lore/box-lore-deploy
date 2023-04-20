
import React, { useState, useEffect } from 'react';

function UpcomingGames() {
    
      const [games, setGames] = useState([]);
    
      const [selectedGame, setSelectedGame] = useState(null);
      const [boxScoreData, setBoxScoreData] = useState([]);
    
      useEffect(() => {
        // fetch data from API for basketball games
        fetch('https://www.balldontlie.io/api/v1/games')
          .then(response => response.json())
          .then(data => setGames(data.data.slice(0, 3))); // set state with the three most recent games
      }, []);
    
      const handleBoxScoreClick = (gameId) => {
        setSelectedGame(gameId);
        // fetch data from API for the selected game's box score
        fetch(`https://www.balldontlie.io/api/v1/stats?game_ids[]=${gameId}`)
          .then(response => response.json())
          .then(data => setBoxScoreData(data.data));
      }
    
      return (
        <div>
          <h2>Recent Basketball Games</h2>
          <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <thead>
              <tr>
                <th>Home Team</th>
                <th>Score</th>
                <th>Away Team</th>
                <th>Score</th>
                <th>Box Score</th>
              </tr>
            </thead>
            <tbody>
              {games.map(game => (
                <tr key={game.id}>
                  <td>{game.home_team.full_name}</td>
                  <td>{game.home_team_score}</td>
                  <td>{game.visitor_team.full_name}</td>
                  <td>{game.visitor_team_score}</td>
                  <td>
                    <button onClick={() => handleBoxScoreClick(game.id)}>View Box Score</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
    
          {selectedGame && (
            <div>
              <h3>{games.find(game => game.id === selectedGame).home_team.full_name} vs. {games.find(game => game.id === selectedGame).visitor_team.full_name} Box Score</h3>
              <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                  <tr>
                    <th>Player</th>
                    <th>Team</th>
                    <th>Points</th>
                    <th>Rebounds</th>
                    <th>Assists</th>
                  </tr>
                </thead>
                <tbody>
                  {boxScoreData.map(player => (
                    <tr key={player.player.id}>
                      <td>{player.player.first_name} {player.player.last_name}</td>
                      <td>{player.team.full_name}</td>
                      <td>{player.pts}</td>
                      <td>{player.reb}</td>
                      <td>{player.ast}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      );
    }
    
    export default UpcomingGames;
    
    
//widget code

/*
import axios from 'axios';
import React, { useEffect } from 'react';

function UpcomingGames() {
    
      useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://widgets.proballers.com/dist/team-schedule-results-banner-widget-v1.1.js";
        script.async = true;
        document.body.appendChild(script);
        script.addEventListener('load', () => {
            window.PbTeamScheduleResultsBannerWidget.render();
          });
        }, []);
      
        return (
          <div className="proballers-widget-team-schedule-results-banner" data-proballers-widget-id="357448af-fc96-42fe-b26e-d0e149b1bea7" style={{fontFamily: 'Montserrat, sans-serif'}}>
            <a href="https://www.proballers.com/" target="_blank" rel="noreferrer">See stats on Proballers</a>
          </div>
        );
        

    }

    export default UpcomingGames;
    
    
    
   */


 
