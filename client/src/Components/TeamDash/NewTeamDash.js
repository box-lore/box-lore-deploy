import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TeamSeasonTable() {
  const [teamSeasons, setTeamSeasons] = useState([]);

  useEffect(() => {
    axios.get('/teamseason')
      .then(res => setTeamSeasons(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Content</th>
        </tr>
      </thead>
      <tbody>
        {teamSeasons.map(teamSeason => (
          <tr key={teamSeason._id}>
            <td>{teamSeason.title}</td>
            <td>{teamSeason.content.join(', ')}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}